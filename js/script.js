function startStory() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('story').classList.remove('hidden');
}
function nextStep() {
    document.getElementById('story').classList.add('hidden');
    document.getElementById('memory-game').classList.remove('hidden');
}
function flipCard(card) {
    card.classList.add('flipped');
}
function checkGameCompletion() {
    let flippedCards = document.querySelectorAll('.flipped');
    if (flippedCards.length === 4) {
        document.getElementById('memory-game').classList.add('hidden');
        document.getElementById('quiz').classList.remove('hidden');
    } else {
        alert('Try matching all pairs first!');
    }
}
function wrongAnswer() {
    alert('Not quite! Try again ❤️');
}
function correctAnswer() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('final').classList.remove('hidden');
}
function finalAnswer(response) {
    if (response === 'yes') {
        alert('YAY! I love you! ❤️');
    } else {
        alert('That is NOT an option! 😆');
    }
}
