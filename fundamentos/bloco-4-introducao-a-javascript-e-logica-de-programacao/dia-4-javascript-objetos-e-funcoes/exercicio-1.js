/* 
 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    
  }; */

//exercicio-1

//    console.log('Bem vinda', info.personagem)

//exercicio-2

//info.recorrente = 'Sim'
//console.table(info);

/* //exercicio-3

for (let index in info) {
    console.log(index)
} */

/* //exercicio-4

for (let index in info) {
    console.log(info[index])
}
 */

//exercicios-5

/* let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'PatoPato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Ambos Recorrentes'
  };
        for (let index in info) {
          console.log(info[index] + " e " + info2[index])
          console.log(info2.recorrente)
        } */

/* //exercicio-6   
        let leitor = {
            nome: 'Julia',
            sobrenome: 'Pessoa',
            idade: 21,
            livrosFavoritos: [
              {
                titulo: 'O Pior Dia de Todos',
                autor: 'Daniela Kopsch',
                editora: 'Tordesilhas',
              },
            ],
            };
        console.log ('O livro favorito de ', leitor.nome, leitor.sobrenome, 'se chama', '"',leitor.livrosFavoritos[0].titulo, '"')

        //exercicio-7

        leitor.livrosFavoritos[1] =  {titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco'}

            //exercicio-8

        console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos')

         */

/*       //exercicio-9

        function palindromo(word){
            let contra = word.split('').reverse().join('');
           if (word !== contra) {
                return false;
                }
            return true;    
        }
        console.log(palindromo('arara')) 
        console.log(palindromo('desenvolvimento')) 
    */

//exercicio-10

/* function integers(array) {
  let j = 0;
  for (let index in array) {
    if (array[index] > j) {
        j = index;
        }
    }
return j;
}
console.log(integers([2, 3, 6, 7, 10, 1]));
 */

//exercicio-11

/*  function integers(array) {
  let j = 0;
  for (let index in array) {
    if (array[index] < j) {
        j = index;
        }
    }
return j;
}
console.log(integers([2, 4, 6, 7, 10, 0, -3])); */


