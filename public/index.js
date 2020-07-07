$(function () {
  let newBurger = {
    burger: $("#burger").val().trim(),
  };
    $(".change-devoured").on("click", (event) => {
      console.log("clicked change");
  
      let id = $(this).data.id;
      let devoured = $(this).data.devoured;
  
      let devouredState = {
        Devoured: devoured,
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState,
      }).then(function () {
        console.log("changed Burger to", newBurger);
        location.reload();
      });
    });
  
    $(".create-form").on("submit", (event) => {
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
  
    $("#delete-burger").on("click", (event) => {
      event.preventDefault();
      let id = $(this).data("id");
    });
  });