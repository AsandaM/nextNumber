//next number 
let input = document.querySelector('input')
let button = document.querySelector('button')
let output = document.querySelectorAll('p')[1]


let nextN = () => {
    let i = -1;
    let next = input.value.split(',').map(Number)
    
    nextN = () => {
      i++;
      return next[i];
    }
    
    return nextN();
  }

  function x() {
    
    output.innerText = nextN()
  }


  button.addEventListener('click', x)

  