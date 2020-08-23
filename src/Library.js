
function createLibrary(buildingName){
 var library = {
   name: buildingName,
   shelves:{
     fantasy: [],
     fiction: [],
     nonFiction: []
   }
 }
 return library
}

function addBook(place, book){
  place.shelves[book.genre].push(book)
}

function checkoutBook(place, bookTitle){
  var answer = "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library";
  for (var genre in place.shelves) {
    for (var i = 0; i < place.shelves[genre].length; i++) {
      if (place.shelves[genre][i].title === bookTitle) {
        place.shelves[genre].splice(i, 1)
        answer = `You have now checked out ${bookTitle} from the Denver Public Library`
      }
    }
  }
  return answer;
}







module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
