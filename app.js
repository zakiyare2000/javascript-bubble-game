let timer = 60;
let score = 0;
let hitRandomNumber = 0;

function scoreIncrement(){
    score += 10;
    document.querySelector('#scoreValue').textContent = score;
}

function getNewHit(){
    hitRandomNumber = Math.floor(Math.random()*10)
    document.querySelector('#hitValue').textContent = hitRandomNumber;
}

function makeBubble(){
    let clutter = '';
    for (let i=0; i<=150; i++){
        let randomNumber = Math.floor(Math.random()*10)
        clutter += `<div class='bubble'>${randomNumber}</div>`;
    }
    document.querySelector('#panelBottom').innerHTML = clutter;

}

function runtimer(){

    let timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
        }
        else{
            clearInterval(timerInterval)
            document.querySelector('#panelBottom').innerHTML = `<h1>Game over</h1>`
        }
        
        document.querySelector('#timerValue').textContent = timer
    }, 1000)
}

document.querySelector('#panelBottom')
.addEventListener('click', function(dets){
    let clickedNumber = Number(dets.target.textContent)
    if(clickedNumber === hitRandomNumber){
        scoreIncrement();
        makeBubble();
        getNewHit();
    }
})

// scoreIncrement()
getNewHit()
runtimer()
makeBubble()