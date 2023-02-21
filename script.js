
let myLibrary = [
  {
    name: "Harry Potter",
    author: "J.K Rolling",
    pages: 345,
    didRead: true,
    id: 1,
  },
  {
    name: "River Port",
    author: "Sussan Scope",
    pages: 312,
    didRead: false,
    id: 2,
  },
  {
    name: "Dream Killer Fort",
    author: "Adam Jam",
    pages: 237,
    didRead: true,
    id: 3,
  },
  {
    name: "Harry Potter",
    author: "J.K Rolling",
    pages: 345,
    didRead: true,
    id: 4,
  },
];

let dataKey = 4;

function cardCreator(name, author, pages, id) {
  let grid = document.querySelector(".books-grid");

  let bookCardWrap = document.createElement("div");
  bookCardWrap.classList.add("book-card-wraper");
  bookCardWrap.setAttribute("data-key", id);

  let bookName = document.createElement("h1");
  bookName.innerText = name;

  let bookAuthor = document.createElement("p");
  bookAuthor.innerText = `By: ${author}`;

  let bookpages = document.createElement("p");
  bookpages.innerText = `${pages} Pages`;

  let deleteButton = document.createElement('button')
  deleteButton.classList.add('delete-button')
  deleteButton.innerText = 'delete'

  bookCardWrap.append(bookName, bookAuthor, bookpages, deleteButton);
  grid.append(bookCardWrap);
}

function renderLibrary() {
  myLibrary.forEach((item) => {
    cardCreator(item.name, item.author, item.pages, item.id);
  });
}


// Book constructor
class book {
  constructor(name, author, pages, didRead, id) {
    this.name = name
    this.author = author
    this.pages = pages
    this.didRead = didRead
    this.id = id;
  }
    
}

function addBookToLibrary(e) {
  e.preventDefault();
  
  dataKey++;
  
  let nameInput = document.querySelector("#book-name-input").value;
  let authorInput = document.querySelector("#author-name-input").value;
  let pagesInput = document.querySelector("#num-pages").value;

  let newBook = new book(nameInput, authorInput, pagesInput, true, dataKey);
  myLibrary.push(newBook);

  cardCreator(nameInput, authorInput, pagesInput, dataKey);
}

function deleteBook(e) {
  // updates library
  for(i = 0; i <= myLibrary.length + 1; i++) {
    if (myLibrary[i].id == e.target.parentElement.getAttribute('data-key')) {
      myLibrary.splice(i, i+1)
      break
    }
  }
  // delets book card
  let bookToDelete = e.target.parentElement
  bookToDelete.remove()

}

renderLibrary();


let addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addBookToLibrary);

let deleteButton = document.querySelectorAll(".delete-button");
deleteButton.forEach( () => {
  addEventListener("click", deleteBook);
})


