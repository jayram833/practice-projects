import { WebSocketServer } from "ws";
import express from "express";
import sqlite3Pkg from "sqlite3";
import cors from "cors";

const sqlite3 = sqlite3Pkg.verbose();


const app = express();
app.use(cors());
const PORT = 7700;

const wss = new WebSocketServer({ port: 8080 });

const db = new sqlite3.Database("./chat.db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user TEXT,
      message TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
        `)
})

wss.on("connection", (ws) => {
    console.log("Client connected");

    // Send chat history when a user connects
    db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, rows) => {
        if (!err) {
            ws.send(JSON.stringify({ type: "history", data: rows }));
        }
    });

    // Handle incoming messages
    ws.on("message", (message) => {
        const msg = JSON.parse(message);

        // Save message in DB
        db.run("INSERT INTO messages (user, message) VALUES (?, ?)", [msg.user, msg.message], (err) => {
            if (!err) {
                // Broadcast to all clients
                wss.clients.forEach((client) => {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(message);
                    }
                });
            }
        });
    });

    // Handle disconnect
    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));