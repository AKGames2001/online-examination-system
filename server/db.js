// ========= This File performs CRUD operations on Database ========= //

// ========= Create Database ========= //
// Query: Database Name, Type: Table or Database
function createDB(db, name, type, columns) {
  if (type === "table") {
    // create new table
    let col_names = Object.keys(columns);
    let outString = [name];

    col_names.forEach((col_name) => {
      let col_str = col_name + " " + columns[col_name];
      outString.push(col_str);
    });
    console.log(outString);
    // db.run("CREATE TABLE ?(?, ?, ?)", outString);
  } else if (type === "row") {
    // create row
    let col_names = Object.keys(columns);
    let outString = "";

    col_names.forEach((col_name) => {
      let col_str = col_name + ", ";
      outString.push(col_str);
    });

    outString = outString.substring(0, Str.length - 2);
    console.log(outString);
    // db.run(`INSERT INTO users(username, password, name, email, role, contact, country) VALUES (?)`, outString)

    // db.run(
    //   `INSERT INTO users(message, name, day)
    //           VALUES('Hi', 'aditya', 'monday'),
    //                 ('Hello', 'anant', 'sunday'),
    //                 ('Welcome', 'manasi', 'saturday')`
    // );
  }
  return true;
}

// ========= Read Database ========= //
function readDB(db, url_query = null, content = null) {
  var exportData = null;

  if (url_query === null) {
    // read the whole database
    db.each(`SELECT user FROM users`, (err, row) => {
      if (err) {
        throw err;
      }
      exportData = row.message;
    });
  } else {
    // check url_query and read database
    db.each(
      `SELECT * FROM users WHERE ? = ?`,
      [url_query, content],
      (err, row) => {
        if (err) {
          throw err;
        }
        // Check what this line returns
      }
    );
  }

  console.log(exportData);
  return exportData;
}

function readDB_login(db, content) {
  var exportData = {};
  console.log({ content });
  // check url_query and read database
  db.serialize(() => {
    db.each(
      "SELECT username NAME, password PASSWORD FROM users WHERE username =?",
      [content],
      function (err, row) {
        if (err) {
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        console.log(` ID: ${row.NAME},    Name: ${row.PASSWORD}`);
        exportData = {
          username: row.NAME,
          password: row.PASSWORD,
        };
        console.log({ exportData });
      }
    );
  });

  // let response = db.run(
  //   `SELECT username NAME, password PASS FROM users WHERE username = ?`,
  //   [content],
  //   (err, row) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(`NAME: ${row.NAME}, Pass: ${row.PASS} `);
  //     exportData = row;
  //   }
  // );

  console.log(exportData);
  return exportData;
}

// ========= Update Database ========= //
function updateDB(db, url_query, content) {
  return true;
}

// ========= Delete Database ========= //
function deleteDB(db, url_query, value) {
  return true;
}

export { createDB, readDB, readDB_login, updateDB, deleteDB };
