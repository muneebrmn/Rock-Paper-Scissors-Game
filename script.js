rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissors = document.getElementById('scissor');

choices = document.getElementById('choices');
result = document.getElementById('result');
retry = document.getElementById('retry');

user = document.getElementById('me');
pc = document.getElementById('pc');
text = document.getElementById('text');
score = document.getElementById('score');

rock.addEventListener('click', function() {
    choices.style.display = 'none';
    result.style.display = 'flex';
    user.style.borderColor = "#e52447";
    document.querySelector('#me img').src = 'https://muneebrmn.github.io/assets/images/rock.svg';

    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        pc.style.borderColor = "#e52447";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/rock.svg';
        text.innerHTML = "IT'S A TIE";
    }
    else if (computerChoice === 1) {
        pc.style.borderColor = "#4B68F5";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/paper.svg';
        text.innerHTML = "YOU LOSE";
        score.innerHTML = parseInt(score.innerHTML) - 1;
    }
    else {
        pc.style.borderColor = "#ECA215";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/scissors.svg';
        text.innerHTML = "YOU WIN";
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
});

paper.addEventListener('click', function() {
    choices.style.display = 'none';
    result.style.display = 'flex';
    user.style.borderColor = "#4B68F5";
    document.querySelector('#me img').src = 'https://muneebrmn.github.io/assets/images/paper.svg';

    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        pc.style.borderColor = "#e52447";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/rock.svg';
        text.innerHTML = "YOU WIN";
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
    else if (computerChoice === 1) {
        pc.style.borderColor = "#4B68F5";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/paper.svg';
        text.innerHTML = "IT'S A TIE";
    }
    else {
        pc.style.borderColor = "#ECA215";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/scissors.svg';
        text.innerHTML = "YOU LOSE";
        score.innerHTML = parseInt(score.innerHTML) - 1;
    }
});

scissors.addEventListener('click', function() {
    choices.style.display = 'none';
    result.style.display = 'flex';
    user.style.borderColor = "#ECA215";
    document.querySelector('#me img').src = 'https://muneebrmn.github.io/assets/images/scissors.svg';

    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        pc.style.borderColor = "#e52447";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/rock.svg';
        text.innerHTML = "YOU LOSE";
        score.innerHTML = parseInt(score.innerHTML) - 1;
    }
    else if (computerChoice === 1) {
        pc.style.borderColor = "#4B68F5";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/paper.svg';
        text.innerHTML = "YOU WIN";
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
    else {
        pc.style.borderColor = "#ECA215";
        document.querySelector('#pc img').src = 'https://muneebrmn.github.io/assets/images/scissors.svg';
        text.innerHTML = "IT'S A TIE";
    }
});

retry.addEventListener('click', function() {
    choices.style.display = 'flex';
    result.style.display = 'none';
});