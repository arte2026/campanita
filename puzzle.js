const moveSound = new Audio('move.mp3');
let moveCount = 0;
let gameWon = false;

const puzzleImages = [
  
 {
    image:"dino1.jpg",
    description:"Herbívoro imponente de cuello largo que se alimentaba del follaje de las copas de los árboles. De movimientos lentos, sus extremidades delanteras eran más largas que las traseras, lo que le daba una espalda inclinada."
},

{
    image:"dino2.jpg",
    description:"Depredador con poderosos músculos y mandíbulas capaces de triturar huesos; sus agudos sentidos le ayudaban a detectar presas. Sus enormes patas traseras le permitían alcanzar grandes velocidades, pero sus pequeños brazos eran vestigiales."
},

{
    image:"dino3.jpg",
    description:"Un depredador pequeño y veloz con garras afiladas y una agilidad de caza excepcional. Equipado con garras en forma de hoz y dientes afilados, utilizaba la velocidad, la coordinación y la astucia para capturar presas en manada."
},
    {
    image:"dino4.jpg",
    description:"Herbívoro acorazado con una distintiva hilera de placas óseas sobre su lomo y una cola con púas que utilizaba para defenderse. De movimientos lentos y baja estatura, pastaba en vegetación baja y dependía de su armadura para protegerse."
},
    {
    image:"dino5.jpg",
    description:"Herbívoro de cuerpo robusto, fuertemente acorazado y de baja estatura, cubierto de placas y nódulos óseos; su enorme cola con forma de maza asestaba poderosos golpes a los depredadores."
},
    {
    image:"dino6.jpg",
    description:"Gran herbívoro de tres cuernos con un cráneo macizo y una amplia gola; los cuernos se utilizaban para la defensa y el combate entre individuos de la misma especie. Participaba en exhibiciones sociales durante la época de apareamiento."
},
    {
    image:"dino7.jpg",
    description:"Gran reptil marino con extremidades en forma de remo y una cola poderosa. Un depredador oceánico que cazaba peces y otros reptiles marinos. Su cuerpo aerodinámico le permitía realizar persecuciones rápidas y emboscadas."
},
    {
    image:"dino8.jpg",
    description:"Pterosaurio alado con alas membranosas extendidas entre sus largos dedos y el cuerpo; su esqueleto ligero le permitía un vuelo eficiente. Se alimentaban de peces o animales pequeños, sobrevolando costas y rios con gran agilidad."
},
    {
    image:"dino9.jpg",
    description:"Depredador robusto y musculoso con caninos superiores alargados. Especialista en emboscadas, dependía del sigilo y la fuerza. La caza en grupo probablemente contribuyeron a abatir grandes presas con el tiempo."
},
    {
    image:"dino10.jpg",
    description:"Pariente del elefante, con largos colmillos curvos y pelaje grueso, adaptado al frío de la Edad de Hielo; se alimentaba de hierbas, arbustos y plantas leñosas. El cambio climatico y la caza humana causaron su extincion a lo largo de milenios."
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
  