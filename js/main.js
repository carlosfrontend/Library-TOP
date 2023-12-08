const content = document.querySelector(".content");
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
let newBook = {};

function showBooks(myLibrary) {
  myLibrary.push(book1);
  myLibrary.push(book2);
  myLibrary.push(book3);
  myLibrary.push(book4);
  myLibrary.push(book5);
  myLibrary.push(book6);
  myLibrary.push(book7);
  myLibrary.push(book8);
  myLibrary.push(book9);

  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    const bookTitleContainer = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookThumbnailContainer = document.createElement("div");
    const bookImg = document.createElement("img");
    const bookDataContainer = document.createElement("div");
    const bookIsbn = document.createElement("span");
    const bookPages = document.createElement("span");
    const bookReadContainer = document.createElement("div");
    const bookInput = document.createElement("input");
    const bookLabel = document.createElement("label");
    const bookDeleteContainer = document.createElement("div");
    const trashLogo = document.createElement("i");
    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = myLibrary[i].author;
    bookImg.src = myLibrary[i].src;
    bookIsbn.textContent = myLibrary[i].isbn;
    bookPages.textContent = myLibrary[i].pages;
    bookLabel.textContent = "Already Read";
    bookCard.classList.add("book-card");
    bookTitleContainer.classList.add("book-title-container");
    content.appendChild(bookCard);
    bookCard.appendChild(bookTitleContainer);
    bookTitle.className = "book-title";
    bookTitleContainer.appendChild(bookTitle);
    bookAuthor.classList.add("book-author");
    bookTitleContainer.appendChild(bookAuthor);
    bookThumbnailContainer.className = "book-thumbnail-container";
    bookCard.appendChild(bookThumbnailContainer);
    bookImg.classList.add("thumbnail");
    bookImg.alt = "book thumbnail";
    bookThumbnailContainer.appendChild(bookImg);
    bookDataContainer.classList.add("book-data-container");
    bookCard.appendChild(bookDataContainer);
    bookIsbn.classList.add("book-isbn");
    bookDataContainer.appendChild(bookIsbn);
    bookPages.classList.add("book-pages");
    bookDataContainer.appendChild(bookPages);
    bookCard.appendChild(bookReadContainer);
    bookReadContainer.classList.add("book-read-container");
    bookInput.setAttribute("type", "checkbox");
    bookInput.setAttribute("id", `alreadyRead-${i}`);
    bookInput.checked = myLibrary[i].read;
    bookInput.addEventListener("click", (ev) => {
      ev.target.checked = myLibrary[i].toogleRead(read);
    });
    bookReadContainer.append(bookInput);
    bookLabel.setAttribute("for", `alreadyRead-${i}`);
    bookReadContainer.appendChild(bookLabel);
    bookReadContainer.appendChild(bookDeleteContainer);
    bookDeleteContainer.classList.add("book-delete-container");
    trashLogo.setAttribute("translate", "no");
    trashLogo.classList.add("material-icons", "delete");
    trashLogo.textContent = "delete_forever";
    bookDeleteContainer.appendChild(trashLogo);
  }
}
function addBookToLibrary() {
  bookForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const bookForm = document.getElementById("bookForm");
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const isbn = document.getElementById("isbn-Num");
    const src = document.getElementById("avatar");
    const pages = document.getElementById("pagesNum");
    const read = document.getElementById("read");
    
    newBook = new Book(
      title.value,
      author.value,
      isbn.value,
      src.value,
      pages.value,
      read.value === 'true' ? read.value = true : read.value = false
    );
    const bookCard = document.createElement("div");
    const bookTitleContainer = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookThumbnailContainer = document.createElement("div");
    const bookImg = document.createElement("img");
    const bookDataContainer = document.createElement("div");
    const bookIsbn = document.createElement("span");
    const bookPages = document.createElement("span");
    const bookReadContainer = document.createElement("div");
    const bookInput = document.createElement("input");
    const bookLabel = document.createElement("label");
    const bookDeleteContainer = document.createElement("div");
    const trashLogo = document.createElement("i");
    bookTitle.textContent = newBook.title;
    bookAuthor.textContent = newBook.author;
    newBook.src = "images/book-placeholder-image.svg";
    bookImg.src = newBook.src;
    bookIsbn.textContent = newBook.isbn;
    bookPages.textContent = newBook.pages;
    bookLabel.textContent = "Already Read";
    bookCard.classList.add("book-card");
    bookTitleContainer.classList.add("book-title-container");
    content.appendChild(bookCard);
    bookCard.appendChild(bookTitleContainer);
    bookTitle.className = "book-title";
    bookTitleContainer.appendChild(bookTitle);
    bookAuthor.classList.add("book-author");
    bookTitleContainer.appendChild(bookAuthor);
    bookThumbnailContainer.className = "book-thumbnail-container";
    bookCard.appendChild(bookThumbnailContainer);
    bookImg.classList.add("thumbnail");
    bookImg.alt = "book thumbnail";
    bookThumbnailContainer.appendChild(bookImg);
    bookDataContainer.classList.add("book-data-container");
    bookCard.appendChild(bookDataContainer);
    bookIsbn.classList.add("book-isbn");
    bookDataContainer.appendChild(bookIsbn);
    bookPages.classList.add("book-pages");
    bookDataContainer.appendChild(bookPages);
    bookCard.appendChild(bookReadContainer);
    bookReadContainer.classList.add("book-read-container");
    bookInput.setAttribute("type", "checkbox");
    bookInput.setAttribute("id", `alreadyRead-${++myLibrary.length - 1}`);
    bookInput.checked = newBook.read;
    bookInput.addEventListener('click', (e) => {
      e.target.checked = newBook.toogleRead(newBook.read);
    });
    bookLabel.setAttribute("for", `alreadyRead-${myLibrary.length - 1}`);
    bookReadContainer.append(bookInput);
    bookReadContainer.appendChild(bookLabel);
    bookReadContainer.appendChild(bookDeleteContainer);
    bookDeleteContainer.classList.add("book-delete-container");
    trashLogo.setAttribute("translate", "no");
    trashLogo.classList.add("material-icons", "delete");
    trashLogo.textContent = "delete_forever";
    bookDeleteContainer.appendChild(trashLogo);
  });
}

addBookToLibrary();
showBooks(myLibrary);
