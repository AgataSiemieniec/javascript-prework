function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if(argMoveId ==3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
// ok 


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);


    
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);


function displayResult(argComputerMove, argPlayerMove){
  //  console.log('moves:', argComputerMove, argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrana!:');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remisik:');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywka:');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis:');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Wygrana:');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrywasz!:');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Looser!:');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!:')
    }
}

let argComputerMove = getMoveName(randomNumber);

let argPlayerMove = getMoveName(playerInput);

displayResult(argComputerMove, argPlayerMove);

