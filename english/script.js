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
        <a href="${art.link}" class="playbtn">Play</a>
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
      <h2>Puzzles</h2>
      
      <p>INSTRUCTIONS: Click on the tiles surrounding the empty space to move them and complete the puzzle.</p>
	  <p>Score:<br>🏅 Excelent: 0-50 Tries<br> 🥈 Normal: 51-99 Tries<br> 🥉 Insufficient: 100 + Tries</p><br>
<a class="playbtn" href="index_2.html">Play</a>

    </div>
  `;
});

//Data Structure
const artworks = {
  rock: [
    {
      img: "geo1.jpg",
      title: "Capitals of the  Americas - 24 Cards",
      size: "INSTRUCTIONS:",
      link: "index_3.html",
        info: "Flip over the cards of the countries of the Americas and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 26 Tries  🥈 Normal: - 40 Tries  🥉 Insufficient: 41 + Tries"
    },
    {
      img: "geo2.jpg",
      title: "Capitals of Europe and Africa - 24 Cards",
      size: "INSTRUCTIONS:",
      link: "index_4.html",
        info: "Flip over the cards of the countries of Europe and Africa and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 26 Tries  🥈 Normal: - 40 Tries  🥉 Insufficient: 41 + Tries"
    },
      {
      img: "geo3.jpg",
      title: "Capitals of  Asia and Oceania - 22 Cards",
      size: "INSTRUCTIONS:",
      link: "index_5.html",
        info: "Flip over the cards of the countries of Asia and Oceania and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 23 Tries  🥈 Normal: - 35 Tries  🥉 Insufficient: 36 + Tries"
    },
      
      {
      img: "geo11.jpg",
      title: "Capitals of Mexico #1 - 22 Cards",
      size: "INSTRUCTIONS:",
      link: "index_6.html",
        info: "Flip over the cards of the states of Mexico and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 23 Tries  🥈 Normal: - 35 Tries  🥉 Insufficient: 36 + Tries"
    },
      
      {
      img: "geo12.jpg",
      title: "Capitals of Mexico #2 - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_7.html",
        info: "Flip over the cards of the states of Mexico and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "geo13.jpg",
      title: "Capitals of Mexico #3 - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_8.html",
        info: "Flip over the cards of the states of Mexico and match them with the cards of their respective capitals.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "geo21.jpg",
      title: "Biomes and Climate - 16 Cards",
      size: "INSTRUCTIONS:",
      link: "index_9.html",
        info: "Flip over the cards of the Biomes of the World and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -14 Tries 🥈 Normal: -21 Tries 🥉 Insufficient: 22 + Tries"
    },
      
  ],

  hollywood: [
    {
      img: "ana1.jpg",
      title: "Planets of the Solar System- 16 Cards",
      size: "INSTRUCTIONS:",
      link: "index_11.html",
        info: "Flip over the cards of the Planets of the Solar System and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -14 Tries  🥈 Normal: -21 Tries 🥉 Insufficient: 22 + Tries"
    },
    
    {
      img: "anat3.jpg",
      title: " Quimical Elements - 22 Cards",
      size: "INSTRUCTIONS:",
      link: "index_13.html",
        info: "Flip over the cards of the Quimical Elements and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 23 Tries  🥈 Normal: - 35 Tries  🥉 Insufficient: 36 + Tries"
    },
      {
      img: "ana4.jpg",
      title: "Organs of the Human Body - 18 Cards",
      size: "INSTRUCTIONS:",
      link: "index_12.html",
        info: "Flip over the cards of the Organs of the Human Body and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -17 Tries 🥈 Normal: -25 Tries 🥉 Insufficient: 26 + Tries"
    },
      {
      img: "ana2.jpg",
      title: "Animal Kingdom - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_14.html",
        info: "Flip over the cards of the Animal Kingdom species and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "ana5.jpg",
      title: "Physical Quantities - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_15.html",
        info: "Flip over the cards of the Physical Quantities and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
       {
      img: "anat6.jpg",
      title: " Geometric Figures 3D - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_31.html",
        info: "Flip over the cards of the Geometric Figures  3D and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
  ],

  sports: [
    {
      img: "hum1.jpg",
      title: "Universal History - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_21.html",
        info: "Flip over the cards of the Universal History Figures and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
     {
      img: "hum4.jpg",
      title: "History of Mexico - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_22.html",
        info: "Flip over the cards of the History of Mexico Figures and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "hum3.jpg",
      title: " Tecnological Advances - 16 Cards",
      size: "INSTRUCTIONS:",
      link: "index_23.html",
        info: "Flip over the cards of the Tecnological Advances  and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -14 Tries 🥈 Normal: -21 Tries 🥉 Insufficient: 22 + Tries"
    },
     {
      img: "hum2.jpg",
      title: " Historical Monuments  - 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_24.html",
        info: "Flip over the cards of the Historical Monuments and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
	{
      img: "hum5.jpg",
      title: "Fine Arts  - 16 Cards",
      size: "INSTRUCTIONS:",
      link: "index_25.html",
        info: "Flip over the cards of the Fine Arts and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: -14 Tries-🥈 Normal: -21 Tries 🥉 Insufficient: 22 + Tries"
    },
	{
      img: "hum6.jpg",
      title: "Traditional Costumes- 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_26.html",
        info: "Flip over the cards of the Traditional Costumes and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
    },
      {
      img: "hum7.jpg",
      title: " Musical Instruments- 20 Cards",
      size: "INSTRUCTIONS:",
      link: "index_32.html",
        info: "Flip over the cards of the sounds of Musical Instruments and match them with the cards of their respective names.<br><br>Score:<br><br>🏅 Excelent: - 20 Tries  🥈 Normal: - 30 Tries  🥉 Insufficient: 31 + Tries"
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
