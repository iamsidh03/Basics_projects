const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Serve static frontend files
// app.use(express.static(path.join(__dirname, 'public')));

// const path = require('path');

// ... above your app.listen
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Route
app.post('/leetcode', async (req, res) => {
    const { username } = req.body;

    if (!username || typeof username !== 'string') {
        return res.status(400).json({ error: "Invalid or missing username" });
    }

    console.log("🔍 Fetching LeetCode data for:", username);

    const query = `
      query getUserProfile($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    try {
        const response = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0"  // Important to bypass bot protection
            },
            body: JSON.stringify({ query, variables: { username } })
        });

        if (!response.ok) {
            console.error("❌ LeetCode API error:", response.statusText);
            return res.status(500).json({ error: "Failed to fetch from LeetCode API" });
        }

        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("❌ Internal server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Default fallback: serve index.html on unknown GET routes (for single-page apps)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
