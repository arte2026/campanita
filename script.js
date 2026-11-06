const viewer = document.getElementById("viewerContent");
const aboutBtn = document.getElementById("aboutBtn");

// Default artwork view

function loadArtwork(art) {
    currentZoomIndex = 0; // reset zoom
    
  viewer.innerHTML = `
    <div class="card1" id="card1">
      <div class="front1">
        <img src="${art.img}">
      </div>
      <div class="back1">
        <h2>${art.title}</h2>
        <h3>${art.size}</h3>
        <h3>${art.info}</h3>
        <a href="${art.link}" class="playbtn">▶</a>
      </div>
    </div>
  `;

  setupCardFlip();
}

// About view
aboutBtn.addEventListener("click", () => {
  viewer.innerHTML = `
    <div class="info-screen">
	
    <h1>🧩 🧩 🧩 🧩</h1>
      <h2>Rompecabezas</h2>
      
      <p>COMO JUGAR: Haz clic en las piezas alrededor de la pieza vacía para moverlas y completar el rompecabezas.</p>
	  <p>Puntuacion:<br>🏅 Excelente: 0-50 Intentos<br> 🥈 Normal: 51-99 Intentos<br> 🥉 Insuficiente: 100 o mas Intentos</p><br>
<a class="playbtn" href="index_2.html">Jugar</a>

    </div>
  `;
});

