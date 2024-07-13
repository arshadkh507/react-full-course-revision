const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(3);

// ! Object Destructuring
const { title, author, genres } = book;

// console.log(title, author, genres);

// ! Array Destructuring

// const primaryGenre = genres[0];
// console.log(primaryGenre);

// const [primaryGenre, secondaryGenre] = genres;

// console.log(primaryGenre, secondaryGenre);

// ! Rest Operator (...)
// We can only place it at the end in destructuring operations

const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenre);

// ! Spread Operator

const newGenres = [...genres, "opic fantasy"];

// newGenres;

// Adding a new propery and Overriding an existing Property
const updatedBook = { ...book, moviePublicationDate: "2001-12-19", pages: 210 };

// updatedBook;

// * Template Literals
// * Ternary Operator

// ! Arrow Function

const publicationDate = "2001-12-19";

// function getYear(str) {    // Function Declaration
//   return str.split("-")[0];
// }

// console.log(getYear(publicationDate));

const getYear = (str) => str.split("-")[0]; // Function Expression

// console.log(getYear(publicationDate));

// ! Short Circuit Operator

// console.log(0 && "Arshad");
// console.log(true || "Arshad");
// console.log("khan" || "Arshad");
// console.log("" || "Arshad");
// console.log(undefined || "Arshad");
// console.log(false || "Arshad");
// console.log(null || "Arshad");

// const spanishTranslation = book.translations.spanish || "Not Translated";

// console.log(spanishTranslation);

// const countWrong = book.reviews.librarything.reviewsCount || "No Data";
// countWrong;

// ! Nullish coalescing Operator (??)
// it will return Second value when the first value is null or undefined but not zero or empty string
// const count = book.reviews.librarything.reviewsCount ?? "No Data";
// count;

// ! Optional Chaining (?.)

// * JavaScript will only read "reviewsCount" when "librarything" is not null or undefined librarything?.reviewsCount
const librarything = book.reviews.librarything?.reviewsCount ?? 0;

// librarything;

// ! map() Method
// * It loop over an array and return new array with applied operation on each item of the  array
// * it work on Callback function
const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// titles;

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));

// essentialData;

// ! filter() Array Method
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
// longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
// adventureBooks;

// ! reduce() Array Method

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// here the sum: accumulator  is basically is the current value of the final value
pagesAllBooks;

//! sort() Method
// * a -b is Ascending
// * a -b is Descending
// It muted the array , then we take the copy of the array to not happen mutating array
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => b - a);
sorted;
arr;

// ! Immutable Array

// * Add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];

// Delete an object from array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// Update the book object in the array

const booksAfterUpdate = booksAfterAdd.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);

// booksAfterUpdate;

// ! Fetch Data From API (Asyncronous javscript) , Promesis

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data?.[0])); // Promise
console.log("arsad");

// Async await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  // console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);
