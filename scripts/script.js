

// hamburgermenu bron: https://codepen.io/shooft/pen/VwJXNEg 
const menu = document.querySelector("nav ul");
const button = document.querySelector("nav button");
  
button.onclick = toggleButton;
  
function toggleButton() {
  button.classList.toggle("open");
  menu.classList.toggle("open");
}

// tekst in beeld laten komen effect  bron: https://codepen.io/TheSupermazter/pen/ogvNvwJ
document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".hidden"); // Selecteer alle elementen die de class "hidden" hebben
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); 
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.1
      }
    );
  
    targets.forEach((target) => observer.observe(target)); 
  });

  // Carousel //  bron: Chatgpt en https://codepen.io/shooft/pen/yLKjzWa 

  function createCaroCarrousel() {
    const carousel = document.querySelector(".carouselhome"); // De carousel container
    const images = carousel.querySelectorAll("img"); // Alle afbeeldingen
    const prevButton = carousel.querySelector(".vorige"); // Vorige knop
    const nextButton = carousel.querySelector(".volgende"); // Volgende knop
  
    let currentIndex = 0; // Startpositie van de carousel
  
    // Functie: Startpositie instellen
    function iniStartPosition() {
        // Maak alle afbeeldingen onzichtbaar
        images.forEach((img) => img.classList.remove("actief"));
        // Maak de eerste afbeelding zichtbaar
        images[currentIndex].classList.add("actief");
    }
  
    // Functie: Huidige afbeelding bijwerken
    function updateCurrentElement(newIndex) {
        // Verwijder de huidige class van alle afbeeldingen
        images.forEach((img) => img.classList.remove("actief"));
        // Voeg de huidige class toe aan de nieuwe afbeelding
        images[newIndex].classList.add("actief");
        // Update de index
        currentIndex = newIndex;
    }
  
    // Functie: Naar volgende/vorige afbeelding gaan
    function goToElement(direction) {
        let newIndex;
        if (direction === "previous") {
            newIndex = (currentIndex - 1 + images.length) % images.length; // Vorige afbeelding
        } else {
            newIndex = (currentIndex + 1) % images.length; // Volgende afbeelding
        }
        updateCurrentElement(newIndex); // Update de huidige afbeelding
    }
  
    // Functie: EventListeners voor de knoppen
    function iniLinkButtons() {
        prevButton.addEventListener("click", () => {
            goToElement("previous"); // Ga naar de vorige afbeelding
        });
  
        nextButton.addEventListener("click", () => {
            goToElement("next"); // Ga naar de volgende afbeelding
        });
    }
  
    // Initialiseer de carousel
    iniStartPosition(); // Zet de startpositie
    iniLinkButtons(); // Activeer de knoppen
  }
  
  // Carrousel activeren bij pagina-laden
  document.addEventListener("DOMContentLoaded", () => {
    createCaroCarrousel();
  });


  // Carousel 2 ook met de vorige en volgende buttons //  bron: Chatgpt en https://codepen.io/shooft/pen/yLKjzWa 

  function createCaroCarrousel2() {
    const carousel = document.querySelector(".locatie"); // De carousel container
    const images = carousel.querySelectorAll("img"); // Alle afbeeldingen
    const prevButton = carousel.querySelector(".vorige"); // Vorige knop
    const nextButton = carousel.querySelector(".volgende"); // Volgende knop
  
    let currentIndex = 0; // Startpositie van de carousel
  
    // Functie: Startpositie instellen
    function iniStartPosition() {
        // Maak alle afbeeldingen onzichtbaar
        images.forEach((img) => img.classList.remove("actief"));
        // Maak de eerste afbeelding zichtbaar
        images[currentIndex].classList.add("actief");
    }
  
    // Functie: Huidige afbeelding bijwerken
    function updateCurrentElement(newIndex) {
        // Verwijder de huidige class van alle afbeeldingen
        images.forEach((img) => img.classList.remove("actief"));
        // Voeg de huidige class toe aan de nieuwe afbeelding
        images[newIndex].classList.add("actief");
        // Update de index
        currentIndex = newIndex;
    }
  
    // Functie: Naar volgende/vorige afbeelding gaan
    function goToElement(direction) {
        let newIndex;
        if (direction === "previous") {
            newIndex = (currentIndex - 1 + images.length) % images.length; // Vorige afbeelding
        } else {
            newIndex = (currentIndex + 1) % images.length; // Volgende afbeelding
        }
        updateCurrentElement(newIndex); // Update de huidige afbeelding
    }
  
    // Functie: EventListeners voor de knoppen
    function iniLinkButtons() {
        prevButton.addEventListener("click", () => {
            goToElement("previous"); // Ga naar de vorige afbeelding
        });
  
        nextButton.addEventListener("click", () => {
            goToElement("next"); // Ga naar de volgende afbeelding
        });
    }
  
    // Initialiseer de carousel
    iniStartPosition(); // Zet de startpositie
    iniLinkButtons(); // Activeer de knoppen
  }
  
  // Carrousel activeren bij pagina-laden
  document.addEventListener("DOMContentLoaded", () => {
    createCaroCarrousel2();
  });


  // automatische verandering van carousel bron: Chatgpt prompt: hoe zorg ik ervoor dat mijn afbeeldingen automatisch naar de volgende afbeelding gaan en het een autoplay creeërt. 

  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel2 img");
    let currentIndex = 0;

    const changeImage = () => {
        // Verwijder de 'actief' klasse van de huidige afbeelding
        images[currentIndex].classList.remove("actief");

        // Bepaal de index van de volgende afbeelding
        currentIndex = (currentIndex + 1) % images.length;

        // Voeg de 'actief' klasse toe aan de nieuwe afbeelding
        images[currentIndex].classList.add("actief");
    };

    // Zet een interval voor het veranderen van de afbeelding
    setInterval(changeImage, 4000); // Elke 4 seconden
});


// Geluid afspelen bij klik op de button // bron: vorig project van programmeren toen deze bron gebruikt: https://youtu.be/3xlws5og44U?feature=shared

const buttonGeluid = document.getElementById("geluid");

function geluidAfspelen (){
  const audio = new Audio ("olifant.mp3"); // bron voor geluid blijdorp.nl 
  audio.play();
}

buttonGeluid.addEventListener("click", geluidAfspelen);




// Tekst vergroten button //

const body = document.body;
const tekstvergrotenButton = document.querySelector("button.tekstgroter")

function tekstGroter () {
  body.classList.toggle("tekstgroot");
  if (tekstvergrotenButton.textContent == "Tekst groter maken") {
      tekstvergrotenButton.textContent = "Tekst kleiner maken";

  } else {
      tekstvergrotenButton.textContent = "Tekst groter maken";
  }
}

tekstvergrotenButton.addEventListener("click", tekstGroter);


// const sneeuwKnop = document.getElementById("sneeuwknop");
// const sneeuwOverlay = document.getElementById("sneeuw-overlay");

// sneeuwKnop.addEventListener("click", () => {
//   // Toggle de 'verborgen' klasse
//   sneeuwOverlay.classList.toggle("verborgen");

//   // Verander de tekst van de knop
//   if (sneeuwOverlay.classList.contains("verborgen")) {
//     sneeuwKnop.textContent = "Laat het sneeuwen";
//   } else {
//     sneeuwKnop.textContent = "Stop sneeuw";
//   }
// });













  



