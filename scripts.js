let myLibrary = [];

class Book {
  constructor(titles, author, page) {
    this.titles = titles;
    this.author = author;
    this.page = page;
    this.read = false;
  }

  // Takes data from form values, stores book in myLibrary array
  createBook(item) {
    let newBook = new Book(titles, author, page);
    newBook.titles = titles;
    newBook.author = author;
    newBook.page = page;
    myLibrary.push(item);

    let dom = document.createElement("div");
    let container = document.querySelector(".bookDisplay");
    let newContainer = document.createElement("div");
    let nTitle = document.createElement("div");
    let nAuthor = document.createElement("div");
    let nPages = document.createElement("div");
    let remove = document.createElement("button");
    let read = document.createElement("input");
    let answer = document.createElement("div");

    dom.classList.add(myLibrary.length);
    container.appendChild(dom);

    newContainer.classList.add("container");
    dom.appendChild(newContainer);

    remove.classList.add("remove");
    remove.textContent = "X";
    newContainer.appendChild(remove);

    nTitle.classList.add("title");
    newContainer.appendChild(nTitle);

    nAuthor.classList.add("author");
    newContainer.appendChild(nAuthor);

    nPages.classList.add("pages");
    newContainer.appendChild(nPages);

    read.classList.add("read");
    read.setAttribute("type", "checkbox");
    newContainer.appendChild(read);

    answer.classList.add("answer");
    answer.textContent = "Not Read";
    newContainer.appendChild(answer);

    // Remove button
    remove.addEventListener("click", () => {
      myLibrary.pop(myLibrary[dom.className]);
      dom.remove(dom.className);
    });

    // read/not read button needs work
    read.addEventListener("click", () => {
      if (answer.textContent == "Not Read") {
        answer.textContent = "Read";
      } else {
        answer.textContent = "Not Read";
      }
    });

    for (let i = 0; i < myLibrary.length; i++) {
      nTitle.textContent = myLibrary[i].titles;
      nAuthor.textContent = "By " + myLibrary[i].author;
      nPages.textContent = myLibrary[i].page + " Pgs";
    }
  }
}

let titles = document.getElementById("titles");
let author = document.getElementById("author");
let page = document.getElementById("page");
let slider = document.querySelector(".slider");
let readText = document.querySelector("#read");
let addBookBtn = document.querySelector("#addBook");
let readChoice = document.getElementById("read");

// add button show/hide functions
document.getElementById("addBook").onclick = function () {
  document.getElementById("form").style.display = "block";
};

document.getElementById("submit").onclick = function (e) {
  e.preventDefault();
  if (titles.validity.valueMissing) {
    titles.setCustomValidity("Add a title!");
    titles.reportValidity();
  } else if (author.validity.valueMissing) {
    author.setCustomValidity("Add an author!");
    author.reportValidity();
  } else if (page.validity.valueMissing) {
    page.setCustomValidity("Add page amount!");
    page.reportValidity();
  } else {
    titles.setCustomValidity("");
    page.setCustomValidity("");
    author.setCustomValidity("");
    let newBook = new Book(titles.value, author.value, page.value);
    newBook.createBook(newBook);
    document.getElementById("form").style.display = "none";
  }
};

// Form Validations
const form = document.getElementsByTagName("form")[0];
const submitBtn = document.getElementById("submit");
