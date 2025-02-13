// Navigation
function nextPage(pageId) {
    document.querySelector('.active').classList.remove('active');
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'proposal') createHeartGame();
}

// Password check (DDMMYYYY)
function checkPassword() {
    const correctDate = '01012000'; // REPLACE WITH YOUR DATE
    const input = document.getElementById('password').value;
    
    if (input === correctDate) {
        document.getElementById('memory-content').innerHTML = `
            <h2>Our Memories 💞</h2>
            <div class="photo-grid">
                <img src="assets/images/placeholder.jpg" class="memory-photo">
                <!-- Add more images here -->
            </div>
            <button onclick="nextPage('proposal')">Continue →</button>
        `;
    } else {
        alert("Not quite! Try again ❤️");
    }
}

// Heart collector game
function createHeartGame() {
    const container = document.querySelector('.hearts-container');
    container.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('span');
        heart.innerHTML = '💖';
        heart.onclick = () => {
            heart.style.opacity = '0.3';
            checkHearts();
        };
        container.appendChild(heart);
    }
}

function checkHearts() {
    const collected = document.querySelectorAll('.hearts-container span[style*="opacity: 0.3"]').length;
    if (collected === 5) {
        document.getElementById('final-question').classList.remove('hidden');
    }
}

// Evading "No" button
function moveButton() {
    const btn = document.getElementById('no-btn');
    btn.style.left = Math.random() * 80 + '%';
    btn.style.top = Math.random() * 80 + '%';
}

// Confetti effect
function celebrate() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert("YAY! I love you! 💖");
}