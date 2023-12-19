// IIFE for open and close the dialog

(() => {
  document.querySelector("#alreadyRead").children[0].textContent = "Yes";
  document.querySelector("#alreadyRead").children[1].textContent = "No";
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
<button id="read" type="button" onclick="updateStatus(event)"></button>
<div class="book-delete-container">
<i translate="no" class="material-icons delete" onclick="removeBookFromLibrary(event)">delete_forever</i>
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
  this.id = self.crypto.randomUUID();
}
Book.prototype.toggleRead = function () {
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

// Function that adds new books to myLibrary array from the user input
function addBookToLibrary() {
  bookForm.addEventListener("submit", (e) => {
    const newBook = new Book(); // Create a blank instance of Book
    // Get data of the form at submit
    newBook.title = document.getElementById("title").value;
    newBook.author = document.getElementById("author").value;
    newBook.isbn = Number(document.getElementById("isbn-Num").value); // Convert string to number
    newBook.src = "images/book-placeholder-image.svg"; // Default path works without to need store in the server
    newBook.pages = Number(document.getElementById("pagesNum").value); // Convert string to number
    newBook.read = document.getElementById("alreadyRead").value;
    newBook.read === "true" ? (newBook.read = true) : (newBook.read = false); // Convert string to boolean
    newBook.id;

    content.innerHTML += cardTemplate;
    myLibrary.push(newBook); // Add the book to the arrray
    content.lastElementChild.children[0].children[0].textContent =
      newBook.title;
    content.lastElementChild.children[0].children[1].textContent =
      newBook.author;
    content.lastElementChild.children[1].children[0].src = newBook.src;
    content.lastElementChild.children[2].children[0].textContent = `ISBN: ${parseInt(
      newBook.isbn
    )}`;
    content.lastElementChild.children[2].children[1].textContent = `${parseInt(
      newBook.pages
    )} pages`;
    content.lastElementChild.children[3].children[0].textContent = newBook.read;
    content.lastElementChild.dataset.index = newBook.id;
    content.lastElementChild.children[3].children[0].textContent === "true"
      ? (content.lastElementChild.children[3].children[0].textContent =
          "Readed")
      : (content.lastElementChild.children[3].children[0].textContent =
          "Unreaded");
    content.lastElementChild.children[3].children[0].textContent === "Readed"
      ? content.lastElementChild.children[3].children[0].classList.add("readed")
      : (content.lastElementChild.children[3].children[0].className =
          "not-readed");
    content.lastElementChild.children[3].children[0].textContent === "Readed"
      ? content.lastElementChild.children[3].children[0].parentElement.parentElement.classList.add(
          "less-contrast"
        ) // card less-contrast
      : (content.lastElementChild.children[3].children[0].parentElement.parentElement.className =
          "book-card"); // card normally class
    content.lastElementChild.children[3].children[0].textContent === "Readed"
      ? content.lastElementChild.children[3].children[0].parentElement.parentElement.firstElementChild.children[0].classList.add(
          "through" // title through class
        )
      : (content.lastElementChild.children[3].children[0].parentElement.parentElement.firstElementChild.children[0].className =
          "book-title"); // title normally class
    content.lastElementChild.children[3].children[0].textContent === "Readed"
      ? content.lastElementChild.children[3].children[0].parentElement.parentElement.firstElementChild.children[1].classList.add(
          "through" // title through class
        )
      : (content.lastElementChild.children[3].children[0].parentElement.parentElement.firstElementChild.children[1].className =
          "book-author"); // title normally class

    bookForm.reset(); // Reset the fields of the form
  });
}
// Function to show all books

function showBooks() {
  myLibrary.map((el) => {
    content.innerHTML += cardTemplate;
    const bookCardsDom = [...document.querySelectorAll(".book-card")];

    bookCardsDom.map((el, index) => {
      el.children[0].children[0].textContent = myLibrary[index].title;
      el.children[0].children[1].textContent = myLibrary[index].author;
      el.children[1].children[0].src = myLibrary[index].src;
      el.children[2].children[0].textContent = `ISBN: ${myLibrary[index].isbn}`;
      el.children[2].children[1].textContent = `${myLibrary[index].pages} pages`;
      el.children[3].children[0].textContent = myLibrary[index].read;
      el.children[3].children[0].textContent === "true"
        ? (el.children[3].children[0].textContent = "Readed")
        : (el.children[3].children[0].textContent = "Unreaded");
      el.children[3].children[0].textContent === "Readed"
        ? el.children[3].children[0].classList.add("readed")
        : (el.children[3].children[0].className = "not-readed");
      el.children[3].children[0].textContent === "Readed"
        ? el.classList.add("less-contrast") // card less-contrast
        : (el.className = "book-card"); // card normally class
      el.children[3].children[0].textContent === "Readed"
        ? el.children[0].children[0].classList.add("through") // title through
        : (el.children[0].children[0].className = "book-title"); // title normaly class
      el.dataset.index = myLibrary[index].id;
      el.children[3].children[0].textContent === "Readed"
        ? el.children[0].children[1].classList.add("through") // author through
        : (el.children[0].children[1].className = "book-author"); // author normally class
    });
  });
}
// Function that remove books from  myLibrary array from the delete button
function removeBookFromLibrary(event) {

  for (let i = 0; i < myLibrary.length; i++) {
    if (
      myLibrary[i].id ===
      event.target.parentNode.parentNode.parentNode.dataset.index
    ) {
     if(confirm('Are you sure you want delete this Book?')){
      myLibrary.splice(i, 1);
      event.target.parentNode.parentNode.parentNode.remove();
     }else{
      return;
     }
    }
  }
}
function updateStatus(event) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === event.target.parentNode.parentNode.dataset.index) {
      event.target.textContent = myLibrary[i].toggleRead();
      event.target.textContent === "true"
        ? (event.target.textContent = "Readed")
        : (event.target.textContent = "Unreaded");
      if (event.target.textContent === "Unreaded") {
        event.target.className = 'not-readed';
        event.target.parentElement.parentElement.classList.remove(
          "less-contrast"
        ); // remove less-contrast class in the card
        event.target.parentElement.parentElement.children[0].children[0].classList.remove(
          "through"
        ); // remove title through class
        event.target.parentElement.parentElement.children[0].children[1].classList.remove(
          "through"
        ); // remove author through class
      } else {
        event.target.className = 'readed';
        event.target.parentElement.parentElement.classList.add("less-contrast");
        event.target.parentElement.parentElement.children[0].children[0].classList.add(
          "through"
        ); // add title through class
        event.target.parentElement.parentElement.children[0].children[1].classList.add(
          "through"
        ); // add author through class
      }
    }
  }
}
showBooks();
addBookToLibrary();
