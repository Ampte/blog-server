const express = require("express");
const router = express.Router();
const db = require("./database")

router.post("/api/add-subscribers", (req, res) => {

    const {email} = req.body;

    const checkEmail = "SELECT * FROM subscribers WHERE email = ?";
    const proccessEmail = db.prepare(checkEmail);
    const resultEmail = proccessEmail.get(email);

    if(resultEmail){
        res.json({subscribe : false, message: 'Already subscribed!'});
    };

    const sql = "INSERT INTO subscribers(email) VALUES(?)";
    const proccess = db.prepare(sql);
    const result = proccess.run(email);

    if(result.length > 0){
        res.json({ subscribe : true, message: 'Subscribed successfully'});
    }else{
        res.json({subscribe : false, message: 'Subscribtion failed!'});
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