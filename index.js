const express = require("express");
const { MongoClient } = require('mongodb');
const { createClient } = require('@supabase/supabase-js');

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

// MongoDB connection

if (process.env.MONGODB_URI) {
    console.log("MongoDB URI is set");

    const mongoClient = new MongoClient(process.env.MONGODB_URI);

    // Test the connection
    client.connect()
        .then(() => console.log("MongoDB Connected:", client.db().databaseName))
        .catch(err => console.error("MongoDB Connection error:", err));

    module.exports = mongoClient;
} else {
    console.log("MongoDB URI is not set");
}


// Supabase connection

if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
    console.log("Supabase URL and API key are set");

    const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
    );

    // Test the connection
    supabase
        .from('test_hosting_table')
        .select('*')
        .limit(1)
        .then(({ data, error }) => {
            if (error) console.error('Supabase Connection error:', error);
            else console.log('Supabase Connected:', data);
        });

    module.exports = supabase;
} else {
    console.log("Supabase URL and API key are not set");
}

