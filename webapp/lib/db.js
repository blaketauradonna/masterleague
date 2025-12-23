import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';

let db;

// Ensure data folder exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const dbFile = path.join(dataDir, 'database.sqlite');

export async function openDb() {
  if (!db) {
    db = await open({
      filename: dbFile,
      driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstname TEXT,
      lastname TEXT,
      duprid TEXT UNIQUE,
      email TEXT UNIQUE,
      solo_level INT,
      doubles_level INT,
      sex TEXT,
      city TEXT,
      club TEXT,
      birthdate DATE,
      password_hash TEXT
    )
  `);
  }

  return db;
}