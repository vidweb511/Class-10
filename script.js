// Redirect on button click
document.getElementById('continueButton').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      window.location.href = `personalized.html?name=${encodeURIComponent(name)}`;
    } else {
      alert("Please enter your name.");
    }
  });
  
  // Floating hearts animation
  const heartsContainer = document.querySelector('.hearts');
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }
  
  setInterval(createHeart, 300);
  