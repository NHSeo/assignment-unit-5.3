console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(newAlbum);
  return newAlbum;
}

console.log(addToCollection(myCollection, "Album 1", "Artist 1", 2024));
console.log(addToCollection(myCollection, "Album 2", "Artist 2", 2023));
console.log(addToCollection(myCollection, "Album 3", "Artist 3", 2022));
console.log(addToCollection(myCollection, "Album 4", "Artist 1", 2021));
console.log(addToCollection(myCollection, "Album 5", "Artist 2", 2020));
console.log(addToCollection(myCollection, "Album 6", "Artist 3", 2019));

function showCollection(collection) {
  let length = collection.length;

  for (let i = 0; i < length; i++) {
    let album = collection[i];
    console.log(album.title + " by " + album.artist + ", published in " + album.yearPublished);
  };
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    let album = collection[i];
    if (album.artist === artist) {
      result.push(album);
    };
  };
  return result;
}

console.log(findByArtist(myCollection, "Artist 1"));
console.log(findByArtist(myCollection, "Artist 2"));
console.log(findByArtist(myCollection, "Artist 3"));



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
