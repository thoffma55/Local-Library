


function findAuthorById(authors, id) {
  let authorId = authors.find((author) => author.id === id)
    return authorId
}


function findBookById(books, id) {
  let bookFind = books.find((book) => book.id === id)
    return bookFind
}



function partitionBooksByBorrowedStatus(books) {
  let booksCheckedOut = books.filter((book) => book.borrows[0].returned === false);
    let booksReturned = books.filter((book) => book.borrows[0].returned === true);
      return [booksCheckedOut, booksReturned];
}



function getBorrowersForBook(book, accounts) {
  const allBorrows = book.borrows;
    let list = allBorrows.map((currentStatus) => { let borrower = findAuthorById(accounts, currentStatus.id); 
      borrower.returned = currentStatus.returned; 
        return borrower;
   });   
    return list.slice(0, 10)
}
  
  



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
