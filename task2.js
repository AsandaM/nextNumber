//next number 
let nextNumber = () => {
    let i = -1;
    let next = [1, 2, 3, 4, 5];
    
    nextNumber = () => {
      i++;
      return next[i];
    }
    
    return nextNumber();
  }
  
  console.log(nextNumber());
  console.log(nextNumber());
  console.log(nextNumber());