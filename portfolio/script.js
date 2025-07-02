function previewCV(input) {
  const file = input.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    document.getElementById('cvFrame').src = url;
    document.getElementById('cvModal').style.display = 'block';
  }
}

function closeModal() {
  document.getElementById('cvModal').style.display = 'none';
}

// slider script (optional from your earlier projects.html)
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}
document.querySelector(".prev")?.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
document.querySelector(".next")?.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
showSlide(currentSlide);
