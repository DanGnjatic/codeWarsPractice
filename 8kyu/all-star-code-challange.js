function strCount(str, letter){  
    let number = 0
    for(let i = 1; i < str.length; i++){
      
      if(str[i].includes(letter)){
        
        number+= 1
        
      }
    }
    return number
  }