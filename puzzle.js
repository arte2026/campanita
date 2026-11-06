// ---- Text to speech ----
const LANG_MAP = { es: "es-MX", en: "en-US" };
const htmlLang = document.documentElement.lang.trim() || "es";
const normalizedHtmlLang = htmlLang.replace(/_/g, "-");
const pageLanguage = normalizedHtmlLang.toLowerCase().split("-")[0];
const SPEECH_LANG = normalizedHtmlLang.includes("-")
  ? normalizedHtmlLang
  : (LANG_MAP[pageLanguage] || normalizedHtmlLang);
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

const moveSound = new Audio('move.mp3');
let moveCount = 0;
let gameWon = false;


const puzzleText = {
  es: {
    bestResult: moves => `Mejor resultado: ${moves} intentos`,
    title: "🎉 ¡Completado!",
    medalTitle: "Has ganado una medalla de:",
    listen: "🔊 Escuchar",
    listenDescription: "Escuchar descripción",
    invite: "*Te invito a instalar la versión gratuita de este juego para dispositivos Android. <br>Disponible en Google Play Store."
  },
  en: {
    bestResult: moves => `Best result: ${moves} moves`,
    title: "🎉 Completed!",
    medalTitle: "You have won a medal:",
    listen: "🔊 Listen",
    listenDescription: "Listen to description",
    invite: "*You can also install the free version of this game for Android devices. <br>Available on the Google Play Store."
  }
};
const pageText = puzzleText[pageLanguage] || puzzleText.en;

function getDescription(puzzleData) {
  return puzzleData.description[pageLanguage] || puzzleData.description.en;
}

const PUZZLE_PROGRESS_KEY = "campanitaPuzzleProgress";

function getPuzzleProgress() {
  try { return JSON.parse(localStorage.getItem(PUZZLE_PROGRESS_KEY)) || {}; }
  catch (e) { return {}; }
}

function savePuzzleProgress(image, moves, medalIcon) {
  try {
    const data = getPuzzleProgress();
    // keep only the best (fewest moves) result
    if (!data[image] || moves < data[image].moves) {
      data[image] = { moves, medal: medalIcon };
      localStorage.setItem(PUZZLE_PROGRESS_KEY, JSON.stringify(data));
    }
  } catch (e) { /* storage blocked: game still works */ }
}

function renderThumbnails() {
  const thumbs = document.getElementById("thumbs");
  thumbs.innerHTML = "";
  const progress = getPuzzleProgress();

  puzzleImages.forEach((puzzle) => {
    const wrap = document.createElement("span");
    wrap.className = "thumb-wrap";

    const img = document.createElement("img");
    img.src = puzzle.image;
    img.className = "thumb" + (puzzle.image === currentImage ? " active" : "");
    img.addEventListener("click", () => selectImage(puzzle, img));
    wrap.appendChild(img);

    const best = progress[puzzle.image];
    if (best) {
      const badge = document.createElement("span");
      badge.className = "medal-badge";
      badge.textContent = best.medal;
      badge.title = pageText.bestResult(best.moves);
      wrap.appendChild(badge);
    }

    thumbs.appendChild(wrap);
  });

  const selectedPuzzle = puzzleImages.find(item => item.image === currentImage);
  if (selectedPuzzle) {
    document.getElementById("infoText").textContent = getDescription(selectedPuzzle);
  }
}

function selectImage(puzzle, element){
  // Highlight selected
  document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
  element.classList.add("active");

  // Update puzzle image
  currentImage = puzzle.image;
  document.getElementById("infoText").textContent = getDescription(puzzle);

  // Restart puzzle
  init();
}

function startPuzzle(art) {
  viewer.innerHTML = `
    <div id="puzzle" class="puzzle"></div>
  `;

  createPuzzle(art.img, 3); // 3x3 grid
}
function createPuzzle(imgSrc, size) {
  const puzzle = document.getElementById("puzzle");
  puzzle.innerHTML = "";

  let tiles = [];

  for (let i = 0; i < size * size; i++) {
    tiles.push(i);
  }

  // Shuffle
  tiles.sort(() => Math.random() - 0.5);

  tiles.forEach((num, index) => {
    const tile = document.createElement("div");
    tile.className = "tile";

    if (num !== size * size - 1) {
      tile.style.backgroundImage = `url(${imgSrc})`;

      const x = num % size;
      const y = Math.floor(num / size);

      tile.style.backgroundPosition = `
        ${(x / (size - 1)) * 100}% 
        ${(y / (size - 1)) * 100}%
      `;
    } else {
      tile.classList.add("empty");
    }

    tile.addEventListener("click", () => moveTile(index, size));

    puzzle.appendChild(tile);
  });
}
function createPuzzleFromDOM(size) {
  const tiles = document.querySelectorAll(".tile");

  tiles.forEach((tile, index) => {
    tile.onclick = () => moveTile(index, size);
  });
}

