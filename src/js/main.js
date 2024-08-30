const fibonacci = (f) => {
    const f0 = 0
    const f1 = 1
    let x = f0
    let y = f0 + f1
    
      for (let i = 1; i < f; i++) {
        y += x
        x = y - x
      };  
    
    console.log(y)
  }
  
  fibonacci(7)