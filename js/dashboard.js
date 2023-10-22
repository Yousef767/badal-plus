let dasLinks = document.querySelectorAll('.dashLinks li a');

dasLinks.forEach((e) => {
  e.addEventListener("click", () => {
    dasLinks.forEach((e) => {
      e.classList.remove("activeLink");
    });
    e.classList.add("activeLink");
  });
});
