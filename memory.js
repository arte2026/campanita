// ---- Text to speech ----
const LANG_MAP = { es: "es-MX", en: "en-US" };
const htmlLang = document.documentElement.lang.trim() || "en";
const normalizedHtmlLang = htmlLang.replace(/_/g, "-");
const htmlLangBase = normalizedHtmlLang.toLowerCase().split("-")[0];
const SPEECH_LANG = normalizedHtmlLang.includes("-")
  ? normalizedHtmlLang
  : (LANG_MAP[htmlLangBase] || normalizedHtmlLang);
const canSpeak = "speechSynthesis" in window;
let voices = [];

function loadVoices() { voices = speechSynthesis.getVoices(); }
if (canSpeak) {
  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);
  window.addEventListener("pagehide", () => speechSynthesis.cancel());
}

function pickVoice() {
  const normalizedSpeechLang = SPEECH_LANG.toLowerCase();
  const base = normalizedSpeechLang.split("-")[0];
  return voices.find(v => v.lang.replace(/_/g, "-").toLowerCase() === normalizedSpeechLang)
      || voices.find(v => {
        const voiceLang = v.lang.replace(/_/g, "-").toLowerCase();
        return voiceLang === base || voiceLang.startsWith(`${base}-`);
      })
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
const matchSound = new Audio('match.mp3'); // Replace with your file name
const mismatchSound = new Audio('error.mp3'); // Replace with your file name
const winSound = new Audio("victory.mp3");
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
document.getElementById("tries").textContent = `: ${tries}`;
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
document.getElementById("tries").textContent = `: ${tries}`;
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
    <h1 data-i18n="title">🎉 !Completado! 🎊</h1>
    <h1 data-i18n="medal_title">Has ganado una medalla de:</h1>
<h1><span style="font-size: 80px">${medal.icon}</span></h1>
<h3 data-i18n="invite"><br><br>*Te invito a instalar la version de este juego para dispositivos Android. <br>Disponible en Google Play Store.</h3>
      <br><br>
      <button id="gobackbtn" onclick="reloadPage()">⨞</button>

  `;

  document.body.appendChild(win);
  applyTranslations();
}

function goBack() {
  window.location.href = "index.html";
}
function goBack2() {
  window.location.href = "index_e.html";
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


//traduccion
const translations = {
  es: {
    title: "🎉 !Completado! 🎊",
    medal_title: 'Has ganado una medalla de:',
    invite: "*Te invito a instalar la version de este juego para Android. <br>Disponible en Google Play Store.",
    
  },

  en: {
    title: "🎉 !Completed! 🎊",
    medal_title: 'You have won a medal:',
    invite: "*You can also install the version of this game for Android. <br>Available on the Google Play Store.",
    
  }
};

function setLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = translations[currentLang][key] || translations.en[key] || "";
  });
}

function detectLanguage() {
  const baseLang = document.documentElement.lang.trim().toLowerCase().split(/[-_]/)[0];
  return translations[baseLang] ? baseLang : "en";
}

let currentLang;

function initLanguage() {
  setLanguage(detectLanguage());
}

initLanguage();