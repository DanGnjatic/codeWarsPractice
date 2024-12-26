function rentalCarCost(d) {
    // car price 
    // how much discount for 7 or more days
    // how much discount for 3 - 6 days
    //days renting
    
    
    
    let carPrice = 40
    
     if(d >= 7){
      
      return (d * carPrice) - 50
      
      
    }
    

     else  if (d >= 3){
      
      return (d * carPrice) - 20
    }
    
    
    else {
      
      return d * carPrice
    }
    
  }
  