// ===========================
// INTERACTIVE EVENT BOOKING
// Enhanced JavaScript
// ===========================

// DOM Elements
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");
const bookButtons = document.querySelectorAll(".book-btn");
const bookingForm = document.getElementById("bookingForm");
const contactForm = document.getElementById("contactForm");
const searchInput = document.getElementById("searchInput");
const eventCards = document.querySelectorAll(".event-card");
const successMessage = document.getElementById("successMessage");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// ===== MODAL FUNCTIONALITY =====

// Open modal on book button click with animation
bookButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    modal.offsetHeight; // Trigger reflow for animation
  });
});

// Close modal on X click
closeBtn.addEventListener("click", () => {
  closeModal();
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal function
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  bookingForm.reset();
  successMessage.style.display = "none";
}

// Handle booking form submission
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tickets = document.getElementById("tickets").value;

  // Show success message with animation
  successMessage.style.display = "block";

  // Hide form
  bookingForm.style.display = "none";

  // Simulate form submission
  console.log("Booking Details:", { name, email, tickets });

  // Reset after 2 seconds
  setTimeout(() => {
    bookingForm.style.display = "block";
    successMessage.style.display = "none";
    closeModal();
  }, 2000);
});

// ===== SEARCH FUNCTIONALITY =====

searchInput.addEventListener("keyup", (e) => {
  const query = e.target.value.toLowerCase();

  eventCards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase();
    const category = card.getAttribute("data-category").toLowerCase();
    const text = card.textContent.toLowerCase();

    if (
      name.includes(query) ||
      category.includes(query) ||
      text.includes(query)
    ) {
      card.style.display = "block";
      // Add animation on show
      card.style.animation = "fadeInUp 0.4s ease";
    } else {
      card.style.display = "none";
    }
  });
});

// ===== HAMBURGER MENU =====

hamburger.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "flex" ? "none" : "flex";
  navMenu.style.position = "absolute";
  navMenu.style.top = "70px";
  navMenu.style.left = "20px";
  navMenu.style.flexDirection = "column";
  navMenu.style.gap = "15px";
  navMenu.style.background = "white";
  navMenu.style.padding = "20px";
  navMenu.style.borderRadius = "10px";
  navMenu.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
  navMenu.style.zIndex = "999";
});

// Close menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navMenu.style.display = "none";
    }
  });
});

// ===== CONTACT FORM =====

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  console.log("Contact Form Submitted:", Object.fromEntries(formData));

  // Visual feedback
  const submitBtn = contactForm.querySelector("button");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Message Sent!";
  submitBtn.style.background =
    "linear-gradient(135deg, #06d6a0, #26a65b)";

  setTimeout(() => {
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.style.background = "linear-gradient(135deg, #ff006e, #8338ec)";
  }, 2000);
});

// ===== SCROLL ANIMATIONS =====

const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all event cards for scroll animation
eventCards.forEach((card) => {
  observer.observe(card);
});

// Observe about cards
const aboutCards = document.querySelectorAll(".about-card");
aboutCards.forEach((card) => {
  observer.observe(card);
});

// ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== DYNAMIC PARTICLE EFFECT =====

function createParticles(event) {
  const button = event.target;
  const rect = button.getBoundingClientRect();

  for (let i = 0; i < 5; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.left = rect.left + rect.width / 2 + "px";
    particle.style.top = rect.top + rect.height / 2 + "px";
    particle.style.width = "10px";
    particle.style.height = "10px";
    particle.style.background = "linear-gradient(135deg, #ff006e, #8338ec)";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "9999";

    const angle = (Math.PI * 2 * i) / 5;
    const velocity = 5;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.height / 2;
    let opacity = 1;

    document.body.appendChild(particle);

    const animate = () => {
      x += vx;
      y += vy;
      opacity -= 0.02;

      particle.style.left = x + "px";
      particle.style.top = y + "px";
      particle.style.opacity = opacity;

      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };

    animate();
  }
}

// Add particle effect to buttons
document.querySelectorAll(".btn, .book-btn").forEach((btn) => {
  btn.addEventListener("click", createParticles);
});

// ===== PARALLAX EFFECT =====

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".hero-particles");

  parallaxElements.forEach((element) => {
    element.style.transform = `translateY(${scrollTop * 0.5}px)`;
  });
});

// ===== THEME CUSTOMIZATION =====

// Add ripple effect on click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn") || e.target.classList.contains("book-btn")) {
    const ripple = document.createElement("span");
    const rect = e.target.getBoundingClientRect();

    ripple.style.position = "absolute";
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.background = "rgba(255, 255, 255, 0.7)";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.animation = "ripple-animation 0.6s ease-out";

    e.target.style.position = "relative";
    e.target.style.overflow = "hidden";
    e.target.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }
});

// Add ripple animation to stylesheet dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===== KEYBOARD SHORTCUTS =====

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// ===== SCROLL TO TOP BUTTON =====

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = "scroll-to-top";
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff006e, #8338ec);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 999;
  box-shadow: 0 5px 20px rgba(255, 0, 110, 0.4);
  transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollToTopBtn.addEventListener("mouseover", () => {
  scrollToTopBtn.style.transform = "scale(1.1) rotate(10deg)";
});

scrollToTopBtn.addEventListener("mouseout", () => {
  scrollToTopBtn.style.transform = "scale(1) rotate(0deg)";
});

// ===== PAGE LOAD ANIMATION =====

window.addEventListener("load", () => {
  document.body.style.animation = "fadeIn 0.6s ease";

  // Animate elements on page load
  const elementsToAnimate = document.querySelectorAll(
    ".event-card, .about-card, .nav-link"
  );
  elementsToAnimate.forEach((el, index) => {
    setTimeout(() => {
      el.style.animation = "fadeInUp 0.6s ease forwards";
    }, index * 100);
  });
});

// ===== UTILITY: SHOW ALERT WITH CUSTOM STYLE =====

function showCustomAlert(message, type = "success") {
  const alert = document.createElement("div");
  alert.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 20px 30px;
    background: ${type === "success" ? "#06d6a0" : "#ff6b6b"};
    color: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    animation: slideInRight 0.4s ease;
    font-weight: 600;
  `;
  alert.textContent = message;
  document.body.appendChild(alert);

  setTimeout(() => {
    alert.style.animation = "slideOutRight 0.4s ease";
    setTimeout(() => alert.remove(), 400);
  }, 3000);
}

// ===== LOG INITIAL STATE =====

console.log(
  "%cEventEase Booking System Loaded! 🎉",
  "color: #ff006e; font-size: 16px; font-weight: bold;"
);
console.log(
  "%cEnjoy the smooth animations and interactive features!",
  "color: #8338ec; font-size: 14px;"
);
