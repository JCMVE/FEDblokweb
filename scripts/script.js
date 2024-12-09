

// hamburgermenu
const menu = document.querySelector("nav ul");
const button = document.querySelector("nav button");
  
button.onclick = toggleButton;
  
function toggleButton() {
  button.classList.toggle("open");
  menu.classList.toggle("open");
}

// tekst in beeld laten komen effect
document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".hidden"); // Selecteer alle elementen die de class "hidden" hebben
  
    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add the visible class
            observer.unobserve(entry.target); // Stop observing once the element is visible
          }
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of an element is visible
      }
    );
  
    targets.forEach((target) => observer.observe(target)); // Observe each target element
  });


// Carousel // 








// const carousel = document.querySelector('.carouselhome ul');
// const slides = document.querySelectorAll('.carouselhome li');
// const vorigeButton = document.querySelector('.carouselhome button:nth-of-type(1)');
// const volgendeButton = document.querySelector('.carouselhome button:nth-of-type(2)');
// let index = 0;

// function showSlide(newIndex) {
//   // Zorg ervoor dat de index binnen de grenzen blijft
//   if (newIndex < 0) {
//     index = slides.length - 1; // Ga naar de laatste slide
//   } else if (newIndex >= slides.length) {
//     index = 0; // Ga naar de eerste slide
//   } else {
//     index = newIndex;
//   }

//   // Verschuif de carousel
//   const offset = -index * 100; // 100% per slide
//   carousel.style.transform = `translateX(${offset}%)`;
// }

// // Event listeners voor de knoppen
// vorigeButton.addEventListener('click', () => showSlide(index - 1));
// volgendeButton.addEventListener('click', () => showSlide(index + 1));









  



