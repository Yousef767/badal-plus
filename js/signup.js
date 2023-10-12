let passwordInput = document.getElementById('password');
let emailInput = document.getElementById('email');
let numberInput = document.getElementById('number');
let showIcon = document.getElementById('e1');
let hideIcon = document.getElementById('e2');
let emailLabel = document.getElementById('emailLabel');
let passwordLabel = document.getElementById('passLabel');
let numberLabel = document.getElementById('numberLabel');

showIcon.addEventListener('click',()=>{
  passwordInput.setAttribute('type','text');
  passwordInput.focus();
  hideIcon.style.display='block';
  showIcon.style.display='none';
});

hideIcon.addEventListener('click',()=>{
  passwordInput.setAttribute('type','password');
  passwordInput.focus();
  showIcon.style.display='block';
  hideIcon.style.display='none';
});

emailInput.addEventListener('focus',()=>{
  emailLabel.classList.add('labelEffect');
});

emailInput.addEventListener('blur',()=>{
  emailLabel.classList.remove('labelEffect');
});


passwordInput.addEventListener('focus',()=>{
  passwordLabel.classList.add('labelEffect');
});

passwordInput.addEventListener('blur',()=>{
  passwordLabel.classList.remove('labelEffect');
});

numberInput.addEventListener('focus',()=>{
  numberLabel.classList.add('labelEffect');
});

numberInput.addEventListener('blur',()=>{
  numberLabel.classList.remove('labelEffect');
});


let selectValue = document.getElementById('selectValue');
let showMenu = document.getElementById('de');
showMenu.addEventListener('click',()=>{
  showMenu.classList.toggle('showCountry')
});


let countImg = document.getElementById('countImg');
let countries = document.querySelectorAll('.listCount');
countries.forEach((e)=>{
  e.addEventListener('click',()=>{
    selectValue.setAttribute('value',e.dataset.value);
    countImg.setAttribute('src',e.src);
  });
});