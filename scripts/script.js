

// hamburgermenu bron: https://codepen.io/shooft/pen/VwJXNEg 
const menu = document.querySelector("nav ul");
const button = document.querySelector("nav button");
  
button.onclick = toggleButton;
  
function toggleButton() {
  button.classList.toggle("open");
  menu.classList.toggle("open");
}

// tekst in beeld laten komen effect  bron: https://codepen.io/shooft/pen/mdBOZLz 
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

  // Carousel 1//  bron: Chatgpt en https://codepen.io/shooft/pen/yLKjzWa 
  function createLevelsCarrousel(carrouselID) {
    let carrousel = document.querySelector("#" + carrouselID);
    let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
    let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
    let linkButtons = carrousel.querySelectorAll(":scope > div a");
  
    /********** Vorige/volgende knoppen **********/
    // de links/rechts link-buttons initialiseren en activeren
    function iniLinkButtons() {
      for (let linkButton of linkButtons) {
        // Beide link-buttons laten luisteren naar kliks
        linkButton.addEventListener("click", function (e) {
          // Als er geklikt wordt
          // de default-actie (de link volgen) niet uitvoeren
          e.preventDefault();
  
          // Bepalen of er op 'vorige' of 'volgende' geklikt is
          let direction = this.getAttribute("href");
          // Naar het element gaan
          goToElement(direction);
        });
      }
    }
  
    /********** START POSITIE **********/
    function iniStartPosition() {
      // Het eerste element en bolletje actief maken
      carrouselElements[0].classList.add("current"); // Eerste element current maken
      carrouselElementsContainer.scrollLeft = 0; // Aan het begin van de container starten
    }
  
    /********** ALGEMENE FUNCTIES **********/
    //////////////////////////////////
    // Naar volgende/vorige element //
    function goToElement(direction) {
      let currentElement = carrousel.querySelector(":scope > ul > .current"); // Het huidige current element opzoeken
      let newElement;
      if (direction === "vorige") {
        newElement = currentElement.previousElementSibling; // Het nieuwe element is het vorige broertje/zusje
        if (!newElement) {
          newElement = carrousel.querySelector(":scope > ul > li:last-of-type"); // Checken of nieuwe element bestaat - anders naar laatste
        }
      } else {
        newElement = currentElement.nextElementSibling; // Het nieuwe element is het volgende broertje/zusje
        if (!newElement) {
          newElement = carrousel.querySelector(":scope > ul > li:first-of-type"); // Checken of nieuwe element bestaat - anders naar eerste
        }
      }
      scrollToElement(newElement); // Naar het nieuwe element scrollen
    }
  
    ///////////////////////////
    // Scroll naar nieuw element //
    function scrollToElement(newElement) {
      let newElementOffset = newElement.offsetLeft; // De linker offset van het nieuwe element bepalen
  
      carrouselElementsContainer.scrollTo({
        left: newElementOffset, // De carrousel naar de berekende positie scrollen
        behavior: "smooth",
      });
  
      updateCurrentElement(newElement); // Nieuwe element current element maken
    }
  
    ////////////////////////////
    // Update current element //
    function updateCurrentElement(newElement) {
      let currentElement = carrousel.querySelector(":scope > ul > .current"); // Het huidige current element opzoeken
      currentElement.classList.remove("current"); // De class current verwijderen
      newElement.classList.add("current"); // Aan nieuwe element de class current toevoegen
    }
  
    /********** INITIALISATIE **********/
    iniLinkButtons(); // De knoppen initialiseren
    iniStartPosition(); // De startpositie instellen
  }
  
  /********** DE CARROUSEL CREËREN **********/
  (function () {
    // Nadat de pagina geladen is, de carrousels activeren
    createLevelsCarrousel("justButtons"); // Hier de ID gebruiken van de section in de HTML
  })();
  
  


  // Carousel 2 ook met de vorige en volgende buttons //  bron: Chatgpt en  https://codepen.io/shooft/pen/mdBOZLz 

  function createLevelsCarrousel(carrouselID2) {
    let carrousel2 = document.querySelector("#" + carrouselID2);
    let carrouselElementsContainer2 = carrousel2.querySelector(":scope > ul");
    let carrouselElements2 = carrouselElementsContainer2.querySelectorAll("li");
    let linkButtons2 = carrousel2.querySelectorAll(":scope > div:nth-of-type(1) a");
  
    /********** Vorige/volgende knoppen **********/
    // de links/rechts link-buttons initialiseren en activeren
    function iniLinkButtons2() {
      for (let linkButton2 of linkButtons2) {
        // Beide link-buttons laten luisteren naar kliks
        linkButton2.addEventListener("click", function (e) {
          // Als er geklikt wordt
          // de default-actie (de link volgen) niet uitvoeren
          e.preventDefault();
  
          // Bepalen of er op 'vorige' of 'volgende' geklikt is
          let direction = this.getAttribute("href");
          // Naar het element gaan
          goToElement2(direction);
        });
      }
    }
  
    /********** START POSITIE **********/
    function iniStartPosition2() {
      // Het eerste element en bolletje actief maken
      carrouselElements2[0].classList.add("current"); // Eerste element current maken
      carrouselElementsContainer2.scrollLeft = 0; // Aan het begin van de container starten
    }
  
    /********** ALGEMENE FUNCTIES **********/
    //////////////////////////////////
    // Naar volgende/vorige element //
    function goToElement2(direction) {
      let currentElement2 = carrousel2.querySelector(":scope > ul > .current"); // Het huidige current element opzoeken
      let newElement2;
      if (direction === "vorige") {
        newElement2 = currentElement2.previousElementSibling; // Het nieuwe element is het vorige broertje/zusje
        if (!newElement2) {
          newElement2 = carrousel2.querySelector(":scope > ul > li:last-of-type"); // Checken of nieuwe element bestaat - anders naar laatste
        }
      } else {
        newElement2 = currentElement2.nextElementSibling; // Het nieuwe element is het volgende broertje/zusje
        if (!newElement2) {
          newElement2 = carrousel2.querySelector(":scope > ul > li:first-of-type"); // Checken of nieuwe element bestaat - anders naar eerste
        }
      }
      scrollToElement2(newElement2); // Naar het nieuwe element scrollen
    }
  
    ///////////////////////////
    // Scroll naar nieuw element //
    function scrollToElement2(newElement2) {
      let newElementOffset2 = newElement2.offsetLeft; // De linker offset van het nieuwe element bepalen
  
      carrouselElementsContainer2.scrollTo({
        left: newElementOffset2, // De carrousel naar de berekende positie scrollen
        behavior: "smooth",
      });
  
      updateCurrentElement2(newElement2); // Nieuwe element current element maken
    }
  
    ////////////////////////////
    // Update current element //
    function updateCurrentElement2(newElement2) {
      let currentElement2 = carrousel2.querySelector(":scope > ul > .current"); // Het huidige current element opzoeken
      currentElement2.classList.remove("current"); // De class current verwijderen
      newElement2.classList.add("current"); // Aan nieuwe element de class current toevoegen
    }
  
    /********** INITIALISATIE **********/
    iniLinkButtons2(); // De knoppen initialiseren
    iniStartPosition2(); // De startpositie instellen
  }
  
  /********** DE CARROUSEL CREËREN **********/
  (function () {
    // Nadat de pagina geladen is, de carrousels activeren
    createLevelsCarrousel("locatie"); // Hier de ID gebruiken van de section in de HTML
  })();
  
  

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













  



