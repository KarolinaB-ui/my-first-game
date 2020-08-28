document.addEventListener('DOMContentLoaded', () => {

    let progressbar = document.querySelector('.progressbar');

    // Random target position
    const target = document.querySelector('.target');
    const gameboardHeight = document.querySelector('.gameboard').style.height;
    const startMessage = document.querySelector('.start-message');
    const gameoverMessage = document.querySelector('.gameover-message');
    
    // Target Clicked

    target.addEventListener ("click", () => {

        let targetTop = Math.floor(Math.random() * (window.innerHeight - 62));
        let targetLeft = Math.floor(Math.random() * (window.innerWidth - 50));

        target.style.top = targetTop + 'px';
        target.style.left = targetLeft + 'px';

        incrementScore();
        incrementSeconds();
        removeStartMessage();
    })


    // Welcome message
    function removeStartMessage() {
        if (startMessage.style.display = 'visible') {
            startMessage.style.display = 'none';
        }
    }

    // Timer
    let timer = document.querySelector('.timer');
    let seconds = 10;

    function decrementSeconds() {
        seconds -= 1;
        timer.innerHTML = "<span>" + seconds + "</span>" + " seconds letf.";
    }

    let secoundsTimer = setInterval(decrementSeconds, 1000);
    
    function incrementSeconds() {
        seconds += 1;
        timer.innerHTML = "<span>" + seconds + "</span>" + " seconds letf.";
    }

    // Counter
    let counter = document.querySelector('.counter');
    let score = 0;

    function incrementScore() {
        score +=1;
        counter.innerHTML = "<span>" + score + "</span> chicken babies collected."
    }

})