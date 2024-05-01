function getTotalBooksCount(books) {
  let totalBooks = 0;
  books.forEach((book) => {
    totalBooks += 1;
  });
  return totalBooks
}

function getTotalAccountsCount(accounts) {
  let totalObjects = 0;
  accounts.forEach((accountObject) => {
    totalObjects += 1;
  })
  return totalObjects
}



function getBooksBorrowedCount(books) {
  let booksBorrowed = 0;
  for (let index in books){
    const book = books[index]
      const firstBorrower = book.borrows[0]
      if(firstBorrower.returned === false) {
        booksBorrowed ++;
      }
  }
  return booksBorrowed
}





function getMostCommonGenres(books) {
  const allGenres = books.map(book => book.genre)
  let result = [];
  allGenres.forEach(element => {
    let answer = result.find(res => res.name === element);
    if(answer !=null){
      answer.count ++;}
      result.push({name:element, count: 1});
    });
      return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

                     
function resultTopFive(books) {
  let popularBooks = books.sort((countA, countB) => (countA.count < countB.count ? 1 : -1)).slice(0, 5);
  return popularBooks
}

function getMostPopularBooks(books) {
  let mostPopularBooks = [];
    for (const book of books) {
      mostPopularBooks.push({name: book.title, count: book.borrows.length});
    }
        let topBooks = resultTopFive(mostPopularBooks)
  return topBooks
}
  
 

function getMostPopularAuthors(books, authors) {
  let authorsResult = [];
  let popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
  popularAuthor.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
authorsResult.push({name:`${author.name.first} ${author.name.last}`, count: book.borrows.length});
  });
    return (authorsResult.sort((countA, countB) => countA.count < countB.count ? 1: -1)).slice(0, 5);
}
                        
  





module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