//Data Structure
const artworks = {
  rock: [
    {
      img: "geo1.jpg",
      title: "Capitales de America - 24 Cartas",
      size: "COMO JUGAR:",
      link: "index_3.html",
        info: "Voltea las cartas de los paises de America y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 26 Intentos  🥈 Normal: - 40 Intentos  🥉 Insuficiente: 41 + Intentos"
    },
    {
      img: "geo2.jpg",
      title: "Capitales de Europa y Africa - 24 Cartas",
      size: "COMO JUGAR:",
      link: "index_4.html",
        info: "Voltea las cartas de los paises de Europa y Africa y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 26 Intentos  🥈 Normal: - 40 Intentos  🥉 Insuficiente: 41 + Intentos"
    },
      {
      img: "geo3.jpg",
      title: "Capitales de Asia y Oceania - 22 Cartas",
      size: "COMO JUGAR:",
      link: "index_5.html",
        info: "Voltea las cartas de los paises de Asia y Oceania y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 23 Intentos  🥈 Normal: - 35 Intentos  🥉 Insuficiente: 36 + Intentos"
    },
      
      {
      img: "geo11.jpg",
      title: "Capitales de Mexico #1 - 22 Cartas",
      size: "COMO JUGAR:",
      link: "index_6.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 23 Intentos  🥈 Normal: - 35 Intentos  🥉 Insuficiente: 36 + Intentos"
    },
      
      {
      img: "geo12.jpg",
      title: "Capitales de Mexico #2 - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_7.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "geo13.jpg",
      title: "Capitales de Mexico #3 - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_8.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
    {
      img: "geo20.jpg",
      title: "Maravillas Naturales del Mundo - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_10.html",
        info: "Voltea las cartas de las Maravillas Naturales del mundo y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -20 Intentos 🥈 Normal: -30 Intentos 🥉 Insuficiente: 31 o mas Intentos"
    },
      {
      img: "geo21.jpg",
      title: "Biomas y Climas - 16 Cartas",
      size: "COMO JUGAR:",
      link: "index_9.html",
        info: "Voltea las cartas de los Biomas y Climas del mundo y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -14 Intentos 🥈 Normal: -21 Intentos 🥉 Insuficiente: 22 o mas Intentos"
    },
      
  ],

  hollywood: [
    {
      img: "ana1.jpg",
      title: "Planetas del Sistema Solar - 16 Cartas",
      size: "COMO JUGAR:",
      link: "index_11.html",
        info: "Voltea las cartas de los Planetas del Sistema Solar y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -14 Intentos  🥈 Normal: -21 Intentos 🥉 Insuficiente: 22 o mas Intentos"
    },
    
    {
      img: "anat3.jpg",
      title: "Elementos Quimicos - 22 Cartas",
      size: "COMO JUGAR:",
      link: "index_13.html",
        info: "Voltea las cartas de los Elementos Quimicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 23 Intentos  🥈 Normal: - 35 Intentos  🥉 Insuficiente: 36 + Intentos"
    },
      {
      img: "ana4.jpg",
      title: "Organos del Cuerpo Humano - 18 Cartas",
      size: "COMO JUGAR:",
      link: "index_12.html",
        info: "Voltea las cartas de los Organos del Cuerpo Humano y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -17 Intentos 🥈 Normal: -25 Intentos 🥉 Insuficiente: 26 o mas Intentos"
    },
      {
      img: "ana2.jpg",
      title: "Reino Animal  - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_14.html",
        info: "Voltea las cartas de las especies del Reino Animal y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "ana5.jpg",
      title: "Magnitudes Fisicas - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_15.html",
        info: "Voltea las cartas de las Magnitudes Fisicas y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
       {
      img: "anat6.jpg",
      title: "Figuras Geometricas 3D - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_16.html",
        info: "Voltea las cartas de las Figuras Geometricas 3D y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
     {
      img: "ana7.jpg",
      title: "Maravillas del Universo",
      size: "COMO JUGAR:",
      link: "index_17.html",
        info: "Voltea las cartas de las Maravillas del Universo y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
  ],

  sports: [
    {
      img: "hum1.jpg",
      title: "Figuras Historicas - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_21.html",
        info: "Voltea las cartas de las Figuras Historicas y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
     {
      img: "hum4.jpg",
      title: "Figuras Historicas de Mexico - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_22.html",
        info: "Voltea las cartas de las figuras historicas de Mexico y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "hum3.jpg",
      title: "Avances Tecnologicos - 16 Cartas",
      size: "COMO JUGAR:",
      link: "index_23.html",
        info: "Voltea las cartas de los Avances Tecnologicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -14 Intentos 🥈 Normal: -21 Intentos 🥉 Insuficiente: 22 o mas Intentos"
    },
     {
      img: "hum2.jpg",
      title: "Monumentos Historicos  - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_24.html",
        info: "Voltea las cartas de los Monumentos Historicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
	{
      img: "hum5.jpg",
      title: "Bellas Artes  - 16 Cartas",
      size: "COMO JUGAR:",
      link: "index_25.html",
        info: "Voltea las cartas de las Bellas Artes y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -14 Intentos-🥈 Normal: -21 Intentos 🥉 Insuficiente: 22 o mas Intentos"
    },
	{
      img: "hum6.jpg",
      title: "Trajes Tipicos - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_26.html",
        info: "Voltea las cartas de los Trajes Tipicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "hum7.jpg",
      title: "Instrumentos Musicales - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_27.html",
        info: "Voltea las cartas de los Instrumentos Musicales y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
    
    {
      img: "hum8.jpg",
      title: "Platos del Mundo - 20 Cartas",
      size: "COMO JUGAR:",
      link: "index_28.html",
        info: "Voltea las cartas de los Platos del Mundo y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
  ],
  rock2: [
    {
      img: "geo1.jpg",
      title: "Capitals of the  Americas - 24 Cards",
      size: "INSTRUCTIONS:",
      link: "index_3e.html",
        info: "Flip over the cards of the countries of the Americas and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 26 Tries  🥈 Normal: - 40 Tries  🥉 Insufficient: 41 + Tries"
    },
    {
      img: "geo2.jpg",
      title: "Capitals of Europe and Africa - 24 Cards",
      size: "INSTRUCTIONS:",
      link: "index_4e.html",
        info: "Flip over the cards of the countries of Europe and Africa and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 26 Tries  🥈 Normal: - 40 Tries  🥉 Insufficient: 41 + Tries"
    },
      {
      img: "geo3.jpg",
      title: "Capitals of  Asia and Oceania - 22 Cards",
      size: "INSTRUCTIONS:",
      link: "index_5e.html",
        info: "Flip over the cards of the countries of Asia and Oceania and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 23 Tries  🥈 Normal: - 35 Tries  🥉 Insufficient: 36 + Tries"
    },
      
      {
      img: "geo11.jpg",
      title: "Capitals of Mexico #1 - 22 Cards",
      size: "INSTRUCTIONS:",
      link: "index_6e.html",
        info: "Flip over the cards of the states of Mexico and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 23 Tries  🥈 Normal: - 35 Tries  🥉 Insufficient: 36 + Tries"
    },
      
      {
      img: "geo12.jpg",
      title: "Capitals of Mexico #2 - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_7e.html",
        info: "Flip over the cards of the states of Mexico and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "geo13.jpg",
      title: "Capitals of Mexico #3 - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_8e.html",
        info: "Flip over the cards of the states of Mexico and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "geo21.jpg",
      title: "Biomes and Climate - 16 Cards",
      size: "INSTRUCTIONS:",
      link: "index_9e.html",
        info: "Flip over the cards of the Biomes of the World and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -14 Tries 🥈 Normal: -21 Tries 🥉 Insufficient: 22 + Tries"
    },
      
  ],
   hollywood2: [
    {
      img: "ana1.jpg",
      title: "Planets of the Solar System- 16 Cards",
      size: "INSTRUCTIONS:",
      link: "index_11e.html",
        info: "Flip over the cards of the Planets of the Solar System and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -14 Tries  🥈 Normal: -21 Tries 🥉 Insufficient: 22 + Tries"
    },
    
    {
      img: "anat3.jpg",
      title: " Quimical Elements - 22 Cards",
      size: "INSTRUCTIONS:",
      link: "index_13e.html",
        info: "Flip over the cards of the Quimical Elements and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 23 Tries  🥈 Normal: - 35 Tries  🥉 Insufficient: 36 + Tries"
    },
      {
      img: "ana4.jpg",
      title: "Organs of the Human Body - 18 Cards",
      size: "INSTRUCTIONS:",
      link: "index_12e.html",
        info: "Flip over the cards of the Organs of the Human Body and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -17 Tries 🥈 Normal: -25 Tries 🥉 Insufficient: 26 + Tries"
    },
      {
      img: "ana2.jpg",
      title: "Animal Kingdom - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_14e.html",
        info: "Flip over the cards of the Animal Kingdom species and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "ana5.jpg",
      title: "Physical Quantities - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_15e.html",
        info: "Flip over the cards of the Physical Quantities and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
       {
      img: "anat6.jpg",
      title: " Geometric Figures 3D - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_16e.html",
        info: "Flip over the cards of the Geometric Figures  3D and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
  ],

  sports2: [
    {
      img: "hum1.jpg",
      title: "Universal History - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_21e.html",
        info: "Flip over the cards of the Universal History Figures and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
     {
      img: "hum4.jpg",
      title: "History of Mexico - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_22e.html",
        info: "Flip over the cards of the History of Mexico Figures and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "hum3.jpg",
      title: " Tecnological Advances - 16 Cards",
      size: "INSTRUCTIONS:",
      link: "index_23e.html",
        info: "Flip over the cards of the Tecnological Advances  and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -14 Tries 🥈 Normal: -21 Tries 🥉 Insufficient: 22 + Tries"
    },
     {
      img: "hum2.jpg",
      title: " Historical Monuments  - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_24e.html",
        info: "Flip over the cards of the Historical Monuments and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
	{
      img: "hum5.jpg",
      title: "Fine Arts  - 16 Cards",
      size: "INSTRUCTIONS:",
      link: "index_25e.html",
        info: "Flip over the cards of the Fine Arts and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -14 Tries-🥈 Normal: -21 Tries 🥉 Insufficient: 22 + Tries"
    },
	{
      img: "hum6.jpg",
      title: "Traditional Costumes- 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_26e.html",
        info: "Flip over the cards of the Traditional Costumes and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "hum7.jpg",
      title: " Musical Instruments- 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_27e.html",
        info: "Flip over the cards of the sounds of Musical Instruments and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
  ],
};

//Render Thumbnails
const thumbnailsContainer = document.getElementById("thumbnails");

function getProgress() {
  try { return JSON.parse(localStorage.getItem("campanitaProgress")) || {}; }
  catch (e) { return {}; }
}

function renderThumbnails(list) {
  thumbnailsContainer.innerHTML = "";
  const progress = getProgress();

  list.forEach((art) => {
    const wrap = document.createElement("span");
    wrap.className = "thumb-wrap";

    const thumb = document.createElement("img");
    thumb.src = art.img;
    thumb.className = "thumbnail";

    thumb.addEventListener("click", () => {
      document.querySelectorAll(".thumbnail").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      loadArtwork(art);
    });

    wrap.appendChild(thumb);

    const best = progress[art.link];
    if (best) {
      const badge = document.createElement("span");
      badge.className = "medal-badge";
      badge.textContent = best.medal;
      badge.title = `Mejor resultado: ${best.tries} intentos`;
      wrap.appendChild(badge);
    }

    thumbnailsContainer.appendChild(wrap);
  });
}

//Load Category
function loadCategory(category) {
  const list = artworks[category];

  renderThumbnails(list);

  if (list.length > 0) {
    loadArtwork(list[0]);

    // Highlight first thumbnail
    setTimeout(() => {
      const firstThumb = document.querySelector(".thumbnail");
      if (firstThumb) firstThumb.classList.add("active");
    }, 0);
  }
}


const radios = document.querySelectorAll('input[name="category"]');

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    loadCategory(radio.value);
  });
});


//FLIP
function setupCardFlip() {
  const card = document.getElementById("card1");

  let startX = 0;

  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (Math.abs(startX - endX) > 50) {
      card.classList.toggle("flip1");
    }
  });

  card.addEventListener("click", () => {
    card.classList.toggle("flip1");
  });
}
//WELCOME
const welcomeScreen = document.getElementById("welcomeScreen");

welcomeScreen.addEventListener("click", () => {
  try { sessionStorage.setItem("welcomeSeen", "1"); } catch (e) {}
  welcomeScreen.classList.add("fade-out");
  setTimeout(() => { welcomeScreen.style.display = "none"; }, 900);
});

function goBack() {
  window.location.href = "english/index_e.html";
}
function goBack2() {
  window.location.href = "../index.html";
}

// Check if Service Workers are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}
