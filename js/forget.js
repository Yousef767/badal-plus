let passwordInput = document.getElementById('password');
let passwordInput2 = document.getElementById('password2');
let showIcon = document.getElementById('e1');
let hideIcon = document.getElementById('e2');
let showIcon2 = document.getElementById('e3');
let hideIcon2 = document.getElementById('e4');
let passwordLabel = document.getElementById('passLabel');
let passwordLabel2 = document.getElementById('passLabel2');

passwordInput.addEventListener('focus',()=>{
  passwordLabel.classList.add('labelEffect');
});

passwordInput.addEventListener('blur',()=>{
  passwordLabel.classList.remove('labelEffect');
});

passwordInput2.addEventListener('focus',()=>{
  passwordLabel2.classList.add('labelEffect');
});

passwordInput2.addEventListener('blur',()=>{
  passwordLabel2.classList.remove('labelEffect');
});

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

showIcon2.addEventListener('click',()=>{
  passwordInput2.setAttribute('type','text');
  passwordInput2.focus();
  hideIcon2.style.display='block';
  showIcon2.style.display='none';
});

hideIcon2.addEventListener('click',()=>{
  passwordInput2.setAttribute('type','password');
  passwordInput2.focus();
  showIcon2.style.display='block';
  hideIcon2.style.display='none';
});