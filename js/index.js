const body = document.body;
const inputRange = document.getElementById('range');

inputRange.addEventListener('input', ()=> {
  
  const value = inputRange.value;
  const percentage = (value / inputRange.max) * 100;
  const linearGradient = `linear-gradient(90deg, var(--primary) ${percentage}%, rgba(48, 127, 226, 0.3) ${percentage}%)`;
  
  inputRange.style.background = linearGradient;

  if(value == 1) {
    body.style.backgroundColor = '#221F32';
  } else if (value == 2) {
    body.style.backgroundColor = '#322F46';
  } else if(value == 3) {
    body.style.backgroundColor = '#443F72';
  } else {
    body.style.backgroundColor = '#0F0E17';
      }
})

 

