window.onload = function () {
  // counter for player score
  var wins;
  var losses;
  var scoreCounter = 0;
  var targetScore = Math.floor(Math.random() * (102) + 19);
  console.log(targetScore);

  $(".startScoreBox").text(targetScore)

  var pointArray = [pointOptions1, pointOptions2, pointOptions3, pointOptions4];

  // sets score for all four crystals to a random integer between 1 and 12
  var pointOptions1 = Math.floor(Math.random() * (12) + 1);
  var pointOptions2 = Math.floor(Math.random() * (12) + 1);
  var pointOptions3 = Math.floor(Math.random() * (12) + 1);
  var pointOptions4 = Math.floor(Math.random() * (12) + 1);
  console.log(pointOptions1);
  console.log(pointOptions2);
  console.log(pointOptions3);
  console.log(pointOptions4);
  // on click function for all crystals

  for (var i = 0; i < pointArray.length; i++) {
    var crystalPic = $("<img>");
    crystalPic.addClass("crystalsBox");
    crystalPic.attr("crystalPointValue", pointArray[i]);
  }




  $(".crystaljpg").on("click", function () {

    var crystalPoints = ($(this).attr("crystalPointValue"));

    crystalPoints = parseInt(crystalPoints);

    scoreCounter += crystalPoints;

    $(".totalScoreBox").text("New score is: " + scoreCounter);
    console.log(totalScore);

    if (scoreCounter === targetScore) {
      alert("You Win!");
    } else if (scoreCounter > targetScore) {
      alert("You lose!");
    }
    
  });







}