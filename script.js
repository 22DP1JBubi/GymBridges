let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.querySelectorAll('.dot');
showSlides();

function showSlides() {
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
  slideIndex += n;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// const areas = document.querySelectorAll('area');

// // const muscles = document.querySelectorAll('path');

// const muscles = document.querySelectorAll('.muscle');


// const bodyImage = document.getElementById('body-image');
// const muscleAreas = document.querySelectorAll('area');

// muscleAreas.forEach(area => {
//   area.addEventListener('mouseover', () => {
//     bodyImage.style.filter = 'brightness(1.5)'; // Изменяем яркость изображения
//   });

//   area.addEventListener('mouseout', () => {
//     bodyImage.style.filter = ''; // Возвращаем обычную яркость
//   });
// });

// Получаем ссылку на область (area) и изображение (img)
// const area = document.querySelector("area");
// const bodyImage = document.getElementById("body-image");

// // Добавляем обработчики событий для подсветки области при наведении
// area.addEventListener("mouseenter", () => {
//   bodyImage.classList.add("area-highlighted");
// });

// area.addEventListener("mouseleave", () => {
//   bodyImage.classList.remove("area-highlighted");
// });





