// ---- Text to speech ----
const LANG_MAP = { en: "en-US" };
const htmlLang = document.documentElement.lang || "en";
// "es" / "en" use the defaults above; a full tag like "es-ES" is used as written
const SPEECH_LANG = htmlLang.includes("-")
  ? htmlLang
  : (LANG_MAP[htmlLang.toLowerCase()] || "en-US");
const canSpeak = "speechSynthesis" in window;
let voices = [];

function loadVoices() { voices = speechSynthesis.getVoices(); }
if (canSpeak) {
  loadVoices();
  // voices often load asynchronously, especially on Chrome/Android
  speechSynthesis.addEventListener("voiceschanged", loadVoices);
  // stop talking if the player leaves the page
  window.addEventListener("pagehide", () => speechSynthesis.cancel());
}

function pickVoice() {
  const base = SPEECH_LANG.split("-")[0];
  return voices.find(v => v.lang.replace("_", "-") === SPEECH_LANG)
      || voices.find(v => v.lang.startsWith(base))
      || null;
}

function speak(text) {
  if (!canSpeak) return;
  speechSynthesis.cancel();               // never queue up overlapping speech
  const u = new SpeechSynthesisUtterance(text);
  u.lang = SPEECH_LANG;
  const voice = pickVoice();
  if (voice) u.voice = voice;
  u.rate = 0.9;                           // slightly slower, better for learning
  speechSynthesis.speak(u);
}
// Sound Effects
const matchSound = new Audio('../match.mp3'); // Replace with your file name
const mismatchSound = new Audio('../error.mp3'); // Replace with your file name
const winSound = new Audio("../victory.mp3");
winSound.preload = "auto"; // ensures it loads before use

const grid = document.getElementById("grid");
const PROGRESS_KEY = "campanitaProgress";

function gameId() {
  return location.pathname.split("/").pop() || "index.html";
}

function saveProgress(tries, medalIcon) {
  try {
    const data = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
    const id = gameId();
    // keep only the best (fewest tries) result
    if (!data[id] || tries < data[id].tries) {
      data[id] = { tries, medal: medalIcon };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    }
  } catch (e) { /* storage blocked: game still works */ }
}
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
    <div class="front text-card">
      <span class="card-text">${item.content}</span>
      <button class="speak-btn" aria-label="Escuchar">🔊</button>
    </div>
    <div class="back"></div>
  `;

  const btn = card.querySelector(".speak-btn");
  if (!canSpeak) {
    btn.remove();                          // browser has no speech support
  } else {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();                 // don't trigger the card's click handler
      speak(item.content);
    });
  }
}

    card.addEventListener("click", () => flipCard(card, item));

    grid.appendChild(card);
  });
    tries = 0;
document.getElementById("tries").textContent = `Tries: ${tries}`;
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
document.getElementById("tries").textContent = `Tries: ${tries}`;
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
    const medal = getMedal(tries);
    saveProgress(tries, medal.icon);
    // Play the win sound
  winSound.currentTime = 0;
  winSound.play();
    
  const win = document.createElement("div");
  win.className = "win";

  win.innerHTML = `
    <h1>🎉 !Completed! 🎊</h1>
    <h1>You have won a medal:</h1>
<h1><span style="font-size: 80px">${medal.icon}</span></h1>
<h4><br><br>*You can also install the free version of this game for Android devices. <br>Available on the Google Play Store.</h4>
      <br><br>
      <button id="gobackbtn" onclick="reloadPage()">⨞</button>

  `;

  document.body.appendChild(win);
}

function goBack() {
  window.location.href = "index.html";
}

function reloadPage() {
  document.querySelector(".win")?.remove();
}

init();

function getMedal(tries) {

    if (tries <= 20) {
        return {
            icon: "🥇",
        };
    }

    if (tries <= 30) {
        return {
            icon: "🥈",
            
        };
    }

    return {
        icon: "🥉",
        
    };

}