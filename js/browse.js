$(".slick-slider").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2200,
  dots: false,
  arrows: false,
});

let spans = document.querySelectorAll(".spanPagi");
spans.forEach((e) => {
  e.addEventListener("click", () => {
    spans.forEach((e) => {
      e.classList.remove("activePagi");
    });
    e.classList.add("activePagi");
  });
});
