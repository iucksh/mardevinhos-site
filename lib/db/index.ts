import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

const sqlite = new Database('./database.sqlite');
export const db = drizzle(sqlite, { schema });

// Criar tabelas se não existirem
sqlite.exec(`
    CREATE TABLE IF NOT EXISTS appointments (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        company TEXT NOT NULL,
        type TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        observations TEXT,
        status TEXT NOT NULL DEFAULT 'PENDING',
        created_at INTEGER,
        updated_at INTEGER
    );

    CREATE TABLE IF NOT EXISTS contacts (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        company TEXT,
        type TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'NEW',
        created_at INTEGER,
        updated_at INTEGER
    );

    CREATE TABLE IF NOT EXISTS newsletter (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        name TEXT,
        active INTEGER NOT NULL DEFAULT 1,
        created_at INTEGER,
        updated_at INTEGER
    );

    CREATE TABLE IF NOT EXISTS quotes (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        company TEXT NOT NULL,
        type TEXT NOT NULL,
        description TEXT NOT NULL,
        budget TEXT,
        status TEXT NOT NULL DEFAULT 'PENDING',
        created_at INTEGER,
        updated_at INTEGER
    );
`);