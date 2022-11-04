const body = document.body;
const inputRange = document.getElementById('range');

inputRange.addEventListener('input', ()=> {
  
  const value = inputRange.value;
  
  console.log(value);
  
  if(value == 1) {
    body.style.backgroundColor = '#221F32';
    inputRange.style.background = 'linear-gradient(90deg, var(--primary) 33.3%, rgba(48, 127, 226, 0.3) 33.3%)';
  } else if (value == 2) {
    body.style.backgroundColor = '#322F46';
    inputRange.style.background = 'linear-gradient(90deg, var(--primary) 66.6%, rgba(48, 127, 226, 0.3) 66.6%)';
  } else if(value == 3) {
    body.style.backgroundColor = '#443F72';
    inputRange.style.background = 'linear-gradient(90deg, var(--primary) 99.9%, rgba(48, 127, 226, 0.3) 99.9%)';
  } else {
    body.style.backgroundColor = '#0F0E17';
    inputRange.style.background = 'linear-gradient(90deg, var(--primary) 0%, rgba(48, 127, 226, 0.3) 0%)';
      }
})

 

