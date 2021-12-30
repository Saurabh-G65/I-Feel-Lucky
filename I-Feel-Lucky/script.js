'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El =document.getElementById('current--0');
const currentScore1El =document.getElementById('current--1');
const player0El= document.querySelector('.player--0');
const player1El= document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
let activeplayer =0;
let playing = true;
let scores = [0,0];

const switchPlayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore =0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

//roll

btnRoll.addEventListener('click',()=>{
    if(playing){
        const dice = Math.trunc( Math.random() * 6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // game logic
        if(dice !== 1){
            // add to current playersore
            currentScore+= dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
        
        }else{
            // switch players
            switchPlayer()
        };
    };
});

btnHold.addEventListener('click',() =>{
    if(playing){
        scores[activeplayer]+=currentScore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
    if(scores[activeplayer]>= 100){
        playing =  false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    }else switchPlayer();
    };
});

btnNew.addEventListener('click',()=>{
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    currentScore = 0;
    activeplayer =0;
    playing = true;
    scores = [0,0];
});