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
        <a href="${art.link}" class="playbtn">Jugar</a>
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
      
      <p>INSTRUCCIONES: Haz clic en las piezas alrededor de la pieza vacía para moverlas y completar el rompecabezas.</p>
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
      size: "INSTRUCCIONES:",
      link: "index_3.html",
        info: "Voltea las cartas de los paises de America y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 26 Intentos  🥈 Normal: - 40 Intentos  🥉 Insuficiente: 41 + Intentos"
    },
    {
      img: "geo2.jpg",
      title: "Capitales de Europa y Africa - 24 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_4.html",
        info: "Voltea las cartas de los paises de Europa y Africa y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 26 Intentos  🥈 Normal: - 40 Intentos  🥉 Insuficiente: 41 + Intentos"
    },
      {
      img: "geo3.jpg",
      title: "Capitales de Asia y Oceania - 22 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_5.html",
        info: "Voltea las cartas de los paises de Asia y Oceania y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 23 Intentos  🥈 Normal: - 35 Intentos  🥉 Insuficiente: 36 + Intentos"
    },
      
      {
      img: "geo11.jpg",
      title: "Capitales de Mexico #1 - 22 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_6.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 23 Intentos  🥈 Normal: - 35 Intentos  🥉 Insuficiente: 36 + Intentos"
    },
      
      {
      img: "geo12.jpg",
      title: "Capitales de Mexico #2 - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_7.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "geo13.jpg",
      title: "Capitales de Mexico #3 - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_8.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "geo21.jpg",
      title: "Biomas y Climas - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_9.html",
        info: "Voltea las cartas de los Biomas y Climas del mundo y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -14 Intentos 🥈 Normal: -21 Intentos 🥉 Insuficiente: 22 o mas Intentos"
    },
      
  ],

  hollywood: [
    {
      img: "ana1.jpg",
      title: "Planetas del Sistema Solar - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_11.html",
        info: "Voltea las cartas de los Planetas del Sistema Solar y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -14 Intentos  🥈 Normal: -21 Intentos 🥉 Insuficiente: 22 o mas Intentos"
    },
    
    {
      img: "anat3.jpg",
      title: "Elementos Quimicos - 22 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_13.html",
        info: "Voltea las cartas de los Elementos Quimicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 23 Intentos  🥈 Normal: - 35 Intentos  🥉 Insuficiente: 36 + Intentos"
    },
      {
      img: "ana4.jpg",
      title: "Organos del Cuerpo Humano - 18 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_12.html",
        info: "Voltea las cartas de los Organos del Cuerpo Humano y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -17 Intentos 🥈 Normal: -25 Intentos 🥉 Insuficiente: 26 o mas Intentos"
    },
      {
      img: "ana2.jpg",
      title: "Reino Animal  - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_14.html",
        info: "Voltea las cartas de las especies del Reino Animal y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "ana5.jpg",
      title: "Magnitudes Fisicas - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_15.html",
        info: "Voltea las cartas de las Magnitudes Fisicas y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
       {
      img: "anat6.jpg",
      title: "Figuras Geometricas 3D - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_31.html",
        info: "Voltea las cartas de las Figuras Geometricas 3D y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
  ],

  sports: [
    {
      img: "hum1.jpg",
      title: "Figuras Historicas - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_21.html",
        info: "Voltea las cartas de las Figuras Historicas y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
     {
      img: "hum4.jpg",
      title: "Figuras Historicas de Mexico - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_22.html",
        info: "Voltea las cartas de las figuras historicas de Mexico y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "hum3.jpg",
      title: "Avances Tecnologicos - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_23.html",
        info: "Voltea las cartas de los Avances Tecnologicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -14 Intentos 🥈 Normal: -21 Intentos 🥉 Insuficiente: 22 o mas Intentos"
    },
     {
      img: "hum2.jpg",
      title: "Monumentos Historicos  - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_24.html",
        info: "Voltea las cartas de los Monumentos Historicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
	{
      img: "hum5.jpg",
      title: "Bellas Artes  - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_25.html",
        info: "Voltea las cartas de las Bellas Artes y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: -14 Intentos-🥈 Normal: -21 Intentos 🥉 Insuficiente: 22 o mas Intentos"
    },
	{
      img: "hum6.jpg",
      title: "Trajes Tipicos - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_26.html",
        info: "Voltea las cartas de los Trajes Tipicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
      {
      img: "hum7.jpg",
      title: "Instrumentos Musicales - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_32.html",
        info: "Voltea las cartas de los Instrumentos Musicales y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br><br>🏅 Excelente: - 20 Intentos  🥈 Normal: - 30 Intentos  🥉 Insuficiente: 31 + Intentos"
    },
  ],
};

//Render Thumbnails
const thumbnailsContainer = document.getElementById("thumbnails");

function renderThumbnails(list) {
  thumbnailsContainer.innerHTML = "";

  list.forEach((art, index) => {
    const thumb = document.createElement("img");
    thumb.src = art.img;
    thumb.className = "thumbnail";
    
    thumb.addEventListener("click", () => {

      // 🔹 Remove active from all thumbnails
      document.querySelectorAll(".thumbnail").forEach(t => {
        t.classList.remove("active");
      });

      // 🔹 Add active to clicked one
      thumb.classList.add("active");

      // 🔹 Load artwork
      loadArtwork(art);
    });

    thumbnailsContainer.appendChild(thumb);
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
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("fade-out");

  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 900);

});
welcomeScreen.addEventListener("click", () => {
  enterBtn.click();
});

function goBack() {
  window.location.href = "english/index.html";
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
