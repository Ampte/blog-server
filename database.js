const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subscribed_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    email TEXT
    );
    `);

    module.exports = db;