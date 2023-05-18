window.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentSlide = 0;

  function showSlide() {
    slides[currentSlide].classList.add("active");
  }

  function hideSlides() {
    slides.forEach((slide) => slide.classList.remove("active"));
  }

  function nextSlide() {
    hideSlides();
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  }

  function prevSlide() {
    hideSlides();
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
  }

  // Cambiar al siguiente slide al hacer clic en la flecha de siguiente
  nextButton.addEventListener("click", nextSlide);

  // Cambiar al slide anterior al hacer clic en la flecha de anterior
  prevButton.addEventListener("click", prevSlide);

  // Cambiar automáticamente al siguiente slide cada 3 segundos
  setInterval(nextSlide, 3000);

  showSlide();
});
