function startStory() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('story').style.display = 'block';
}
function nextStep() {
    document.getElementById('story').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}
function wrongAnswer() {
    alert('Not quite! Try again ❤️');
}
function correctAnswer() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('final').style.display = 'block';
}
function finalAnswer(response) {
    if (response === 'yes') {
        alert('YAY! I love you! ❤️');
    } else {
        alert('That is NOT an option! 😆');
    }
}
