// Modal handling
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");
const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("??? Booking Confirmed! Check your email for details.");
  modal.style.display = "none";
  this.reset();
});

// Search Filter
const searchInput = document.getElementById("searchInput");
const eventCards = document.querySelectorAll(".event-card");

searchInput.addEventListener("keyup", function() {
  const query = this.value.toLowerCase();
  eventCards.forEach(card => {
    const name = card.getAttribute("data-name");
    card.style.display = name.includes(query) ? "block
