/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// POKUSAJ JEDAN

var scores, roundScores, activePlayer, gamePlaying, twoSix, maxScore, twoSix1;

init();



document.querySelector('.btn-roll').addEventListener('click', function () {

    if(gamePlaying){
        var diceDOM = document.querySelector('.dice');
        var diceDOM1 = document.querySelector('.dice1');
        var dice = Math.floor(Math.random() * 6 + 1);
        var dice1 = Math.floor(Math.random() * 6 + 1);
        
        if(dice == 6){
            twoSix++;
            if(twoSix == 2){
                document.querySelector('#current-' + activePlayer).textContent = '0';
                document.querySelector('#score-' + activePlayer).textContent = '0';
                nextPlayer();
                twoSix = 0;
                return 
            }
        }

        if (dice1 == 6) {
            twoSix1++;
            if (twoSix1 == 2) {
                document.querySelector('#current-' + activePlayer).textContent = '0';
                document.querySelector('#score-' + activePlayer).textContent = '0';
                nextPlayer();
                twoSix1 = 0;
                return
            }
        }
    
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM1.style.display = 'block'
        diceDOM1.src = 'dice-' + dice1 + '.png';
    
        if(dice != 1 && dice1 != 1){
            roundScore = dice + dice1 + roundScore;
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        } else {
            nextPlayer();
        }
    }


})

document.querySelector('.btn-hold').addEventListener('click', function () {

    if(gamePlaying){
        // set current player score
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // check if player won
        if(scores[activePlayer] >= maxScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
            gamePlaying = false;
        } else {
            // reset current player 
            document.querySelector('#current-' + activePlayer).textContent = '0';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
    
            // change current player
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('active')
            roundScore = 0;
        }

    }


    

})

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    twoSix = 0
    twoSix1 = 0
    maxScore = prompt('Od koliko poena zelite da igrate?')
    if(maxScore < 10){
        alert('Morate uneti vise od 10')
        init();
    }


    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

}

function nextPlayer() {
    var diceDOM = document.querySelector('.dice');
    var diceDOM1 = document.querySelector('.dice1');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
    document.querySelector('#current-' + activePlayer).textContent = '0'
    roundScore = 0;
    diceDOM.style.display = 'none';
    diceDOM1.style.display = 'none';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active')
}
