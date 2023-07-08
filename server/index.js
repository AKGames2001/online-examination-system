// ========= Initial Package Imports ========= //
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import session from "express-session";
import sqlite3 from "sqlite3";
import _ from "lodash";

// ========= Initial Module Imports ========= //
import { createDB, readDB, updateDB, deleteDB } from "./db.js";
import { login, register } from "./auth/login.js";

// ========= Starting Server ========= //
const PORT = process.env.PORT || 3001;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========= Database Connection ========= //
function openConnection() {
  let db = new sqlite3.Database("./onlineExam.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("== Database Connected ==");
  });
  return db;
}

function closeConnection(db) {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("== Database Disconnected ==");
  });
  return null;
}

// ========= Database Routes ========= //
// Create Table //
// Query: Table Name
app.get("/api/create/table", (req, res) => {
  let table_name = req.query.name;
  let db = openConnection();
  let columns = {
    id: "int",
    name: "text",
    address: "text",
  };

  let response = createDB(db, table_name, "table", columns);
  res.json({ message: "Hello from server!" });

  closeConnection(db);
});

// Create row //
// Query: row Name
app.get("/api/create/row", (req, res) => {
  let row_name = req.query.name;
  let db = openConnection();

  let response = createDB(db, row_name, "row");
  res.json({ message: "Hello from server!" });

  closeConnection(db);
});

// Read Database //
app.get("api/read/all", (req, res) => {
  let db = openConnection();

  let response = readDB(db);
  res.json({ message: "Hello from server!" });

  closeConnection(db);
});

// Read Database with Query //
// Query: Depends on the key and value of Object
app.get("api/read", (req, res) => {
  let db = openConnection();
  let query,
    value = req.query;

  let response = readDB(db, query, value);
  res.json({ message: "Hello from server!" });

  closeConnection(db);
});

// Update Database //
// Query: Depends on the key and value of Object
app.get("api/update", (req, res) => {
  let db = openConnection();
  let query,
    value = req.query;

  let response = updateDB(db, query, value);

  closeConnection(db);
});

// Delete Database //
// Query: Depends on the key and value of Object
app.get("api/update", (req, res) => {
  let db = openConnection();
  let query,
    value = req.query;

  let response = deleteDB(db, query, value);

  closeConnection(db);
});

// ========= Authentication Routes ========= //

app.get("/api/auth/login", (req, res) => {
  let db = openConnection();
  let login_data = req.query;
  console.log(login_data);

  let response = login(db, login_data);
  closeConnection(db);

  if (response === true) {
    res.send(JSON.stringify({ status: 200, error: null, response: response }));
  } else {
    res.send(
      JSON.stringify({
        status: 500,
        error: "Authentication Error",
        response: response,
      })
    );
  }
});

app.get("/api/auth/register", (req, res) => {
  let db = openConnection();
  let register_data = req.query;

  let response = register(db, register_data);
  closeConnection(db);

  if (response === true) {
    res.send(JSON.stringify({ status: 200, error: null, response: response }));
  } else {
    res.send(
      JSON.stringify({
        status: 500,
        error: "Authentication Error",
        response: response,
      })
    );
  }
});

// ========= Rest of the Webpages ========= //
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// ========= Server Host ========= //
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// ========= App Template ========= //

// app.get("/api/read", (req, res) => {
//   var db = openConnection();

//   res.json({ message: "Hello from server!" });

//   closeConnection(db);
// });
