function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId){
        if ( argMoveId == 1){
        return 'kamień';
        } else if ( argMoveId == 2){
            return 'papier';
        } else if ( argMoveId == 3){
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }


    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage('Komputer wylosował: ' + computerMove);
        
    console.log('Gracz wybrał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

 /* wynik rozgrywki */  
    function displayResult(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if( argComputerMove == argPlayerMove){
            printMessage('Remis!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Wygrana');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Wygrywasz!');
        } else{
            printMessage('Przegrana! Chcesz spróbować kolejny raz ?');
        }
    }
    

    displayResult(computerMove, playerMove); 
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
});
