const moveSound = new Audio('move.mp3');
let moveCount = 0;
let gameWon = false;

const puzzleImages = [
  
 {
    image:"dino1.jpg",
    description:"Un herbívoro gigante de cuello largo que se alimentaba de las copas de los árboles durante el Jurásico Superior."
},

{
    image:"dino2.jpg",
    description:"Un enorme depredador con mandíbulas poderosas que dominó Norteamérica durante el Cretácico Superior."
},

{
    image:"dino3.jpg",
    description:"Un depredador pequeño y veloz con garras afiladas y una agilidad de caza excepcional."
},
    {
    image:"dino4.jpg",
    description:"Un dinosaurio herbívoro con grandes placas dorsales y una cola con púas para defenderse."
},
    {
    image:"dino5.jpg",
    description:"Un herbívoro acorazado con una cola pesada en forma de maza para defenderse de los depredadores."
},
    {
    image:"dino6.jpg",
    description:"Un herbívoro de tres cuernos con una gran armadura para defenderse y exhibirse."
},
    {
    image:"dino7.jpg",
    description:"Un reptil marino gigante que dominaba los océanos antiguos con mandíbulas poderosas y una gran velocidad al nadar."
},
    {
    image:"dino8.jpg",
    description:"Un reptil volador que surcaba los cielos de los paisajes prehistóricos, cazando peces y pequeños animales."
},
    {
    image:"dino9.jpg",
    description:"Poderoso depredador de la Edad de Hielo, famoso por sus largos y curvos colmillos."
},
    {
    image:"dino10.jpg",
    description:"Un elefante de la Edad de Hielo con largos colmillos y un pelaje grueso adaptado a los climas fríos."
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

  const overlay = document.createElement("div");
  overlay.className = "win-overlay";

  overlay.innerHTML = `
    <div class="win-box">
      <h1>🎉 Completado!</h1>
      <button onclick="restartPuzzle()">Reiniciar</button>
      <button onclick="goBack()">Atras</button>
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
  init();
}
init();
renderThumbnails();
  