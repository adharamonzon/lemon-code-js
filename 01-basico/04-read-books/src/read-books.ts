//Fn isBookRead que recibe una lista de libros y un título. Devuelve si se ha leido dicho libro o no.
//Libro es un objeto con un title: string, isRead: boolean.
//Si el libro no existe en la lista debe devolver false

interface Book {
  title : string,
  isRead : boolean
}

const books : Book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

function isBookRead(booksList : Book[], book: string) : void  {
  //return si se ha leido el libro o no
  let msg : string = '';
  let theBook! : Book;

  booksList.forEach(bookItem => {
    bookItem.title === book && bookItem.isRead === true ? theBook = bookItem : msg = `¡Aún no has leído el ${book}!`;
    })
  
  theBook?.isRead === true ? msg = `El libro ${theBook.title} ya ha sido leído` : msg =`¡Aún no has leído el ${book}!`;
  
  console.log(msg)
}

isBookRead(books, "Devastación"); 
isBookRead(books, "Orgullo y prejuicio"); 
