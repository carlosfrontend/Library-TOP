const content = document.querySelector("#content.content");
const bookCardsDom = [...document.querySelectorAll(".book-card")];
const titlesDom = [...document.querySelectorAll(".book-title")];
const authorsDom = [...document.querySelectorAll(".book-author")];
const srcDom = [...document.querySelectorAll(".thumbnail")];
const isbnDom = [...document.querySelectorAll(".book-isbn")];
const pagesDom = [...document.querySelectorAll(".book-pages")];
const readDom = [...document.querySelectorAll(".read")];
const bookForm = document.getElementById("bookForm");

(function () {
  var updateButton = document.querySelector(".add");
  var cancelButton = document.getElementById("cancel");
  var favDialog = document.getElementById("favDialog");

  // Update button opens a modal dialog
  updateButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", function () {
    favDialog.close();
  });
})();

let myLibrary = [];

function Book(title, author, isbn, src, pages, read) {
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

const book1 = new Book(
  "The Name Of The Rose",
  "Umberto Eco",
  "9788497592581",
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
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);
myLibrary.push(book7);
myLibrary.push(book8);
myLibrary.push(book9);

let newBook = {};

function showBooks() {
  bookCardsDom.map((el, index) => {
    if (el !== null) {
      el.dataset.index = index;
    }
  });

  titlesDom.map((el, index) => {
    el.textContent = myLibrary[index].title;
  });

  authorsDom.map((el, index) => {
    el.textContent = myLibrary[index].author;
  });

  srcDom.map((el, index) => {
    el.src = myLibrary[index].src;
  });

  isbnDom.map((el, index) => {
    el.textContent = myLibrary[index].isbn;
  });

  pagesDom.map((el, index) => {
    el.textContent = myLibrary[index].pages;
  });

  readDom.map((el, index) => {
    el.checked = myLibrary[index].read;
    el.addEventListener("click", () => {
      el.checked = myLibrary[index].toogleRead(read);
    });
  });
}

function addBookToLibrary() {
  bookForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const isbn = document.getElementById("isbn-Num");
    const src = document.getElementById("avatar");
    const pages = document.getElementById("pagesNum");

    const newBook = new Book(
      title.value,
      author.value,
      parseInt(isbn.value),
      src.value,
      parseInt(pages.value),
      read.value === "true"
        ? (this.read.value = true)
        : (this.read.value = false)
    );
    console.log(newBook.read);
    const newBookCard = document.createElement("div");
    newBookCard.classList = "book-card";
    newBookCard.innerHTML += `<div class="book-title-container">
    <h3 class="book-title">${newBook.title}</h3>
    <p class="book-author">${newBook.author}</p>
  </div>
  <div class="book-thumbnail-container">
    <img
      class="thumbnail"
      src="${(newBook.src.value = "images/book-placeholder-image.svg")}"
      class="thumbnail"
      alt="book thumbnail"
    />
  </div>
  <div class="book-data-container">
    <span class="book-isbn">${newBook.isbn}</span><span class="book-pages">${
      newBook.pages
    }</span>
  </div>
  <div class="book-read-container">
    <input class="read" type="checkbox" id="alreadyRead-${
      myLibrary.length + 1 - 1
    }" /><label
      for="alreadyRead-${myLibrary.length + 1 - 1}"
      >Already Read</label
    >
    <div class="book-delete-container">
      <i translate="no" class="material-icons delete">delete_forever</i>
    </div>
  </div>`;

    myLibrary.push(newBook);
    bookCardsDom.map((el, index) => {
      if (el !== null) {
        newBookCard.dataset.index = myLibrary.length - 1;
      } else {
        myLibrary.length = 0;
      }
    });

    newBookCard.dataset.index = myLibrary.length - 1;

    content.append(newBookCard);
    const myInputChecked = content.lastChild.lastChild.firstElementChild;
    if (newBook.read === true) {
      myInputChecked.checked = true;
    } else {
      myInputChecked.removeAttribute("checked");
    }
    myInputChecked.addEventListener("click", () => {
      myInputChecked.checked = newBook.toogleRead();
    });
    console.log(myInputChecked);
    removeBookFromLibrary();
  });
}

function removeBookFromLibrary() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      let deleteQuestion = confirm(
        "Are you sure you want to delete this book?"
      );
      if (deleteQuestion) {
        let indexForDelete =
          e.target.parentNode.parentNode.parentNode.dataset.index;
        bookCardsDom.splice(indexForDelete, 1);
        e.target.parentNode.parentNode.parentNode.remove();
        myLibrary.splice(indexForDelete, 1);

        const cards = [...document.querySelectorAll(".book-card")];
        for (let i = 0; i < myLibrary.length; i++) {
          for (let j = 0; j < cards.length; j++) {
            cards[j].dataset.index = j;
          }
        }

        // return;
      } else {
        return;
      }
    })
  );
}

showBooks();
addBookToLibrary();
removeBookFromLibrary();
