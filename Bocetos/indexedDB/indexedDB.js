
// import idb from "../../node_modules/idb/build/umd.js";
let db;
let id = 0;

init();

async function init() {

  await idb.deleteDB("booksDb", {
    blocked() {
      // …
    },
  });

  // db = await idb.openDB('booksDb', 1, db => {
  //   console.log(db);
  //   db.createObjectStore('books', { keyPath: 'id' });
  // });


  // console.log(db);

  // db.createObjectStore('books', { keyPath: 'name' });
  // db.createObjectStore('peticiones', { keyPath: 'name' });

  // db.close();

  // list();
}

async function list() {
  let tx = db.transaction('books');
  let bookStore = tx.objectStore('books');

  let books = await bookStore.getAll();

  if (books.length) {
    listElem.innerHTML = books.map(book => `<li>
        name: ${book.name}, price: ${book.price}
      </li>`).join('');
  } else {
    listElem.innerHTML = '<li>No books yet. Please add books.</li>'
  }


}

async function clearBooks() {
  let tx = db.transaction('books', 'readwrite');
  await tx.objectStore('books').clear();
  await list();
}

async function addBook() {
  let name = prompt("Book name?");
  let price = +prompt("Book price?");

  let tx = db.transaction('books', 'readwrite');

  try {
    await tx.objectStore('books').add({ name, price, id: id++ });
    await list();
  } catch (err) {
    if (err.name == 'ConstraintError') {
      alert("Such book exists already");
      await addBook();
    } else {
      throw err;
    }
  }
}

window.addEventListener('unhandledrejection', event => {
  alert("Error: " + event.reason.message);
});

