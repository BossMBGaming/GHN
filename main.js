const LOADING_SCREEN = document.querySelector("section#loading");
const COUNTDOWN_TIMER = document.querySelector("#countdown");

// Function to create a random confetti piece
function createConfetti() {
  const colors = ["#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"];
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(confetti);

  // Set a random rotation for a more realistic effect
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

  // Animation to make the confetti fall
  const animation = confetti.animate(
    [
      {
        top: "-10px",
        opacity: 1,
        transform: `rotate(${Math.random() * 360}deg)`,
      },
      {
        top: window.innerHeight + "px",
        opacity: 0,
        transform: `rotate(${Math.random() * 360}deg)`,
      },
    ],
    {
      duration: 2000 + Math.random() * 3000,
      easing: "ease-out",
    }
  );

  // Remove the confetti element once the animation is finished
  animation.onfinish = () => {
    document.body.removeChild(confetti);
  };
}

// Function to create confetti at regular intervals
function createConfettiInterval() {
  createConfetti();
  setTimeout(createConfettiInterval, 200);
}

// Countdown timer
function startLoading(count) {
  COUNTDOWN_TIMER.textContent = "Loading";
  
  if (count > 3) {
    COUNTDOWN_TIMER.textContent = "Loading" + ".".repeat(count - 3);
    setTimeout(() => startLoading(count - 1), 1000);
  } else {
    startTimer(3)
  }
}

// Countdown timer
function startTimer(count) {
  COUNTDOWN_TIMER.textContent = count;

  if (count > 0) {
    setTimeout(() => startTimer(count - 1), 1000);
  } else {
    COUNTDOWN_TIMER.style.display = "none";
    createConfettiInterval();
  }
}

// Start the countdown
startLoading(6);
