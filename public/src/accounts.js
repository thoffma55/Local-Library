function findAccountById(accounts, id) {
  let foundAccount = accounts.find((account) => account.id === id)
    return foundAccount
}

function sortAccountsByLastName(accounts) {
  const lastName = accounts.map((account) => (account.name.last))
    return accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last) ? 1 : -1);
}



function getTotalNumberOfBorrows(account, books) {
  const result = Object.values(books).reduce((acc, book) => {
    let borrowedBooks = 0
      for (let borrow of book.borrows){
        if(borrow.id === account.id){
          borrowedBooks ++;
        }
      }
        return acc + borrowedBooks;
  }, 0);
  return result;
}
  
 



function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = [];
    books.forEach((book) => {
      let borrowed = book.borrows;
        let foundBook = borrowed.find((borrow) => {
          return (borrow.id === account.id && borrow.returned===false)
        });
      if (foundBook) {
        booksPossessed.push(book);
      }
    });
    booksPossessed.forEach((book) => {
      let author = authors.find((author) => author.id === book.authorId);
        book.author = author;
    })
  return booksPossessed;
}





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
