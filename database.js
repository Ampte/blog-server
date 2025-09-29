const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subscribed_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    email TEXT
    );
    `);

    module.exports = db;