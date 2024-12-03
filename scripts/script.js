
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

  // hamburgermenu

// Selecteer de elementen
const button = document.querySelector('nav button');
const menu = document.querySelector('nav ul');

// Voeg een klik-event toe aan de button
button.addEventListener('click', () => {
    // Toggle de aria-expanded waarde
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle de 'active' class op het menu
    menu.classList.toggle('active');
});

// Carousel





  



