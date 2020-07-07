var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    let burgerObject = {
      burger: data
    };
    // console.log(data)
    res.render("index", {burger: data});
  });
});


router.post("/api/burgers", function(req, res) {
  burger.create(

    ["burgers"], ["name"], [req.body.burger], function(result) {
      console.log(req.body.burger + " controller line 21")
    // Send back the ID of the new quote
    res.json({ newBurger: result.burger });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id=" + req.params.id;
  burger.update({ devoured: true }, condition, function (result) {
    // console.log(result + " controller line 32")
    // if (result.changedRows === 0) {
    //   return res.status(404).end();
    // }
  });
  res.status(200).end();
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(condition + " controller line 42")
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
