$(function() {
    var topics = ["pizza", "ramen", "cheese", "cake", "sushi", "candy", "donut", "pancake", "ice cream", "steak"];

    var num = 10;

    // if (localStorage.getItem('theTopics')) {
    //     topics = JSON.parse(localStorage.getItem('theTopics'))
    // } 


    //make buttons
    function renderButtons() {
        $(".button-div").empty();

        for (var i = 0; i < topics.length; i++) {
            $(".button-div").prepend($("<button>").attr("data-name", topics[i]))
        }
      }


    //create new button
    $("#submit").on("click", function(event) {
        event.preventDefault()

        var thisSearch = $("#search-input").val().trim()
        topics.push(thisSearch)

        // localStorage.clear()
        // localStorage.setItem('theTopics', JSON.stringify(topics))

        renderButtons()
        $("#search-input").val("")
      })


    //fetch data and create imgs
    function workingBtns() {
        $(".img-div").empty()
        $(".img-div").append($("<div class='card'>").append($("<div>").addClass("card-header img-title")).append($("<div class='card-body'>").append($("<div class='row img-row'>"))))

    })


    renderButtons()
})