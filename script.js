let timer = 60;
let score = 0;
let Canage = 0;

function time() {
    let some = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#time').innerHTML = timer;
        } else {
            clearInterval(some);
            document.querySelector('.btn-box').innerHTML = `GAME OVER! YOUR SCORE IS ${score}`;

        }
    }, 1000);
}

function hit() {
    Canage = Math.round(Math.random() * 10) + 1;
    document.querySelector('#hit').innerHTML = Canage;
}

function scrNum() {
    score += 10;
    document.querySelector('#ofnumber').innerHTML = score;
}
function scrDec() {
    score -= 10;
    document.querySelector('#ofnumber').innerHTML = score;
}

function bubble() {
    let cluter = "";
    for (let i = 1; i <= 147; i++) {
        let run = Math.round(Math.random() * 10) + 1;
        cluter += `<div class="circle" data-value="${run}">${run}</div>`;
    }
    document.querySelector('.btn-box').innerHTML = cluter;
}

function Clickbtn() {
    let button = document.querySelector('.btn');
    button.addEventListener('click', function () {
        bubble();
        time();
        hit();
    });
}

document.querySelector('.btn-box').addEventListener('click', function (e) {
    if (e.target.classList.contains('circle')) {
        let info = Number(e.target.dataset.value);
        if (info === Canage) {
            scrNum();
            hit();
            bubble();
        }else{
            scrDec()
        }
        
    }
});


Clickbtn();