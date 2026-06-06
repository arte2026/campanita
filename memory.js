// Sound Effects
const matchSound = new Audio('match.mp3'); // Replace with your file name
const mismatchSound = new Audio('error.mp3'); // Replace with your file name
const winSound = new Audio("victory.mp3");
winSound.preload = "auto"; // ensures it loads before use

const grid = document.getElementById("grid");

let tries = 0;


// Create cards array
let cards = [];

// Build cards with pair IDs
pairs.forEach((pair, index) => {
  // The Image Card
  cards.push({
    content: pair.question,
    type: 'image',
    pairId: index
  });

  // The Text Card
  cards.push({
    content: pair.answer,
    type: 'text',
    pairId: index
  });
});

let firstCard = null;
let secondCard = null;
let lock = false;
let matches = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function init() {
  grid.innerHTML = "";

  matches = 0;
  firstCard = null;
  secondCard = null;
  lock = false;

  shuffle(cards);

  cards.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    // Check type to decide how to show the "front"
    if (item.type === 'image') {
      card.innerHTML = `
        <div class="front" style="background-image:url(${item.content})"></div>
        <div class="back"></div>
      `;
    } else {
      card.innerHTML = `
        <div class="front text-card">${item.content}</div>
        <div class="back"></div>
      `;
    }

    card.addEventListener("click", () => flipCard(card, item));

    grid.appendChild(card);
  });
    tries = 0;
document.getElementById("tries").textContent = `Intentos: ${tries}`;
}

function flipCard(card, item) {
  if (lock || card.classList.contains("flip")) return;

  card.classList.add("flip");

  if (!firstCard) {
    firstCard = { card, item };
    return;
  }

  secondCard = { card, item };
  lock = true;
tries++;
document.getElementById("tries").textContent = `Intentos: ${tries}`;
  // MATCH if pairId is same
  if (
    firstCard.item.pairId === secondCard.item.pairId &&
    firstCard.card !== secondCard.card
  ) {

      // --> ADD THIS: Play the match sound
    matchSound.play();
      
    matches++;

    resetTurn();

    if (matches === pairs.length) {
      setTimeout(showWin, 300);
    }

  } else {
      
      // --> ADD THIS: Play the mismatch sound immediately upon flipping the wrong card
    mismatchSound.play();

    setTimeout(() => {
      firstCard.card.classList.remove("flip");
      secondCard.card.classList.remove("flip");

      resetTurn();
    }, 1000);

  }
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lock = false;
}

function showWin() {
    // Play the win sound
  winSound.currentTime = 0;
  winSound.play();
    
  const win = document.createElement("div");
  win.className = "win";

  win.innerHTML = `
    <h1 id="winner">🎉 Completado!</h1>

    <div class="bottom-buttons">
      <button onclick="reloadPage()">Reiniciar</button>
      <button onclick="goBack()">Atras</button>
    </div>
  `;

  document.body.appendChild(win);
}

function goBack() {
  window.location.href = "index.html";
}

function reloadPage() {
  location.reload();
}

init();

