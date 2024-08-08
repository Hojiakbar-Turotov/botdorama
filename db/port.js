const express = require("express");
const dotenv = require('dotenv');

dotenv.config()

const port = process.env.PORT || 4000
const app = express();

app.get("/health", (req, res) => {
    res.status(200).send("I'm alive");
});

app.listen(port, () => {
    console.log(`App is running and listening at http://localhost:${port}`);
});
