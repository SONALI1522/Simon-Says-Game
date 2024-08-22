let gameSeq = [];
let userSeq=[];
let started= false;
let level=0;
let btns = ["yellow","red","purple","blue"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){//level 1
    console.log("game started");
    started=true;
    levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdex = Math.floor(Math.random()*3);
    let randColor = btns[ranIdex];
    randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
function checkAns(idx){
   
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br> press any key to start<br>`; 
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        
    }
}

function btnPress(){
    
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}