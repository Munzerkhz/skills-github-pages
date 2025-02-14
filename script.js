document.addEventListener('DOMContentLoaded', () => {
  function goToStage(current, next) {
    document.getElementById(current).classList.remove('active');
    document.getElementById(next).classList.add('active');
    window.scrollTo(0, 0);
  }
  
  // Stage 0
  document.getElementById('btnStage0').addEventListener('click', () => { goToStage('stage0', 'stage1'); });
  
  // Stage 1
  document.querySelectorAll('input[name="missYouQuiz"]').forEach(opt => {
    opt.addEventListener('change', function() {
      if (this.value === 'correct') {
        document.getElementById('missYouFeedback').textContent = "Yes, that’s how insanely huge it is! I miss you to infinity!";
        document.getElementById('btnStage1').disabled = false;
      } else {
        document.getElementById('missYouFeedback').textContent = "Nope, try again!";
      }
    });
  });
  document.getElementById('btnStage1').addEventListener('click', () => { goToStage('stage1', 'stage2'); });
  document.getElementById('backStage1').addEventListener('click', () => { goToStage('stage1', 'stage0'); });
  
  // Stage 2
  document.getElementById('btnStage2').addEventListener('click', () => { goToStage('stage2', 'stage3'); });
  document.getElementById('backStage2').addEventListener('click', () => { goToStage('stage2', 'stage1'); });
  
  // Stage 3
  document.getElementById('btnStage3').addEventListener('click', () => { goToStage('stage3', 'stage4'); });
  document.getElementById('backStage3').addEventListener('click', () => { goToStage('stage3', 'stage2'); });
  
  // Stage 4
  document.getElementById('btnStage4').addEventListener('click', () => { goToStage('stage4', 'stage5'); });
  document.getElementById('backStage4').addEventListener('click', () => { goToStage('stage4', 'stage3'); });
  
  // Stage 5
  document.querySelectorAll('input[name="sugarDaddy"]').forEach(opt => {
    opt.addEventListener('change', function() {
      if (this.value === 'correct') {
        document.getElementById('sugarDaddyFeedback').textContent = "Correct! Don’t worry, it will get harder.";
        document.getElementById('btnStage5').disabled = false;
      } else {
        document.getElementById('sugarDaddyFeedback').textContent = "Nope, guess again!";
      }
    });
  });
  document.getElementById('btnStage5').addEventListener('click', () => { goToStage('stage5', 'stage6'); });
  document.getElementById('backStage5').addEventListener('click', () => { goToStage('stage5', 'stage4'); });
  
  // Stage 6
  document.querySelectorAll('input[name="q6"]').forEach(opt => {
    opt.addEventListener('change', function() {
      const feedback = document.getElementById('q6Feedback');
      if (this.value === "3") { feedback.textContent = "ALL DAY"; }
      else if (this.value === "2") { feedback.textContent = "really ???"; }
      else if (this.value === "1") { feedback.textContent = "close enough"; }
      document.getElementById('btnStage6').disabled = false;
    });
  });
  document.getElementById('btnStage6').addEventListener('click', () => { goToStage('stage6', 'stage7'); });
  document.getElementById('backStage6').addEventListener('click', () => { goToStage('stage6', 'stage5'); });
  
  // Stage 7
  document.querySelectorAll('input[name="q7"]').forEach(opt => {
    opt.addEventListener('change', function() {
      const feedback = document.getElementById('q7Feedback');
      if (this.value === "2") { feedback.textContent = "Correct!"; document.getElementById('btnStage7').disabled = false; }
      else { feedback.textContent = "Try again!"; }
    });
  });
  document.getElementById('btnStage7').addEventListener('click', () => { goToStage('stage7', 'stage8'); });
  document.getElementById('backStage7').addEventListener('click', () => { goToStage('stage7', 'stage6'); });
  
  // Stage 8
  document.querySelectorAll('input[name="q8"]').forEach(opt => {
    opt.addEventListener('change', function() {
      const feedback = document.getElementById('q8Feedback');
      if (this.value === "white") { feedback.textContent = "Correct!"; document.getElementById('btnStage8').disabled = false; }
      else { feedback.textContent = "Hmm, try again!"; }
    });
  });
  document.getElementById('btnStage8').addEventListener('click', () => { goToStage('stage8', 'stage9'); });
  document.getElementById('backStage8').addEventListener('click', () => { goToStage('stage8', 'stage7'); });
  
  // Stage 9
  document.querySelectorAll('input[name="q9"]').forEach(opt => {
    opt.addEventListener('change', function() {
      const feedback = document.getElementById('q9Feedback');
      if (this.value === "19/6/2022") { feedback.textContent = "I don't even know hahahahaha I made it up"; document.getElementById('btnStage9').disabled = false; }
      else { feedback.textContent = "Try again!"; }
    });
  });
  document.getElementById('btnStage9').addEventListener('click', () => { goToStage('stage9', 'stage10'); });
  document.getElementById('backStage9').addEventListener('click', () => { goToStage('stage9', 'stage8'); });
  
  // Stage 10
  document.getElementById('btnStage10').addEventListener('click', () => { goToStage('stage10', 'stage11'); });
  document.getElementById('backStage10').addEventListener('click', () => { goToStage('stage10', 'stage9'); });
  
  // Stage 11
  const heartsArea = document.getElementById('heartsArea');
  let heartsClicked = 0;
  const newHeartImg = "https://i.postimg.cc/bwwrbPjR/IMG-7709.png?usp=drivesdk";
  for (let i = 0; i < 5; i++){
    const heart = document.createElement('div');
    heart.classList.add('heart-icon');
    heart.style.backgroundImage = `url(${newHeartImg})`;
    heart.style.left = Math.random() * 80 + "%";
    heart.style.top = Math.random() * 150 + "px";
    heart.addEventListener('click', function() {
      if (!heart.classList.contains('clicked')){
        heartsClicked++;
        heart.classList.add('clicked');
        heart.style.opacity = "0.5";
        if (heartsClicked >= 3) { document.getElementById('btnStage11').disabled = false; }
      }
    });
    heartsArea.appendChild(heart);
  }
  document.getElementById('btnStage11').addEventListener('click', () => { goToStage('stage11', 'stage12'); });
  document.getElementById('backStage11').addEventListener('click', () => { goToStage('stage11', 'stage10'); });
  
  // Stage 12
  document.getElementById('submitMessageBtn').addEventListener('click', function() {
    const msg = document.getElementById('userMessage').value.trim();
    if (msg) { 
      document.getElementById('messageDisplay').textContent = "You wrote: " + msg; 
      document.getElementById('btnStage12').disabled = false; 
    }
  });
  document.getElementById('btnStage12').addEventListener('click', () => { goToStage('stage12', 'stage13'); });
  document.getElementById('backStage12').addEventListener('click', () => { goToStage('stage12', 'stage11'); });
  
  // Stage 13
  document.getElementById('btnStage13').addEventListener('click', () => { goToStage('stage13', 'stage14'); });
  document.getElementById('backStage13').addEventListener('click', () => { goToStage('stage13', 'stage12'); });
  
  // Stage 14
  document.getElementById('backStage14').addEventListener('click', () => { goToStage('stage14', 'stage13'); });
  document.getElementById('yesButton').addEventListener('click', () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    const audio = document.getElementById('backgroundAudio');
    audio.play().then(() => { console.log('Background audio is playing.'); }).catch((error) => { console.error('Error playing background audio:', error); });
    goToStage('stage14', 'stage15');
  });
  
  // Stages 15 to 30
  // Stage 15
  document.getElementById('btnStage15').addEventListener('click', () => { goToStage('stage15', 'stage16'); });
  document.getElementById('backStage15').addEventListener('click', () => { goToStage('stage15', 'stage14'); });
  
  // Stage 16
  document.getElementById('btnStage16').addEventListener('click', () => { goToStage('stage16', 'stage17'); });
  document.getElementById('backStage16').addEventListener('click', () => { goToStage('stage16', 'stage15'); });
  
  // Stage 17
  document.getElementById('btnStage17').addEventListener('click', () => { goToStage('stage17', 'stage18'); });
  document.getElementById('backStage17').addEventListener('click', () => { goToStage('stage17', 'stage16'); });
  
  // Stage 18
  document.getElementById('btnStage18').addEventListener('click', () => { goToStage('stage18', 'stage19'); });
  document.getElementById('backStage18').addEventListener('click', () => { goToStage('stage18', 'stage17'); });
  
  // Stage 19
  document.getElementById('btnStage19').addEventListener('click', () => { goToStage('stage19', 'stage20'); });
  document.getElementById('backStage19').addEventListener('click', () => { goToStage('stage19', 'stage18'); });
  
  // Stage 20
  document.getElementById('btnStage20').addEventListener('click', () => { goToStage('stage20', 'stage21'); });
  document.getElementById('backStage20').addEventListener('click', () => { goToStage('stage20', 'stage19'); });
  
  // Stage 21
  document.getElementById('btnStage21').addEventListener('click', () => { goToStage('stage21', 'stage22'); });
  document.getElementById('backStage21').addEventListener('click', () => { goToStage('stage21', 'stage20'); });
  
  // Stage 22
  document.getElementById('btnStage22').addEventListener('click', () => { goToStage('stage22', 'stage23'); });
  document.getElementById('backStage22').addEventListener('click', () => { goToStage('stage22', 'stage21'); });
  
  // Stage 23
  document.getElementById('btnStage23').addEventListener('click', () => { goToStage('stage23', 'stage24'); });
  document.getElementById('backStage23').addEventListener('click', () => { goToStage('stage23', 'stage22'); });
  
  // Stage 24
  document.getElementById('btnStage24').addEventListener('click', () => { goToStage('stage24', 'stage25'); });
  document.getElementById('backStage24').addEventListener('click', () => { goToStage('stage24', 'stage23'); });
  
  // Stage 25
  document.getElementById('btnStage25').addEventListener('click', () => { goToStage('stage25', 'stage26'); });
  document.getElementById('backStage25').addEventListener('click', () => { goToStage('stage25', 'stage24'); });
  
  // Stage 26
  document.getElementById('btnStage26').addEventListener('click', () => { goToStage('stage26', 'stage27'); });
  document.getElementById('backStage26').addEventListener('click', () => { goToStage('stage26', 'stage25'); });
  
  // Stage 27
  document.getElementById('btnStage27').addEventListener('click', () => { goToStage('stage27', 'stage28'); });
  document.getElementById('backStage27').addEventListener('click', () => { goToStage('stage27', 'stage26'); });
  
  // Stage 28
  document.getElementById('btnStage28').addEventListener('click', () => { goToStage('stage28', 'stage29'); });
  document.getElementById('backStage28').addEventListener('click', () => { goToStage('stage28', 'stage27'); });
  
  // Stage 29
  document.getElementById('btnStage29').addEventListener('click', () => { goToStage('stage29', 'stage30'); });
  document.getElementById('backStage29').addEventListener('click', () => { goToStage('stage29', 'stage28'); });
  
  // Stage 30: Final Stage
  document.getElementById('finishButton').addEventListener('click', () => { alert("Thank you for being my forever love. Happy Valentine's Day!"); });
  document.getElementById('backStage30').addEventListener('click', () => { goToStage('stage30', 'stage29'); });
});
