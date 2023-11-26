let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.querySelectorAll('.dot');

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 10000); // Меняйте изображение каждые 10 секунд
  }

  function changeSlide(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n - 1));
  }