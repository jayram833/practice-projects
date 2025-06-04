import { app } from 'electron';
import path, { dirname } from "path";
import Database from 'better-sqlite3';

const db = new Database(path.join(app.getPath('userData'), 'products.db'));

db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL
  )
`).run();

export function getAllProducts() {
    return db.prepare('SELECT * FROM products').all();
}

export function addProduct(product) {
    db.prepare('INSERT INTO products (name, price) VALUES (?, ?)').run(product.name, product.price);
    return getAllProducts();
}

export function deleteProduct(id) {
    db.prepare('DELETE FROM products WHERE id = ?').run(id);
    return getAllProducts();
}
