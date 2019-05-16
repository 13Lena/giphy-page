var foods = ["pizza", "ramen", "cheese", "cake", "sushi", "candy", "donut", "pancake", "ice cream", "steak"];
var foodTracker = [];
var foodClickArray = [];

function renderButtons() {

    for (var i = 0; i < foods.length; i++) {

        $("header").append("<button class='btn btn-info react-btn' id='" + foods[i] + "'>" + foods[i] + "</button>");
        foodTracker.push(foods[i]);

    };
    foods = [];
}

$("header").on("click", ".react-btn", function () {

    var offset = 0;
    var foodCounter = -1;
    foodClickArray.push($(this).attr("id"));

    for (var i = 0; i < foodClickArray.length; i++) {

        if ($(this).attr("id") === foodClickArray[i]) {
            foodCounter++;
        };
    };

    offset += (foodCounter * 10);
    var searchTerm = $(this).attr("id");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=FXW7Al3FjGv9tvaSSeODXc0h0qoP4F9Q&q=" + searchTerm + "&limit=10&offset=" + offset + "&rating=PG&lang=en"

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        var result = response.data;

        for (var i = 0; i < result.length; i++) {

            var gifDiv = $("<div class='gifs'>");
            var stillGifUrl = result[i].images.fixed_height_still.url;
            var animateGifUrl = result[i].images.fixed_height.url;
            var gifIndex = result[i].title.indexOf("GIF")
            var ratingP = $("<p>").text("Rated: " + result[i].rating);
            var titleP = $("<p>").text("Title: " + result[i].title.substring(0, gifIndex - 1));
            var gif = $("<img class='gifImg' src='" + stillGifUrl + "'>");
            gif.attr("data-state", "still");
            gif.attr("data-animate", animateGifUrl);
            gif.attr("data-still", stillGifUrl);
            $(gifDiv).append(titleP, gif, ratingP);
            $("#gifs-holder").prepend(gifDiv);
        };
    });
});

renderButtons();

$(".btn-sm").on("click", function (event) {

    event.preventDefault();
    var addFood = $(".reaction-search").val().trim().toLowerCase();

    if (foodTracker.indexOf(addFood) === -1) {
        food.push(addFood);
        renderButtons();
    };
    $(".reaction-search").val("");
})