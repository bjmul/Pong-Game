// update loop
import Ball from './Ball.js';
import Sur from './Sur.js';

// items
const ball = new Ball(document.getElementById('ball'));
const playerSur = new Sur(document.getElementById('player-sur'));
const cpuSur = new Sur(document.getElementById('cpu-sur'));
const playerScore = document.getElementById('player-counter');
const cpuScore = document.getElementById('cpu-counter');

let lastTime;

function update(time) {
    //check if last time is null
    if (lastTime != null) {
    //convert time into delta to tell how much time has past till the new frame
    const delta = time - lastTime;
    //update code
    ball.update(delta, [playerSur.rect(), cpuSur.rect()]);
    cpuSur.update(delta, ball.y);

    if (isLost()) resetAfterLost() 
    }
    lastTime=time;
    //get frame time continuesly
    window.requestAnimationFrame(update);
}

function isLost() {
    const rect = ball.rect();
    return rect.right >= window.innerWidth || rect.left <= 0;
}

function resetAfterLost() {
    const rect = ball.rect();
    if (rect.right >= window.innerWidth) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else (
        cpuScore.textContent = parseInt(cpuScore.textContent) +1
    )
    ball.reset();
    cpuSur.reset();
}

// mouse movement
document.addEventListener('mousemove', e => {
    playerSur.position = (e.y / window.innerHeight) * 100;
});

//call frame time
window.requestAnimationFrame(update);