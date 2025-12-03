const express = require("express");
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