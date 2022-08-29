let myLibrary = [
  {
    name: "Harry Potter",
    author: "J.K Rolling",
    pages: 345,
    didRead: true,
  },
  {
    name: "Harry Potter",
    author: "J.K Rolling",
    pages: 345,
    didRead: true,
  },
  {
    name: "Harry Potter",
    author: "J.K Rolling",
    pages: 345,
    didRead: true,
  },
  {
    name: "Harry Potter",
    author: "J.K Rolling",
    pages: 345,
    didRead: true,
  },
];

function renderLibrary() {
  let grid = document.querySelector(".books-grid");

  myLibrary.forEach((item) => {
    let bookCardWrap = document.createElement("div");
    bookCardWrap.classList.add("book-card-wraper");

    let bookName = document.createElement("h1");
    bookName.innerText = item.name;

    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = `By: ${item.author}`;

    let bookpages = document.createElement("p");
    bookpages.innerText = `${item.pages} Pages`;

    bookCardWrap.append(bookName, bookAuthor, bookpages);
    grid.append(bookCardWrap);
  });
}

// Book constructor
function Book(name, author, pages) {
  (this.name = name), (this.author = author), (this.pages = pages);
}

function addBookToLibrary() {
  let nameInput = document.querySelector("#book-name-input").value;
  let authorInput = document.querySelector("#author-name-input").value;
  let pagesInput = document.querySelector("#num-pages").value;

  let newBook = new book(nameInput, authorInput, pagesInput);
  myLibrary.push(newBook);
  renderLibrary();
}

renderLibrary();

let addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addBookToLibrary);
