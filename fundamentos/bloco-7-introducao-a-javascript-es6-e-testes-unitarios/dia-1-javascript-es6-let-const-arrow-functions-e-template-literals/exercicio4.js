const countingWords = word => {
    let count = 'a'
    let phrases = word.split(' ')
    if (phrases.length > 0){
           for (let index = 0; index <= phrases.length - 1; index+=1){
            if (phrases[index].length > count.length){
            count = phrases[index]
            }
            
        }
        return count 
    }
    
  }


    
    

console.log(countingWords(`rodrigo paz alves lima`))
