let gameSequence = [] ;
let userSequence = [] ;
let isGameStarted = false ;
let level = 0 ;
let randomColor = ['red','green','yellow','purple']

let h3 = document.querySelector('h3')

document.addEventListener('keypress',function(){
    if(isGameStarted===false){
        isGameStarted=true ;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add('white') ;
    setTimeout(function(){
        btn.classList.remove('white')
    },250)
}

function levelUp(){
    userSequence=[];
    level++ ;
    h3.innerText=`Level ${level}` ;
    let randInd = Math.floor(Math.random()*3);
    let randColor = randomColor[randInd] ;
    gameSequence.push(randColor)
    let finalColor = document.querySelector(`.${randColor}`)
    gameFlash(finalColor);

}

function userFlash(btn){
    btn.classList.add('blue') ;
    setTimeout(function(){
        btn.classList.remove('blue')
    },250)
}
function checkAns(idx){
    if(userSequence[idx]===gameSequence[idx]){
        if(userSequence.length===gameSequence.length){
            setTimeout(levelUp,1000)
        }
    }else{
        h3.innerHTML=`Game Over ! Your Score is <b>${level}</b> <br>Press Any Key To Start Again` ;
        document.querySelector('body').style.backgroundColor='red' ;
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white' ;
        },150)
        reset();
    }
}

function btnPress(){
    let btn = this;
    let userClickedBtn = btn.getAttribute('id')
    userSequence.push(userClickedBtn)
    console.log(userSequence)
    userFlash(btn);
    checkAns(userSequence.length-1);
}
let allBtns = document.querySelectorAll('.btn') ;
for(let btn of allBtns){
    btn.addEventListener('click',btnPress)
}

function reset(){
    isGameStarted=false ;
    userSequence = [] ;
    gameSequence=[] ;
    level=0 ;
}