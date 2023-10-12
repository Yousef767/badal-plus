let rtl = document.querySelectorAll('.rtl');
let tar = document.querySelectorAll('.tar');
let translateTrigger = document.getElementById('translate');

translateTrigger.addEventListener('click',()=>{
  translateTrigger.classList.toggle('translate');
  if(translateTrigger.classList.contains('translate')){
    translateTrigger.innerHTML=`
    <a href="##"><img src="./media/uk.png" alt="">English</a>
    `;
    translateOn();
  }else{
    translateTrigger.innerHTML=`
    <a href="##"><img src="./media/eg.png" alt="">العربية</a>
    `;
    translateOff();
  }
})

function translateOn(){
  rtl.forEach(e=>{
    e.setAttribute('dir','rtl');
  })
  tar.forEach(e=>{
    e.style.textAlign='right';
  })
}

function translateOff(){
  rtl.forEach(e=>{
    e.removeAttribute('dir');
  })
  tar.forEach(e=>{
    e.style.textAlign='left';
  })
}