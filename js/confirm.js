let input1 = document.getElementById('i1');
let input2 = document.getElementById('i2');
let input3 = document.getElementById('i3');
let input4 = document.getElementById('i4');
let input5 = document.getElementById('i5');
let input6 = document.getElementById('i6');

input1.focus();

input1.addEventListener('input',()=>{
  let input1Value = input1.value;
  if(input1Value.length == 0){
    input1.focus();
  }else if(input1Value.length == 1){
    input2.focus();
  }
  else if(input1Value.length > 1){
    input1.value = input1Value[0];
  }
});


input2.addEventListener('input',()=>{
  let input2Value = input2.value;
  if(input2Value.length == 0){
    input2.focus();
  }else if(input2Value.length == 1){
    input3.focus();
  }
  else if(input2Value.length > 1){
    input2.value = input2Value[0];
  }
});
input3.addEventListener('input',()=>{
  let input3Value = input3.value;
  if(input3Value.length == 0){
    input3.focus();
  }else if(input3Value.length == 1){
    input4.focus();
  }
  else if(input3Value.length > 1){
    input3.value = input3Value[0];
  }
});

input4.addEventListener('input',()=>{
  let input4Value = input4.value;
  if(input4Value.length == 0){
    input4.focus();
  }else if(input4Value.length == 1){
    input5.focus();
  }
  else if(input4Value.length > 1){
    input4.value = input4Value[0];
  }
});

input5.addEventListener('input',()=>{
  let input5Value = input5.value;
  if(input5Value.length == 0){
    input5.focus();
  }else if(input5Value.length == 1){
    input6.focus();
  }
  else if(input5Value.length > 1){
    input5.value = input5Value[0];
  }
});

input6.addEventListener('input',()=>{
  let input6Value = input6.value;
  if(input6Value.length == 0){
    input6.focus();
  }
  else if(input6Value.length > 1){
    input6.value = input6Value[0];
  }
});


