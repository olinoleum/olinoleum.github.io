function playGame(argPlayerInput) {

    clearMessages();
    let playerInput = argPlayerInput;

    function getMoveImg(argMoveId){
        if(argMoveId == 1){
            return '<img src="images/rock.png">';
        } else if(argMoveId == 2){
            return '<img src="images/paper.png">';
        } else if(argMoveId == 3){
            return '<img src="images/scissors.png">';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove){
        if (argComputerMove == 1 && argPlayerMove == 2){
            playerPoints++;
            return 'Ty wygrywasz!';
        } else if (argComputerMove == 2 && argPlayerMove == 3) {
            playerPoints++;
            return 'Ty wygrywasz!';
        } else if (argComputerMove == 3 && argPlayerMove == 1) {
            playerPoints++;
            return 'Ty wygrywasz!';
        } else if (argComputerMove ==  argPlayerMove) {
            return '--- Remis --- ';
        } else {
            computerPoints++;
            return 'Przegrałeś monsinior...';
        }
    }
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveImg(randomNumber);
    document.getElementById('computer-hand').innerHTML = computerMove;

    let playerMove =  getMoveImg(playerInput);
    document.getElementById('player-hand').innerHTML = playerMove;

    printMessage(displayResult(randomNumber, playerInput));

    document.getElementById('result').innerHTML = computerPoints + ' : ' + playerPoints;
}

let computerPoints = 0;
let playerPoints = 0;

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});