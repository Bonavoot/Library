function Book(titles, author, page, read) {
    this.titles = titles;
    this.author = author;
    this.page = page;
    this.read = read;
}

let myLibrary = [];
let newBook;


function addBooktoLibrary() {
    newBook = new Book(titles, author, page, read);
    newBook.titles = titles.value;
    newBook.author = author.value;
    newBook.page = page.value;
    newBook.read = read.value;
    myLibrary.push(newBook);


    createBook(newBook)

}

function createBook(item) {
    
    let dom = document.createElement('div');
    let container = document.querySelector('.bookDisplay');
    let newContainer = document.createElement('div');
    let nTitle = document.createElement('div');
    let nAuthor = document.createElement('div');
    let nPages = document.createElement('div');
    let remove = document.createElement('button');
    let read = document.createElement('input');
    let answer = document.createElement('div');

    dom.classList.add(myLibrary.length)
    container.appendChild(dom);

    newContainer.classList.add('container')
    dom.appendChild(newContainer);

    remove.classList.add('remove');
    remove.textContent = 'X';
    newContainer.appendChild(remove)

    nTitle.classList.add('title')
    newContainer.appendChild(nTitle);

    nAuthor.classList.add('author')
    newContainer.appendChild(nAuthor);

    nPages.classList.add('pages');
    newContainer.appendChild(nPages);

    read.classList.add('read');
    read.setAttribute('type', 'checkbox')
    newContainer.appendChild(read);

    answer.classList.add('answer');
    answer.textContent = 'Not Read';
    newContainer.appendChild(answer);

    // Remove button
    remove.addEventListener('click', () => {
        myLibrary.pop(myLibrary[dom.className]);
        dom.remove(dom.className);
    })

    // read/not read button needs work
    read.addEventListener('click', () => {

        if (answer.textContent == 'Not Read') {
            answer.textContent = 'Read'
        }
        else {
            answer.textContent = 'Not Read';
        }
    });

    for (let i = 0; i < myLibrary.length; i++) {

        nTitle.textContent = myLibrary[i].titles;
        nAuthor.textContent = 'By ' + myLibrary[i].author;
        nPages.textContent = myLibrary[i].page + ' Pgs';
        
        
    }

}


let titles = document.getElementById('titles');
let author = document.getElementById('author');
let page = document.getElementById('page');
let slider = document.querySelector('.slider');
let readText = document.querySelector('#read');
let addBookBtn = document.querySelector('#addBook');
let readChoice = document.getElementById('read');


// add button show/hide functions
document.getElementById('addBook').onclick = function () {

    document.getElementById('form').style.display = 'block'
}

document.getElementById('submit').onclick = function (e) {
    e.preventDefault();
    document.getElementById('form').style.display = 'none'
    addBooktoLibrary();
}



