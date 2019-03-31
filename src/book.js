/*
  Třída pro jednu knihu v knihovně.

  Vlastnosti:
  - author: autor knihy
  - title: název khiny
  - year: rok vydání
  - image: obrázek knihy
  - isRead: boolean (true/false) zda máme knihu přečtenou

  Metody:
  - read(): označí knihu jako přečtenou
*/
export default class Book {

  constructor(author, title, year, image) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.image = image;
    this.isRead = false;
  }

  read() {
    this.isRead = true;
    console.log(`Super, přečetl jsi knihu ${this.title}.`);
  }

  renderHTML() {
    let mainWrapper = document.createElement('div');
    mainWrapper.classList.add('book');

    let bookImageWrapper = document.createElement('div');
    bookImageWrapper.classList.add('book__image');
    let bookImage = document.createElement('img');
    bookImage.src = 'images/' + this.image;
    bookImage.alt = this.title;
    bookImageWrapper.appendChild(bookImage);

    let bookInfoWrapper = document.createElement('div');
    bookInfoWrapper.classList.add('book__info');
    let bookTitle = document.createElement('h3');
    bookTitle.classList.add('book__title');
    bookTitle.textContent = this.title;
    let bookMeta = document.createElement('p');
    bookMeta.classList.add('book__meta');
    bookMeta.textContent = this.author + ', ' + this.year;
    bookInfoWrapper.appendChild(bookTitle);
    bookInfoWrapper.appendChild(bookMeta);

    let readBook = document.createElement('div');
    readBook.classList.add('book__badge', 'book__badge--read');
    let currentBook = document.createElement('div');
    bookMeta.classList.add('book__badge', 'book__badge--current');

    mainWrapper.appendChild(bookImageWrapper);
    mainWrapper.appendChild(bookInfoWrapper);
    mainWrapper.appendChild(readBook);
    mainWrapper.appendChild(currentBook);

    return mainWrapper;
  }

}