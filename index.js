const express = require("express");
const { MongoClient } = require('mongodb');
const app = express();

// Main route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// /ping route
app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


const client = new MongoClient(process.env.MONGODB_URI);
console.log(process.env.MONGODB_URI);

// Test the connection
client.connect()
    .then(() => console.log("Connected:", client.db().databaseName))
    .catch(err => console.error("Connection error:", err));

module.exports = client;