//PUZZLE
const puzzle = document.getElementById("puzzle");

let currentImage = localStorage.getItem("puzzleImage") || "dino1.jpg";

const size = 3;

let tiles = [];

function init() {
    gameWon = false;
	moveCount = 0;
  updateMoveCounter();
  tiles = [];

  for (let i = 0; i < size * size; i++) {
    tiles.push(i);
  }

  do {
    tiles.sort(() => Math.random() - 0.5);
  } while (countInversions(tiles) % 2 !== 0); // keep shuffling until solvable

  render();
}

function render() {
  puzzle.innerHTML = "";

  tiles.forEach((num, index) => {
    const tile = document.createElement("div");
    tile.className = "tile";

    if (num !== size * size - 1) {
      tile.style.backgroundImage = `url(${currentImage})`;

      const x = num % size;
      const y = Math.floor(num / size);

      tile.style.backgroundPosition = `
        ${(x / (size - 1)) * 100}% 
        ${(y / (size - 1)) * 100}%
      `;
    } else {
      tile.classList.add("empty");
    }

    tile.onclick = () => move(index);
moveSound.play();
    puzzle.appendChild(tile);
  });
}

function move(index) {
    if (gameWon) return;
  const emptyIndex = tiles.indexOf(size * size - 1);

  const row = Math.floor(index / size);
  const col = index % size;

  const emptyRow = Math.floor(emptyIndex / size);
  const emptyCol = emptyIndex % size;

  const isAdjacent =
    (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
    (col === emptyCol && Math.abs(row - emptyRow) === 1);

  if (isAdjacent) {
  [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];

  moveCount++;
  updateMoveCounter();

  render();

  if (checkWin()) {
    setTimeout(showWin, 200);
  }
}
}
function countInversions(arr) {
  let inversions = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        arr[i] !== arr.length - 1 &&
        arr[j] !== arr.length - 1 &&
        arr[i] > arr[j]
      ) {
        inversions++;
      }
    }
  }

  return inversions;
}

function updateMoveCounter() {
  const counter = document.getElementById("moveCounter");
  if (counter) {
    counter.textContent = `${pageLanguage === "es" ? "Intentos" : "Tries"}: ${moveCount}`;
  }
}

function showWin() {
  gameWon = true;
  const medal = getMedal(moveCount);

  savePuzzleProgress(currentImage, moveCount, medal.icon);
  renderThumbnails();

  const puzzleData = puzzleImages.find(p => p.image === currentImage);
  const description = puzzleData ? puzzleData.description : "";

  const overlay = document.createElement("div");
  overlay.className = "win-overlay";

  overlay.innerHTML = `
    <div>
      <h1>${pageText.title}</h1>
      <h1>${pageText.medalTitle}</h1>
      <h1><span style="font-size: 80px">${medal.icon}</span></h1>
      <p class="win-desc"></p>
      <button class="win-speak" aria-label="${pageText.listenDescription}">${pageText.listen}</button>
      <h3><br><br>${pageText.invite}</h3>
      <br><br>
      <button onclick="restartPuzzle()">⨞</button>
    </div>
  `;

  overlay.querySelector(".win-desc").textContent = getDescription(puzzleData);

  const speakBtn = overlay.querySelector(".win-speak");
  if (!canSpeak || !description) {
    speakBtn.remove();
  } else {
    speakBtn.addEventListener("click", () => speak(description));
  }

  document.body.appendChild(overlay);
}

function checkWin() {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== i) return false;
  }
  return true;
}

function goBack() {
  window.location.href = pageLanguage === "en" ? "index_e.html" : "index.html";
}
function restartPuzzle() {
  document.querySelector(".win-overlay")?.remove();
  
}
init();
renderThumbnails();
  
  function getMedal(tries) {

    if (moveCount <= 50) {
        return {
            icon: "🥇",
        };
    }

    if (moveCount <= 99) {
        return {
            icon: "🥈",
            
        };
    }

    return {
        icon: "🥉",
        
    };

}
