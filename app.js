document.addEventListener('DOMContentLoaded', () => {

    let progressbar = document.querySelector('.progressbar');

    // Random target position
    let targetTop = Math.floor(Math.random() * window.innerHeight);
    let targetLeft = Math.floor(Math.random() * window.innerWidth);

    target.style.top = targetTop + 'px';
    target.style.left = targetLeft + 'px';
    
    // Timer
    let timer = document.querySelector('.timer');
    let seconds = 60;

    function incrementSeconds() {
        seconds -= 1;
        timer.innerHTML = "<span>" + seconds + "</span>" + " seconds letf.";
    }

    let secoundsTimer = setInterval(incrementSeconds, 1000);

    /* Target Clicked

    const target = document.querySelector('.target');
    
    function targetHit(e){
        let posX = e.clientX;
        let posY = e.clientY;
    }
    

    target.addEventListener("click", targetHit);
    */  

    // Counter
    let counter = document.querySelector('.counter');
    let score = 0;

    function incrementScore() {
        score +=1;
        counter.innerHTML = "<span>" + score + "</span> chicken babies collected."
    }




})