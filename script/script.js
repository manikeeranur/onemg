let downAngle = document.getElementsByClassName("heading_toggle");
let i;

for (i = 0; i < downAngle.length; i++) {
  downAngle[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let Acccontent = this.nextElementSibling;
    if (Acccontent.style.display === "block") {
      Acccontent.style.display = "none";
    } else {
      Acccontent.style.display = "block";
    }
  });
}

$("#owl-carousel,#extraSavings-carousel,#AC-owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  items: 3,
});
