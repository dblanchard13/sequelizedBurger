var express = require("express");
var db = require("../models");
var router = express.Router();
console.log(db);

router.get("/", function (req, res) {
    db.SeqBurger.findAll({
        order:["burger_name"]
    }).then(function (response) {
        var data = {
            allBurgers: response
        }
        res.render("index", data);
    });
});

router.post("/", function (req, res) {
    db.SeqBurger.create({
        burger_name: req.body.name
    }).then(function (response) {
        console.log(response);
        res.redirect("/");
    });
});

router.post("/customerData", function (req, res) {
    db.Customer.create({
        name: req.body.name
    }).then(function (response) {
        db.Customer.find({
            where: {
                name: req.body.name
            }
        }).then(function (response) {
            console.log("__________________________________________________");
            console.log(response);
            db.SeqBurger.update(
                {
                    CustomerId: response.id
                },
                {
                    where: {
                        id: parseInt(req.body.burgerId)
                    }
                }).then(function (response) {
                    console.log("Both tables are updated");
                });
        });
        
    });
});

router.put("/update/:id", function (req, res) {
    db.SeqBurger.update({
        devoured: true,
    },{
            where: {
                id: parseInt(req.params.id)
            }
        
    });
    res.redirect("/");
});

router.delete("/delete/:id", function (req, res) {
    db.SeqBurger.destroy({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.redirect("/");
});
module.exports = router;




