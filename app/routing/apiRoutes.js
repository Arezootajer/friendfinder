
//should contain two routes:
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// Determine the user's most compatible friend.
    // Convert each user's results into a simple array of numbers.
    // Compare difference between current user's score and each of the other users' scores.
    // Comparison done question by question, adding up differences to determine total Difference.
    // Remember to use absolute value for differences (no negative values).
    // Once you've found the current user's most compatible friend, display in pop-up modal.
    // The modal should display both the name and picture of the closest match.
  
var userData = require("../data/friends");
var path = require("path");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(userData);
  });

  
  app.post("/api/friends", function(req, res) {

    userData.push(req.body);

    var currentScores = req.body.scores;

    console.log("Current User Scores: " + currentScores);

    var leastDif = 0;

    for (var i = 0; i < currentScores.length; i++) {
      leastDif += Math.abs(currentScores[i] - userData[0].scores[i]);
    }

    console.log(leastDif);

    if (userData.length <= 2) {
      console.log("one friend!" + userData[0]);
    } else {
      for (var i = 1; i < userData.length; i++) {
        var comparisonScores = userData[i].scores;
        console.log(comparisonScores);
        var totalDif = 0;
        for (var i = 0; i < currentScores.length; i++) {
          totalDiff+=Math.abs(currentScores[i] - comparisonScores[i]);
          console.log(totalDif);
        }
        if (leastDif >= totalDif) {
          leastDif = totalDif;
          console.log(leastDif);
        }
      } 
    }

    //console.log(userData);
     }); 
};