const sqlite3 = require('sqlite3');

module.exports = () => {
  async function getPoolConnection() {
    const database = new sqlite3.Database('./data/professor-girafales.db');

    database.serialize(() => {
      database.run(`CREATE TABLE IF NOT EXISTS public_agent (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        federal_tax_id TEXT,
        description TEXT,
        name TEXT
      )`, error => console.log(error));
    });

    return database;
  }

  return {
    getPoolConnection,
  }
}