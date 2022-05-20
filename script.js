let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    let secretNumber = Math.floor(Math.random() * 9);
    return secretNumber;
};

const getAbsoluteDistance = (number1 , number2) => Math.abs(number1 - number2);

const compareGuesses = (humanGuess , computerGuess , targetNumber) => {
let humanDifference = getAbsoluteDistance(targetNumber , humanGuess);
let computerDifference = getAbsoluteDistance(targetNumber , computerGuess);
if(humanDifference < computerDifference) {
return true;
}
else if (humanDifference === computerDifference) {
return true;
}
else if(computerDifference < humanDifference){
return false;
}
};


// Update score 
const updateScore = winner => {
if(winner === 'human')  humanScore += 1;
else if (winner === 'computer') computerScore += 1;
};

//Increase round
const advanceRound = () => currentRoundNumber += 1;

