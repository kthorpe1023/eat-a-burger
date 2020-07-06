var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    let burgerObject = {
      burger: data
    };
    res.render("index", {burger: data});
  });
});
router.get('/', function(req, res){
  res.sendFile(__dirname+'../public/index.js');
});

router.post("/api/burgers", function(req, res) {
  burger.create(

    ["name"], [req.body.name], function(result) {
    // Send back the ID of the new quote
    res.json({ newBurger: result.burger });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  burger.update({ devoured: false }, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
  });
  res.status(200).end();
});

// Export routes for server.js to use.
module.exports = router;
