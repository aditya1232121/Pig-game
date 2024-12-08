'use strict';
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const buttonnew=document.querySelector('.btn--new');
const buttonroll=document.querySelector('.btn--roll');
const buttonhold=document.querySelector('.btn--hold');
const dice1=document.querySelector('.dice');
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const buttonopen=document.querySelector('.show-modal');
const buttonclose=document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
let playing = true;
buttonopen.addEventListener('click', function(){
    modal.classList.remove('hidden');
})

buttonclose.addEventListener('click',function(){
    modal.classList.add('hidden');
});


dice1.classList.add('hidden');
score0.textContent=0;
score1.textContent=0;
let currentscore=0;
let activeplayer = 0;
let score=[0,0];
buttonroll.addEventListener('click',function(){
    if(playing){
const dice = Math.trunc(Math.random()*6)+1;
dice1.classList.remove('hidden');
dice1.src=`dice-${dice}.png`;
if(dice!==1){
currentscore=currentscore+dice;
document.getElementById(`current--${activeplayer}`).textContent=currentscore;
}
else {
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentscore=0;
activeplayer=activeplayer=== 0 ? 1 : 0;
player1.classList.toggle('player--active');
player2.classList.toggle('player--active');
}
} });
buttonhold.addEventListener('click',function () {
    score[activeplayer] += currentscore;
     document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
    if(score[activeplayer]>20){
        playing = false ;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner') ;
       document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    } else {
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentscore=0;
   
    activeplayer=activeplayer=== 0 ? 1 : 0;
player1.classList.toggle('player--active');
player2.classList.toggle('player--active');
    }
})
buttonnew.addEventListener('click',function(){
    let activeplayer=0;
    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');

})
