const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./genesis.dbm', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.all("select name from sqlite_master where type='table'", function (err, tables) {
    console.log(tables);
  });
});
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});