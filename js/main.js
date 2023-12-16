// IIFE for open and close the dialog

(() => {
  const updateButton = document.querySelector(".add");
  const cancelButton = document.getElementById("cancel");
  const favDialog = document.getElementById("favDialog");

  // Update button opens a modal dialog

  updateButton.addEventListener("click", () => favDialog.showModal());

  // Form cancel button closes the dialog box

  cancelButton.addEventListener("click", () => favDialog.close());
})();

// Global variables

const content = document.querySelector("#content.content");
const titleDom = document.querySelector(".book-title");
const authorDom = document.querySelector(".book-author");
const srcDom = document.querySelector(".thumbnail");
const isbnDom = document.querySelector(".book-isbn");
const pagesDom = document.querySelector(".book-pages");
const bookForm = document.querySelector("#bookForm");
const cardTemplate = `
<div class="book-card">
<div class="book-title-container">
<h3 class="book-title"></h3>
<p class="book-author"></p>
</div>
<div class="book-thumbnail-container">
<img
class="thumbnail"
src=""
class="thumbnail"
alt="book thumbnail"
/>
</div>
<div class="book-data-container">
<span class="book-isbn"></span><span class="book-pages"></span>
</div>
<div class="book-read-container">
<button id="read" type="button"></button>
<div class="book-delete-container">
<i translate="no" class="material-icons delete">delete_forever</i>
</div>
</div>
</div>
`;

let myLibrary = [];

// Create the Book constructor

function Book(title, author, isbn, src, pages, read) {
  // Properties
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.src = src;
  this.pages = pages;
  this.read = read;
}
Book.prototype.toogleRead = function () {
  this.read === true ? (this.read = false) : (this.read = true);
  return this.read;
};

// Create default books

const book1 = new Book(
  "The Name Of The Rose",
  "Umberto Eco",
  9788497592581,
  "images/name_of_the_rose.jpg",
  784,
  true
);
const book2 = new Book(
  "The Lord Of The Rings",
  "J.R.R. Tolkien",
  9780008471286,
  "images/lord_of_the_rings.jpg",
  1482,
  true
);
const book3 = new Book(
  "Great Expectations",
  "Charles Dickens",
  9780486415864,
  "images/great_expectations.jpg",
  400,
  false
);
const book4 = new Book(
  "The American Planet",
  "Vicente Verdú",
  9788433905307,
  "images/the_american_planet.jpg",
  176,
  true
);
const book5 = new Book(
  "Dramatic prophecies of the Great Pyramid",
  "Rodolfo Benavides",
  9788497592581,
  "images/dramatic_profecies.jpg",
  382,
  true
);
const book6 = new Book(
  "Eloquent Javascript",
  "Marijn Haverbeke",
  9781593279509,
  "images/eloquent_javascript.jpg",
  699,
  false
);
const book7 = new Book(
  "San Manuel Bueno Mártir",
  "Miguel de Unamuno",
  9780828825788,
  "images/san_manuel_bueno_martir.jpg",
  172,
  true
);
const book8 = new Book(
  "The Principles of Object-Oriented JavaScript",
  "Nicholas C. Zakas",
  9781593275402,
  "images/principies_oop.jpg",
  120,
  false
);
const book9 = new Book(
  "Journey To The Centre Of The Earth",
  "Julio Verne",
  9788467732023,
  "images/journey_center_earth.jpg",
  72,
  false
);
// Add default books to myLibrary array
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);
myLibrary.push(book7);
myLibrary.push(book8);
myLibrary.push(book9);

// Function to show all books

function showBooks() {
  myLibrary.map((el) => {
    content.innerHTML += cardTemplate;
  });

  const bookCardsDom = [...document.querySelectorAll(".book-card")];

  bookCardsDom.map((el, index) => {
    el.dataset.index = index;
    el.children[0].children[0].textContent = myLibrary[index].title;
    el.children[0].children[1].textContent = myLibrary[index].author;
    el.children[1].children[0].src = myLibrary[index].src;
    el.children[2].children[0].textContent = myLibrary[index].isbn;
    el.children[2].children[1].textContent = myLibrary[index].pages;
    el.children[3].children[0].textContent = myLibrary[index].read;
    el.children[3].children[0].textContent === "true"
      ? (el.children[3].children[0].textContent = "Already Read")
      : (el.children[3].children[0].textContent = "Not Read");
    el.children[3].children[0].textContent === "Already Read"
      ? el.children[3].children[0].parentNode.parentNode.classList.add(
          "less-contrast"
        )
      : (el.children[3].children[0].parentNode.parentNode.className =
          "book-card");
    el.children[3].children[0].textContent === "Already Read"
      ? el.children[3].children[0].parentNode.parentNode.children[0].children[0].classList.add(
          "through"
        )
      : (el.children[3].children[0].parentNode.parentNode.children[0].children[0].className =
          "book-title");
    el.children[3].children[0].textContent === "Already Read"
      ? el.children[3].children[0].parentNode.parentNode.children[0].children[1].classList.add(
          "through"
        )
      : (el.children[3].children[0].parentNode.parentNode.children[0].children[1].className =
          "book-author");

    el.children[3].children[0].addEventListener("click", (e) => {
      e.target.textContent = myLibrary[index].toogleRead();
      e.target.textContent === "true"
        ? (e.target.textContent = "Already Read")
        : (e.target.textContent = "Not Read");
    });
  });
  const readDom = [...document.querySelectorAll("#read")];
  readDom.forEach((el) => {
    el.textContent === "Already Read"
      ? (el.className = "readed")
      : (el.className = "not-readed");
  });

  readDom.forEach((el) =>
    el.addEventListener("click", () => {
      if (el.textContent === "Already Read") {
        el.classList.remove("not-readed");
        el.classList.add("readed");
        el.parentNode.parentElement.classList.add("less-contrast");
        el.parentNode.parentNode.children[0].children[0].classList.add(
          "through"
        );
        el.parentNode.parentNode.children[0].children[1].classList.add(
          "through"
        );
      } else {
        el.classList.remove("readed");
        el.classList.add("not-readed");
        el.parentNode.parentElement.className = "book-card";
        el.parentNode.parentNode.children[0].children[0].classList.remove(
          "through"
        );
        el.parentNode.parentNode.children[0].children[1].classList.remove(
          "through"
        );
      }
    })
  );
}

