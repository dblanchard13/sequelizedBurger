var express = require("express");
var db = require("../models");
var router = express.Router();
router.get("/", function (req, res) {
    console.log(db.seqBurger);
    db.seqBurger.findAll().then(function (err, response) {
        if (err) throw err;
        else {
            var data = {
                allBurgers: response
            }
            res.render("index", data);
        }
    });
});

router.post("/", function (req, res) {
    db.Burger.create({
        burger_name: req.body.name
    }).then(function (err, response) {
        console.log(response);
        res.redirect("/");
    });
});

router.put("/update/:id", function (req, res) {
    db.Burger.update({
        devoured: true,
        where: {
            id: req.params.id
        }
    });
    res.redirect("/");
});

router.delete("/delete/:id", function (req, res) {
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect("/");
});
module.exports = router;




