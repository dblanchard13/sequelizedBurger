var router = require("../controllers/burgers_controller.js")(Burger);
router.get("/", function (req, res) {
    Burger.selectAll("burgers", function (err, response) {
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
    Burger.insertOne("burgers", req.body.name, function (err, response) {
        console.log(response);
        res.redirect("/");
    });
});

router.put("/update/:id", function (req, res) {
    Burger.updateOne("burgers", true, parseInt(req.params.id));
    res.redirect("/");
});

router.delete("/delete/:id", function (req, res) {
    Burger.deleteOne("burgers", parseInt(req.params.id));
    res.redirect("/");
});

exports.module = router;