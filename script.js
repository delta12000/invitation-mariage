// Animation d'ouverture
function openEnvelope() {
  document.getElementById('envelope-screen').style.display = 'none';
  document.getElementById('invitation-content').classList.remove('hidden');
}

// Compte à rebours
const targetDate = new Date("August 14, 2026 19:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "C'est le grand jour !";
    return;
  }

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);