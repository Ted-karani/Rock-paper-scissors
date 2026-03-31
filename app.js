const score = {
wins:0,
loses:0,
Ties:0
};

function resetScore(){
  score.wins = 0;
  score.loses = 0;
  score.Ties = 0;
  //localStorage.removeItem('score');
  // alert(`Score has been reset`)
  updateScore();
  
}
//learn about json.parse to store the scores.


function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1/3) {
    return 'Rock';
  } else if (randomNumber < 2/3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Scissors') {
      result = 'Tie';
    } else {
      result = 'You win';
    }

  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Scissors') {
      result = 'You win';
    } else {
      result = 'You lose';
    }

  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Scissors') {
      result = 'You lose';
    } else {
      result = 'Tie';
    }
  }

  if(result=== "You win"){
    score.wins+= 1;
  } else if( result === "You lose"){
    score.loses +=1;
  }else if( result === "Tie"){
    score.Ties +=1;
  }
  updateScore();
  // localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.js-result').innerHTML= result;
document.querySelector('.js-moves').innerHTML = `you picked =   ${playerMove}     -  the computer picked =   ${computerMove}`
  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  //   wins: ${score.wins}, losses: ${score.loses}, Ties: ${score.Ties}`);
}
const scoreElement = document.querySelector('.js-score');

function updateScore() {
  scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.loses}, Ties: ${score.Ties}`;
}
function startGame() {
  document.querySelector('.start-screen').style.display = 'none';
  document.querySelector('.game-content').style.display = 'block';
}
