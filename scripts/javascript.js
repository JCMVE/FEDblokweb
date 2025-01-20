
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

  // sneeuwknop // 

  const sneeuwKnop = document.getElementById("sneeuwknop");
  const sneeuwBreedte = document.getElementById("sneeuwbreedte");

sneeuwKnop.addEventListener("click", () => {
  // Toggle de 'verborgen' klasse
sneeuwBreedte.classList.toggle("verborgen");
});