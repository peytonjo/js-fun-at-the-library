
function shelfBook(book, shelf){
  if(shelf.length < 3 ){
    shelf.unshift(book)
  }
}

function unshelfBook(name, sciFiShelf){
  for (var i = 0; i < sciFiShelf.length; i++) {
    if(sciFiShelf[i].title === name){
      sciFiShelf.splice(i, 1)
    }
  }
}

function listTitles(shelf){
  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`
}



function searchShelf(shelf, name){
  var isThere = false
  for (var i = 0; i < shelf.length; i++) {
    if (name === shelf[i].title){
    isThere = true;
    }
  }
  return isThere
}






module.exports = {
   shelfBook: shelfBook,
   unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
