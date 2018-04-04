var wins = 0;           //wins counter
var losses =0;          //losses counter


//NOTE TO SELF: to test the function, remember you have to call it.

//create function to reset all the random numbers
function reset(){
    randomNumber();
    gem1();
    gem2();
    gem3();
    gem4();
    $("#wins").text("Wins = " + wins);
    $("#losses").text("Losses = " + losses);
}

// function to generate random number displayed to player. This is be called when the page refreshes or after a win or a loss
function randomNumber(){
        var randomNumber = Math.floor(Math.random() * 102) + 19;
        // $("randomNumber").attr("data-value", randomNumber);
        $("#randomNumber").text(randomNumber);
        console.log(randomNumber);
};

//functions to assign a random number for each gem
function gem1(){
    var random = Math.floor(Math.random() * 13) + 1;
    $("#gem1").attr("data-value", random);
    console.log("gem1" + random);
};

function gem2(){
    var random = Math.floor(Math.random() * 13) + 1;
    $("#gem2").attr("data-value", random);
    console.log("gem2" + random);
};

function gem3(){
    var random = Math.floor(Math.random() * 13) + 1;
    $("#gem3").attr("data-value", random);
    console.log("gem3" + random);
};

function gem4(){
    var random = Math.floor(Math.random() * 13) + 1;
    $("#gem4").attr("data-value", random);
    console.log("gem4" + random);
};

// //click on gems to start adding the sums of the gems
// $(".gemContainer").on("click"), function(){
