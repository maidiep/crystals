


// $("#gem1").on("click", function(){
//     var random = Math.floor(Math.random() * 13) + 1;
//  $("#crystalSum").text(random);
//  });

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

gem1();