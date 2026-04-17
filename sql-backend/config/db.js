const mysql = require("mysql2/promise");

let db;

async function connectDB() {
    db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Utkarsh@1248",
        database: "themecp_leetcode"
    });

    console.log("mysql connected");
}

function getDB() {
    if (!db) {
        throw new Error("Database not connected yet");
    }
    return db;
}

module.exports = { connectDB, getDB };