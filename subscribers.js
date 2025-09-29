const express = require("express");
const router = express.Router();
const db = require("./database")

router.post("/api/add-subscribers", (req, res) => {

    const {email} = req.body;

    const sql = "INSERT INTO subscribers(email) VALUES(?)";

    const proccess = db.prepare(sql);

    const result = proccess.run(email);

    if(result){
        res.json({ subscribe : true});
    };
});


router.get("/api/get-subscribers", (req, res) => {
    
    const sql = "SELECT * FROM subscribers";

    const proccess = db.prepare(sql)

    const result = proccess.all();

    if(result){
        res.json(result);
    };
});

module.exports = router;