// Create a new object and adds to this the Book prototype

let newBook = new Book();

// Function that adds new books to myLibrary array from the user input
function addBookToLibrary() {
  bookForm.addEventListener("submit", (e) => {
    // e.preventDefault();
    // Get data of the form at submit
    newBook = new Book(); // Create a blank instance of Book
    newBook.title = document.getElementById("title").value;
    newBook.author = document.getElementById("author").value;
    newBook.isbn = Number(document.getElementById("isbn-Num").value); // Convert string to number
    newBook.src = "images/book-placeholder-image.svg"; // Default path works without to need store in the server
    newBook.pages = Number(document.getElementById("pagesNum").value); // Convert string to number
    newBook.read = document.getElementById("alreadyRead").value;
    newBook.read === "true" ? (newBook.read = true) : (newBook.read = false); // Convert string to boolean
    content.innerHTML += cardTemplate;
    myLibrary.push(newBook); // Add the book to the arrray
    content.lastElementChild.dataset.index = myLibrary.length - 1;
    content.lastElementChild.children[0].children[0].textContent =
      newBook.title;
    content.lastElementChild.children[0].children[1].textContent =
      newBook.author;
    content.lastElementChild.children[1].children[0].src = newBook.src;
    content.lastElementChild.children[2].children[0].textContent = parseInt(
      newBook.isbn
    );
    content.lastElementChild.children[2].children[1].textContent = parseInt(
      newBook.pages
    );
    content.lastElementChild.children[3].children[0].textContent = newBook.read;
    content.lastElementChild.children[3].children[0].textContent === "true"
      ? (content.lastElementChild.children[3].children[0].textContent =
          "Already Read")
      : (content.lastElementChild.children[3].children[0].textContent =
          "Not Read");
    content.lastElementChild.children[3].children[0].textContent ===
    "Already Read"
      ? (content.lastElementChild.children[3].children[0].className = "readed")
      : (content.lastElementChild.children[3].children[0].className =
          "not-readed");
    content.lastElementChild.children[3].children[0].textContent ===
    "Already Read"
      ? content.lastElementChild.children[3].children[0].parentNode.parentNode.classList.add(
          "less-contrast"
        )
      : (content.lastElementChild.children[3].children[0].parentNode.parentNode.className =
          "book-card");

    content.lastElementChild.children[3].children[0].textContent ===
    "Already Read"
      ? content.lastElementChild.children[3].children[0].parentNode.parentNode.children[0].children[0].classList.add(
          "through"
        )
      : (content.lastElementChild.children[3].children[0].parentNode.parentNode.children[0].children[0].className =
          "book-title");
    content.lastElementChild.children[3].children[0].textContent ===
    "Already Read"
      ? content.lastElementChild.children[3].children[0].parentNode.parentNode.children[0].children[1].classList.add(
          "through"
        )
      : (content.lastElementChild.children[3].children[0].parentNode.parentNode.children[0].children[1].className =
          "book-author");

    const readDom = [...document.querySelectorAll("#read")];
    readDom.map((btn, index) =>
      btn.addEventListener("click", (e) => {
        console.dir(e.target.parentNode.parentNode);
        console.dir(e.target.parentNode.parentNode.children[0].children[0]);
        console.dir(e.target.parentNode.parentNode.children[0].children[1]);
        e.target.textContent = myLibrary[index].toogleRead();
        e.target.textContent === "true"
          ? (e.target.textContent = "Already Read")
          : (e.target.textContent = "Not Read");
        if (e.target.textContent === "Already Read") {
          e.target.classList.remove("not-readed");
          e.target.classList.add("readed");
          e.target.parentNode.parentNode.className = 'book-card less-contrast';
          e.target.parentNode.parentNode.children[0].children[0].className = 'book-title through';
          e.target.parentNode.parentNode.children[0].children[1].className = 'book-author through';
        } else {
          e.target.classList.remove("readed");
          e.target.classList.add("not-readed");
          e.target.parentNode.parentNode.className = 'book-card';
          e.target.parentNode.parentNode.children[0].children[0].className = 'book-title';
          e.target.parentNode.parentNode.children[0].children[1].className = 'book-author';
        }
      })
    );
    bookForm.reset(); // Reset the fields of the form
    console.log(myLibrary);
  });
}
showBooks();
addBookToLibrary();
