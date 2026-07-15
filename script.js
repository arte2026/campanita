const viewer = document.getElementById("viewerContent");
const aboutBtn = document.getElementById("aboutBtn");
const puzzleBtn = document.getElementById("puzzleBtn");

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
        <p>${art.info}</p>
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
      <img src="geo.png" >
      <h2>Geometria</h2>

      <p>Voltea las cartas de las Figuras Geometricas y emparejalas con las cartas de sus nombres.</p>

<p>🏅 Excelente: 10-15 Intentos<br> 👍 Normal: 16-25 Intentos<br> ❌ Reprobado: 26 o mas Intentos</p>
<p><br><a class="playbtn" href="index_31.html">Jugar</a>
</p>
    </div>
  `;
});

// About view
puzzleBtn.addEventListener("click", () => {
  viewer.innerHTML = `
    <div class="info-screen">
	<img src="rom.png" >
   
      <h3>Rompecabezas:</h3>
      
      <p>INSTRUCCIONES: Haz clic en las piezas alrededor de la pieza vacía para moverlas y completar el rompecabezas.</p>
	  <p>🏅 Excelente: 0-50 Intentos<br> 👍 Normal: 51-99 Intentos<br> ❌ Reprobado: 100 o mas Intentos</p>
<p><br><a class="playbtn" href="index_2.html">Jugar</a>
</p>
    </div>
  `;
});

//Data Structure
const artworks = {
  rock: [
    {
      img: "geo1.jpg",
      title: "Memorama - 24 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_3.html",
        info: "Voltea las cartas de los paises de America y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br>-🏅 Excelente: 12-18 Intentos<br>-👍 Normal: 19-28 Intentos<br>-❌ Reprobado: 29 o mas Intentos"
    },
    {
      img: "geo2.jpg",
      title: "Memorama - 24 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_4.html",
        info: "Voltea las cartas de los paises de Europa y Africa y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br>-🏅 Excelente: 12-18 Intentos<br>-👍 Normal: 19-28 Intentos<br>-❌ Reprobado: 29 o mas Intentos"
    },
      {
      img: "geo3.jpg",
      title: "Memorama - 22 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_5.html",
        info: "Voltea las cartas de los paises de Asia y Oceania y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br>-🏅 Excelente: 12-17 Intentos<br>-👍 Normal: 18-27 Intentos<br>-❌ Reprobado: 28 o mas Intentos"
    },
      
      {
      img: "geo11.jpg",
      title: "Memorama - 22 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_6.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br>-🏅 Excelente: 12-17 Intentos<br>-👍 Normal: 18-27 Intentos<br>-❌ Reprobado: 28 o mas Intentos"
    },
      
      {
      img: "geo12.jpg",
      title: "Memorama - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_7.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br>-🏅 Excelente: 10-15 Intentos<br>-👍 Normal: 16-25 Intentos<br>-❌ Reprobado: 26 o mas Intentos"
    },
      {
      img: "geo13.jpg",
      title: "Memorama - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_8.html",
        info: "Voltea las cartas de los estados de Mexico y emparejalas con las cartas de sus respectivas capitales.<br><br>Puntuacion:<br>-🏅 Excelente: 10-15 Intentos<br>-👍 Normal: 16-25 Intentos<br>-❌ Reprobado: 26 o mas Intentos"
    },
      {
      img: "geo21.jpg",
      title: "Memorama - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_9.html",
        info: "Voltea las cartas de los Biomas y Climas del mundo y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 8-12 Intentos<br>-👍 Normal: 13-20 Intentos<br>-❌ Reprobado: 21 o mas Intentos"
    },
      
  ],

  hollywood: [
    {
      img: "ana1.jpg",
      title: "Memorama - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_11.html",
        info: "Voltea las cartas de los Planetas del Sistema Solar y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 8-12 Intentos<br>-👍 Normal: 13-20 Intentos<br>-❌ Reprobado: 21 o mas Intentos"
    },
    
    {
      img: "anat3.jpg",
      title: "Memorama - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_13.html",
        info: "Voltea las cartas de los Elementos Quimicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 10-15 Intentos<br>-👍 Normal: 16-25 Intentos<br>-❌ Reprobado: 26 o mas Intentos"
    },
      {
      img: "ana4.jpg",
      title: "Memorama - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_12.html",
        info: "Voltea las cartas de los Organos del Cuerpo Humano y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 8-12 Intentos<br>-👍 Normal: 13-20 Intentos<br>-❌ Reprobado: 21 o mas Intentos"
    },
      {
      img: "ana2.jpg",
      title: "Memorama - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_14.html",
        info: "Voltea las cartas de las especies del Reino Animal y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 10-15 Intentos<br>-👍 Normal: 16-25 Intentos<br>-❌ Reprobado: 26 o mas Intentos"
    },
      
  ],

  sports: [
    {
      img: "hum1.jpg",
      title: "Memorama - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_21.html",
        info: "Voltea las cartas de las Figuras Historicas y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 10-15 Intentos<br>-👍 Normal: 16-25 Intentos<br>-❌ Reprobado: 26 o mas Intentos"
    },
     {
      img: "hum4.jpg",
      title: "Memorama - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_22.html",
        info: "Voltea las cartas de las figuras historicas de Mexico y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 10-15 Intentos<br>-👍 Normal: 16-25 Intentos<br>-❌ Reprobado: 26 o mas Intentos"
    },
      {
      img: "hum3.jpg",
      title: "Memorama - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_23.html",
        info: "Voltea las cartas de los avances tecnologicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 8-12 Intentos<br>-👍 Normal: 13-20 Intentos<br>-❌ Reprobado: 21 o mas Intentos"
    },
     {
      img: "hum2.jpg",
      title: "Memorama - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_24.html",
        info: "Voltea las cartas de los monumentos historicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 10-14 Intentos<br>-👍 Normal: 15-22 Intentos<br>-❌ Reprobado: 23 o mas Intentos"
    },
	{
      img: "hum5.jpg",
      title: "Memorama - 16 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_25.html",
        info: "Voltea las cartas de las Bellas Artes y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 8-13 Intentos<br>-👍 Normal: 14-21 Intentos<br>-❌ Reprobado: 22 o mas Intentos"
    },
	{
      img: "hum6.jpg",
      title: "Memorama - 20 Cartas",
      size: "INSTRUCCIONES:",
      link: "index_26.html",
        info: "Voltea las cartas de los Trajes Tipicos y emparejalas con las cartas de sus respectivos nombres.<br><br>Puntuacion:<br>-🏅 Excelente: 10-16 Intentos<br>-👍 Normal: 17-24 Intentos<br>-❌ Reprobado: 25 o mas Intentos"
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