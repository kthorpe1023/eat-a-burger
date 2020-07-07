$(function () {
  let newBurger = {
    burger: $("#burger").val().trim(),
  };
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();
      console.log("clicked change");
  
      let id = $(this).data('id');
      let devoured = $(this).data('devoured');
      console.log(id + devoured + " index line 8 and 9")
  
      let devouredState = {
        Devoured: devoured,
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState,
      }).then(function () {
        console.log("changed Burger to" + devouredState);
        location.reload();
      });
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      console.log("clicked submit");
  
      let newBurger = {
        burger: $("#burger").val().trim(),
      };
      console.log(newBurger);
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        location.reload();
      });
    });
  
    $(".delete-burger").on("click", function(event) {
      event.preventDefault();
      let id = $(this).data("id");
      console.log(id + " index line 47")
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function () {
        console.log("deleted Burger " + id);
        location.reload();
      });
    });
    });