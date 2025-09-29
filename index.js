const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const subscribers = require("./subscribers.js")


app.use(cors());
app.use(express.json());


app.use(subscribers);


app.get("/", (req, res) => {
    res.send("Hell world");
});

app.listen(port, () => {
    console.log("App is running");
});