let links = document.querySelectorAll(".main li");

links.forEach((a) => {
  a.addEventListener("click", () => {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    a.classList.add("active");
  });
});

let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("activeNav");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav.classList.add("bac");
  } else {
    nav.classList.remove("bac");
  }
});

let i = document.querySelectorAll(".i");
i.forEach((a) => {
  a.addEventListener("click", () => {
    i.forEach((e) => {
      e.classList.remove("yellow");
    });
    a.classList.add("yellow");
  });
});


let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');

d1.addEventListener('click',()=>{
  d1.classList.toggle('showDrop');
  d2.classList.remove('showDrop');
  d3.classList.remove('showDrop');
  d4.classList.remove('showDrop');
});

d2.addEventListener('click',()=>{
  d2.classList.toggle('showDrop');
  d1.classList.remove('showDrop');
  d3.classList.remove('showDrop');
  d4.classList.remove('showDrop');
});

d3.addEventListener('click',()=>{
  d3.classList.toggle('showDrop');
  d1.classList.remove('showDrop');
  d2.classList.remove('showDrop');
  d4.classList.remove('showDrop');
});


d4.addEventListener('click',()=>{
  d4.classList.toggle('showDrop');
  d3.classList.remove('showDrop');
  d2.classList.remove('showDrop');
  d1.classList.remove('showDrop');
});



