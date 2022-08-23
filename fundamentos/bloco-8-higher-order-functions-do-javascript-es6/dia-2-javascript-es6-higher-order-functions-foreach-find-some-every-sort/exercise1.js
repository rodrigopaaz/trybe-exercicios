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

  const birthDate = books.find((nascimento) => nascimento.author.birthYear === 1947);
  console.log(birthDate);


// requisito 2
function smallerName(array) {
    let nameBook = array[0].name;
    // escreva aqui o seu código
    array.forEach(element => {
      if (element.name.length<= nameBook.length) {
        nameBook = element.name;
      }
    });

    return nameBook;
  }
  console.log(smallerName(books));  

// requisito 3

 
  function getNamedBook(array) {
    let nameBook = array[0];
    // escreva aqui o seu código
    array.find(element => { array.length >= 26

    });

    return nameBook;
  }
   console.log(getNamedBook(books));

// requisito 4   

  function booksOrderedByReleaseYearDesc(array) {
    array.sort((a, b) => a.releaseYear - b.releaseYear);
  }

booksOrderedByReleaseYearDesc(books);
console.log(books);

// requisito 5

const expectedResult = false;

function everyoneWasBornOnSecXX(array) {
    return array.every((element) => element.author.birthYear >= 1900 && element.author.birthYear < 2000);
  }

  console.log(everyoneWasBornOnSecXX(books));

  // requisito 6
function someBookWasReleaseOnThe80s(arr) {
    // escreva seu código aqui
    return arr.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990);
  }
  //console.log(someBookWasReleaseOnThe80s(books));
  
  // requsito 7
  function authorUnique(arr) {
    // escreva seu código aqui
    return arr.every((book) => !arr.some((element) => (element.author.birthYear === book.author.birthYear) && (element.author.name !== book.author.name)));
  }
  console.log(authorUnique(books));


  