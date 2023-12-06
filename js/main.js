const content = document.querySelector(".content");

const myLibrary = [
  {
    title: "The Name Of The Rose",
    author: "Umberto Eco",
    pages: 784,
    alreadyRead: true,
    isbn: 9788497592581,
    src: 'images/name_of_the_rose.jpg'
  },
  {
    title: "The Lord Of The Rings",
    author: "J.R.R. Tolkien",
    pages: 1482,
    alreadyRead: true,
    isbn: 9780008471286,
    src: 'images/lord_of_the_rings.jpg'
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    pages: 400,
    alreadyRead: false,
    isbn: 9780486415864,
    src: 'images/great_expectations.jpg'
  },
  {
    title: "The American Planet",
    author: "Vicente Verdú",
    pages: 176,
    alreadyRead: true,
    isbn: 9788433905307,
    src:'images/the_american_planet.jpg'
  },
  {
    title: "Dramatic prophecies of the Great Pyramid",
    author: "Rodolfo Benavides",
    pages: 382,
    alreadyRead: true,
    isbn: 9788497592581,
    src: 'images/dramatic_profecies.jpg'
  },
  {
    title: "Eloquent Javascript",
    author: "Marijn Haverbeke",
    pages: 699,
    alreadyRead: false,
    isbn: 9781593279509,
    src:'images/eloquent_javascript.jpg'
  },
  {
    title: "San Manuel Bueno Mártir",
    author: "Miguel de Unamuno",
    pages: 172,
    alreadyRead: true,
    isbn: 9780828825788,
    src:'images/san_manuel_bueno_martir.jpg'
  },
  {
    title: "The Principles of Object-Oriented JavaScript",
    author: "Nicholas C. Zakas",
    pages: 120,
    alreadyRead: false,
    isbn: 9781593275402,
    src:'images/principies_oop.jpg'
  },
  {
    title: "Journey To The Centre Of The Earth",
    author: "Julio Verne",
    pages: 72,
    alreadyRead: false,
    isbn: 9788467732023,
    src:'images/journey_center_earth.jpg'
  },
];

function Book() {}

function addBookToLibrary() {}

function showBooks(myLibrary) {
  myLibrary.forEach((book) => {
    content.innerHTML += `
<div class="book-card">
  <div class="book-title-container">
    <h3 class="boot-title">${book.title}</h3>
    <p class="book-author">${book.author}</p>
  </div>
  <div class="book-thumbnail-container">
    <img class="thumbnail" src="${book.src}" />
  </div>
  <div class="book-data-container">
    <span class="book-isbn">ISBN: ${book.isbn}</span>
    <span class="book-pages">Pages: ${book.pages}</span>
  </div>
  <div class="book-read-container">
    <input
      type="checkbox"
      name="alreadyRead"
      id="alreadyRead"
      name="alreadyRead"
    />
  <label for="alreadyRead">Already Read</label>
  <div class="book-delete-container">
  <i class="material-icons delete">delete_forever</i>
  </div>
</div>
</div>
     `;
  });
}

showBooks(myLibrary);

{
  /* <div class="book-card">
<div class="book-title-container">
  <h3 class="boot-title">The Name Of The Rose</h3>
  <p class="book-author">Umberto Eco</p>
</div>
<div class="book-thumbnail-container">
  <img class="thumbnail" src="./images/name_of_the_rose.jpg" alt="" />
</div>
<div class="book-data-container">
  <span class="book-isbn">ISBN: 9788497592581</span>
  <span class="book-pages">Pages Nº: 784</span>
</div>
<div class="book-read-container">
  <input
    type="checkbox"
    name="alreadyRead"
    id="alreadyRead"
    name="alreadyRead"
    checked="true"
    value="true"
  />
  <label for="alreadyRead">Already Read</label>
</div>
</div> */
}
