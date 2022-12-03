/* //requisito 1
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
const flatten = arrays.reduce((acc, curr) => `${acc},${curr}`).split(' ');


  console.log(flatten); */

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
//requisito 2

/*   const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

  function reduceNames(array) {
    return array.map((element)=> element.author.name)
    .reduce((acc,curr) => acc +' , ' + curr)}

  console.log(reduceNames(books)); */

//requisito 3
/* 
  const expectedResult = 43;


    function averageAge(array) {
        const media = (array.map((element)=> element.releaseYear - element.author.birthYear)
        .reduce((acc,curr,index) => acc + curr,0))
        return media / array.length

    }
    
      console.log(averageAge(books)); */

//requisito 4
/*       const expectedResult = {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
          name: 'George R. R. Martin',
          birthYear: 1948,
        },
        releaseYear: 1991,
      };
      
      function longestNamedBook(array) {
        const biggestName = array.reduce((acc, curr)=> {
            if (acc.name.length > curr.name.length){
                return acc
            }
        })
        return biggestName
      }

      console.log(longestNamedBook(books));  */

/*       //requisito 5

      const names = [
        'Aanemarie', 'Adervandes', 'Akifusa',
        'Abegildo', 'Adicellia', 'Aladonata',
        'Abeladerco', 'Adieidy', 'Alarucha',
      ];
      
      function containsA(array) {
        const repeat = array.reduce((arr,curr) => arr + curr).toLowerCase().split('')
        .filter((element)=> element === 'a').length
        return repeat
      }

      console.log(containsA(names)); */

//requisito 6

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  return (nameAndAverage = students.map((student, index) => ({
    name: student,
    average:
      grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  })));
}
console.log(studentAverage(students));

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];
