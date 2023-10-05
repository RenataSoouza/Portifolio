// Scroll

const sextions= document.querySelectorAll("section[id]")

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
      document.querySelector(".menu-R a[href*=" + sectionId + "]").classList.add("active-link")
    } else{
      document.querySelector(".menu-R a[href*=" + sectionId +"]").classList.remove("active-link")
    }
  })
}

window.addEventListener("scroll", scrollActive);

// Swiper Slide
var swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
});