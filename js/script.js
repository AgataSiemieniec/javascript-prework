{
const playGame = function(playerInput){
    clearMessages();
    const getMoveName = function(argMoveId){
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

    const randomNumber = Math.floor(Math.random() * 3 + 1);
        computerMove = getMoveName(randomNumber);
        playerMove = getMoveName(playerInput);
    
        console.log('Wylosowana liczba to: ' + randomNumber);
        console.log('Gracz wybrał: ' + playerInput);

        printMessage('Komputer wylosował: ' + computerMove);
        printMessage('Twój ruch to: ' + playerMove);

 /* wynik rozgrywki */  
    const displayResult = function(argComputerMove, argPlayerMove){
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

}