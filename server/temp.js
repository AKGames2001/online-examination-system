const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./onlineExam.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

let sql = `SELECT FirstName firstName,
                  LastName lastName,
                  Email email
            FROM customers
            WHERE Country = ?
            ORDER BY FirstName`;

db.each(sql, ["USA"], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
});

db.serialize(() => {
  // Queries scheduled here will be serialized.
  db.run("CREATE TABLE greetings(message text)")
    .run(
      `INSERT INTO greetings(message)
            VALUES('Hi'),
                  ('Hello'),
                  ('Welcome')`
    )
    .each(`SELECT message FROM greetings`, (err, row) => {
      if (err) {
        throw err;
      }
      console.log(row.message);
    });
});

db.run("CREATE TABLE langs(name text)");

db.run(`INSERT INTO langs(name) VALUES(?)`, ["C"], function (err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

let languages = ["C++", "Python", "Java", "C#", "Go"];

// construct the insert statement with multiple placeholders
// based on the number of rows
let placeholders = languages.map((language) => "(?)").join(",");
let sql = "INSERT INTO langs(name) VALUES " + placeholders;

// output the INSERT statement
console.log(sql);

db.run(sql, languages, function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Rows inserted ${this.changes}`);
});

let data = ["Ansi C", "C"];
let sql = `UPDATE langs
            SET name = ?
            WHERE name = ?`;

db.run(sql, data, function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) updated: ${this.changes}`);
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
