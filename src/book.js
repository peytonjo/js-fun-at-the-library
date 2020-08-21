function createTitle(bookTitle) {
  return("The " + bookTitle)
}

function buildMainCharacter(name, age, pronouns) {
  var characterObj = {
    name: name,
    age: age,
    pronouns: pronouns
  }

  return characterObj
}

function saveReview(newUniqueReview, reviewList) {
  if(reviewList.indexOf(newUniqueReview)=== -1){
    reviewList.push(newUniqueReview)
  }
}

function calculatePageCount(bookTitle) {
  var titleLength = bookTitle.length
  return titleLength * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  var bookObj = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return bookObj
}

function editBook(book) {
 book.pageCount = ((book.pageCount / 4) * 3)
}


module.exports = {
  createTitle: createTitle,


  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
