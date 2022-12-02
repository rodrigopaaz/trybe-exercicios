//exercicio-1
/*
let number=1;

for (let index = 1; index < 10 ; index += 1){
    number *= index;
}
console.log(number);
*/

//exercício-2

/*let word = ('tryber');
let reverseWord = [];

for (let index=5; index >= 0; index-=1) {
    reverseWord.push(word[index])
}
console.log(reverseWord);
*/

//exercicio-3

/*let array = ['java', 'javascript', 'python', 'html', 'css'];
let counter = "";
let maiorArray= 0;
let menorArray= 0;


    for (let index=4; index>=0; index-=1) {
    counter = array[index]; 
    if(counter.length>maiorArray){
    maiorArray= counter.length}
    
    menorArray = maiorArray;
     
     for (let index=4; index>=0; index-=1){
        counter = array[index]; 
        if(counter.length < menorArray){
            menorArray = counter.length}
        } 
     } 
     console.log('A array com o maior número de Strings tem --> ',maiorArray);
     console.log('A array com o menor número de Strings tem --> ',menorArray);
   */

     //exercicio-4

     let primeNumbers = [];
     for(let index = 2; index<=50; index += 1)
     { let counter = 0;
      for (let index2 = 2; index2<=50; index2+=1)
      {
        if (index % index2 === 0) {counter +=1}
      }
      if (counter < 2) {
        primeNumbers.push(index)
      }
    }
    console.log(primeNumbers);
        