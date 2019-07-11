//mario vs link 
'use strict';  

//event listeners 
document.getElementById('marioButton').addEventListener('click', marioFunction);
document.getElementById('linkButton').addEventListener('click', linkFunction);
document.getElementById('calc-attack-btn').addEventListener('click', calcAttack);
document.getElementById('start-battle').addEventListener('click', madLibBattle);



//event functions 

function marioFunction () {
    //change display when mario button is clicked
    document.getElementById('main-img').src = "images/mario.png";
    document.querySelector('html').style.backgroundColor = 'red';
    document.querySelector('body').style.backgroundColor = 'pink';
    document.getElementById('first-bullet').innerHTML = 'The Mushroom Kingdom';
    document.getElementById('second-bullet').innerHTML = 'Princess Peach';
    document.getElementById('third-bullet').innerHTML = 'King Bowser';
    document.getElementById('link').href = "https://mario.fandom.com/wiki/Mario"; 
    document.getElementById('link').innerHTML = "Mario Wiki";
    

}

function linkFunction () {
    //change display when link button is clicked
    document.getElementById('main-img').src = "images/link.png";
    document.querySelector('html').style.backgroundColor = 'green';
    document.querySelector('body').style.backgroundColor = 'lightgreen';
    document.getElementById('first-bullet').innerHTML = 'Hyrule';
    document.getElementById('second-bullet').innerHTML = 'Princess Zelda';
    document.getElementById('third-bullet').innerHTML = 'Ganon';
    document.getElementById('link').href = "https://mario.fandom.com/wiki/Link"; 
    document.getElementById('link').innerHTML = "Link Wiki";
    
}

function calcAttack () {
    
    //input (read numbers that user typed in)
    let marioStrength = Number (document.getElementById('mario-strength-input').value);
    let marioDefense = Number (document.getElementById('mario-defense-input').value);
    
    let linkStrength = Number (document.getElementById('link-strength-input').value);
    let linkDefense = Number (document.getElementById('link-defense-input').value);

    //processing (put numbers into formula to calculate each hero's attack value)
    let mAttackValue = Math.floor(2*marioStrength / linkDefense + 5);
    let lAttackValue = Math.floor((linkStrength + 15) / marioDefense);

    //output (display the result)
    document.getElementById('mResults').innerHTML = mAttackValue;
    document.getElementById('lResults').innerHTML = lAttackValue;
    
}

function madLibBattle () {
    //input 
    let madlib1 = document.getElementById('madlib-q1').value;
    let madlib2 = document.getElementById('madlib-q2').value;
    let madlib3 = document.getElementById('madlib-q3').value;

    //processing (build message)
    let message = "Mario and Link were now on the battlefields, preparing for a brawl. Mario confidently pulled out his weapon for the battle, a " + madlib1 + ". Link was shocked at this. He didn't know Mario had such a powerful weapon. However, link did not want to lose this battle. Bravely, Link grabbed his " + madlib2 + ". Now the Battle has begun. The two of them battled daringly and fearlessly for a long time. Suddenly, a voice from behind them shouted, “" + madlib3 + "”. Mario and Link were shocked to hear this. They stopped fighting immediately." ;

    //output message 
    document.getElementById('display-message').innerHTML = message; 

}

