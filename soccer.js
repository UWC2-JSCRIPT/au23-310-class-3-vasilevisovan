
/*const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 *
  @param {string} result 
  @returns {number} point value
 
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
} */

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

const RESULT_VALUES = { w: 3, d: 1, l: 0 };

function getTotalPoints(results) {
  
  let totalPoints = 0;

  for (let result of results) {
    if (RESULT_VALUES[result]) {
      totalPoints += RESULT_VALUES[result];
    }
  }

  return totalPoints;
}

function orderTeams(...teams) {
  for (const team of teams) {
    const points = getTotalPoints(team.results);
    console.log(`${team.name}: ${points} points`);
  }
}

const team1 = { name: 'Sounders', results: 'wwd1' };
const team2 = { name: 'Galaxy', results: 'wlld' };
// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7
console.log(orderTeams(team1,team2));


// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"




// Check orderTeams
/*orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);*/
// should log the following to the console:
// Sounders: 7
// Galaxy: 4