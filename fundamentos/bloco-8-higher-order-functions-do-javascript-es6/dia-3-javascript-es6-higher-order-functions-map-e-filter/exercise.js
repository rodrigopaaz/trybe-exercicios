const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  //requisito 1
/* const expectedResult = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)
console.log(expectedResult); */

//requisito 2

/* function nameAndAge(array) {
    const result = array.map((element) => {
    const requisito = {
    age: element.releaseYear - element.author.birthYear,
    nome: element.author.name,
    }
    return requisito
    }
    )
    return result
}

   const ordered = (nameAndAge(books).sort((a,b) => a.age - b.age)) 
  console.log(ordered); */

  //requisito 3

  /* const expectedResult = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
  ];
  
  function fantasyOrScienceFiction(array) {
   const generos = array.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
   return generos
  }  

  console.log(fantasyOrScienceFiction(books)); */

  //requisito 4

/*   const expectedResult = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
  
  function oldBooksOrdered(array) {
    const lancamento = array.filter((element) => element.releaseYear <= 1954)
    .sort((a,b) => a.releaseYear - b.releaseYear)
    return lancamento   
  }

console.log(oldBooksOrdered(books));
 */

//requisito 5
/* function fantasyOrScienceFictionAuthors(array) {
    const generos = array.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
    .map((element) => element.author.name).sort()
    return generos
   }  
 
   console.log(fantasyOrScienceFictionAuthors(books)); */

/*    //requisito 6

    function oldBooks() {
    const booksOld = new Date().getFullYear();
    return books
      .filter((element) => booksOld - element.releaseYear > 60)
      .map((element) => element.name);
  }
  console.log(oldBooks(books)); */

const expectedResult = false;

// requisito 7
const authorNames = books.find((book) => (book.author.name.split(' ').filter((palavra) => palavra.endsWith('.')).length === 3)).name;


console.log(authorNames);
