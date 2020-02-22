/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore, activeplayer,dice,gameplaying;
init();
//score for currently playing player


document.querySelector('.btn-roll').addEventListener('click', function() {

  if(gameplaying){

     
// 1- random number
 var dice = Math.floor( Math.random() * 6) + 1;
 //2- display the result
 var diceDOM =document.querySelector('.dice');
 diceDOM.style.display= 'block';
 diceDOM.src = 'dice-' + dice + '.png';
 //3- update the round score if the rolled number is not one
   if (dice !== 1){
       //add score
       roundscore += dice;
       document.querySelector( '#current-' + activeplayer).textContent = roundscore;    
   } else {
       //next player
       nextplayer();
       //dry princple dont repat yourself in our code dont repear same code
       
       //document.querySelector('.player-1-panel').classList.add('active');
 //to remove add and toggle html classes
   //toggle removes the class whenits there adn aadd it when its not there
 
   }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function (){
  if (gameplaying){

// add current score to global score
 scores[activeplayer] += roundscore;


//update the UI

document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

//check if player won the game

if( scores[activeplayer] >= 20)
{ document.querySelector('#name-' + activeplayer).textContent= 'winner';
 document.querySelector('.dice').textContent='none';
 document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
 document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
gameplaying = false;
}
else {
  nextplayer();
}
//next player
}
});

function nextplayer()
{
    activeplayer === 0 ? activeplayer = 1 : activeplayer =0;
      roundscore = 0;
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';

      
      document.querySelector('.player-0-panel').classList.toggle('active');
      
      document.querySelector('.player-1-panel').classList.toggle('active');
      document.querySelector('.dice').style.display='none';
    }

    document.querySelector('.btn-new').addEventListener('click' , init);
    
    function init() 
    {
      scores=[0,0];
      roundscore=0;
      activeplayer = 0;
      gameplaying = true;

      document.querySelector('.dice').style.display = 'none';
//another way of slsecting elemtns by id deon require css and bit fadter than queryse;ector

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('name-0').textContent= 'Player 1';
document.getElementById('name-1').textContent= 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

    }




 // first argumemt is type then second is the function thata should be called as soon as
// the fn that we pass in another fn as an argument N is callback fn
//anynoums fn is that doenot have any  b name and cant be reused




//event are notifcfications that aresend to notify are page something happened on webpage
//examole clickin button scvrollkiing down


//a state vARIAiBLE TELLS US THE CONDITION OF THE SYSTEM
//we need it when we nedd to remember asomething



//dice = Math.floor( Math.random() * 6) + 1;
//this will produce any random number between 0 to 6 and mathfloor choose only whole part
//console.log(dice);

//document.querySelector( ' #current-' + activeplayer).textContent= dice;
//changec ontent of slectioln there r two ways textcontent we used it can only plain text if we ooput some html then we will use  innerhtml
 //document.querySelector('#current-'+ activeplayer).innerHTML = '<em>'
  //   + dice + '</em>'

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

