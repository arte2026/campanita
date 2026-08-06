const moveSound = new Audio('move.mp3');
let moveCount = 0;
let gameWon = false;

const puzzleImages = [
  
 {
    image:"dino1.jpg",
    description:"An imposing, long-necked herbivore that fed on foliage from the treetops. Slow-moving, its front limbs were longer than its hind limbs, giving it a sloping back."
},

{
    image:"dino2.jpg",
    description:"A predator with powerful muscles and bone-crushing jaws; its keen senses helped it detect prey. Its massive hind legs allowed it to reach high speeds, while its small arms were vestigial."
},

{
    image:"dino3.jpg",
    description:"A small, swift predator with sharp claws and exceptional hunting agility. Equipped with sickle-shaped claws and sharp teeth, it used speed, coordination, and cunning to capture prey while hunting in packs."
},
    {
    image:"dino4.jpg",
    description:"An armored herbivore featuring a distinctive row of bony plates along its back and a spiked tail used for defense. Slow-moving and low-slung, it grazed on low-growing vegetation and relied on its armor for protection."
},
    {
    image:"dino5.jpg",
    description:"A heavily armored, low-slung herbivore with a robust body covered in bony plates and nodules; its massive, club-like tail could deliver powerful blows to predators."
},
    {
    image:"dino6.jpg",
    description:"A large, three-horned herbivore with a massive skull and a broad frill; its horns were used for defense and combat against others of its kind. It engaged in social displays during the mating season."
},
    {
    image:"dino7.jpg",
    description:"A large marine reptile with paddle-like limbs and a powerful tail. An oceanic predator that hunted fish and other marine reptiles. Its streamlined body allowed for high-speed chases and ambushes."
},
    {
    image:"dino8.jpg",
    description:"A winged pterosaur featuring membranes stretched between its long fingers and body; its lightweight skeleton enabled efficient flight. It fed on fish or small animals, soaring over coasts and rivers with great agility."
},
    {
    image:"dino9.jpg",
    description:"A robust, muscular predator with elongated upper canines. An ambush specialist, it relied on stealth and strength. Group hunting likely helped it take down large prey."
},
    {
    image:"dino10.jpg",
    description:"A relative of the elephant, featuring long, curved tusks and thick fur adapted to the cold of the Ice Age; it fed on grasses, shrubs, and woody plants. Climate change and human hunting led to its extinction over the course of millennia."
},
];

function renderThumbnails() {
  const thumbs = document.getElementById("thumbs");
  thumbs.innerHTML = "";

  puzzleImages.forEach((puzzle,index)=>{

    const img = document.createElement("img");

    img.src = puzzle.image;

    img.className = "thumb";

    img.addEventListener("click",()=>{

        selectImage(puzzle,img);

    });

    thumbs.appendChild(img);
  });
}

function selectImage(puzzle, element){
  // Highlight selected
  document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
  element.classList.add("active");

  // Update puzzle image
  currentImage = puzzle.image;
    document.getElementById("infoText").textContent =
    puzzle.description;

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
    counter.textContent = `Intentos: ${moveCount}`;
  }
}

function showWin() {
  gameWon = true;
const medal = getMedal(moveCount);
  const overlay = document.createElement("div");
  overlay.className = "win-overlay";

  overlay.innerHTML = `
    <div>
      <h1>🎉 ¡Completed!</h1>
<h1>You have won a medal:</h1>
<h1><span style="font-size: 80px">${medal.icon}</span></h1>
      <h3><br><br>*I invite you to install the free version of this game for Android devices. <br>Available on the Google Play Store.</h3>
      <br><br>
      <button onclick="restartPuzzle()">⨞</button>
    </div>

    </div>
  `;

  document.body.appendChild(overlay);
}
function checkWin() {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== i) return false;
  }
  return true;
}

function goBack() {
  window.location.href = "index.html";
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
