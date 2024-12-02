// JavaScript Document

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

  var eersteStreepjesButton = document.querySelector("Button");
eersteStreepjesButton.onclick = eersteStreepjesButtonKlik;
function eersteStreepjesButtonKlik() {
  if (eersteStreepjesButton.ariaExpanded == "false") {
    eersteStreepjesButton.ariaExpanded = "true"
  }
  else {
    eersteStreepjesButton.ariaExpanded = "false"
  }
}

  