//creates the library object
function Library(name){
	this.libraryName = name;
	this.shelves = [];
}

//creates the shelf object
function Shelf(name){
	this.shelfName = name;
	this.books = [];
}

//creates the book object
function Book(name, details, available){
	this.bookName = name;
	this.details = details;
	this.available = available;
}

//include prototype functions

//get list of shelves in the library
Library.prototype.getShelvesList = function(){
	var i = 0;
	var shelvesList = [];

	//loop through all shelves in the library
	for(i=0;i<this.shelves.length;i++){
		shelvesList.push(this.shelves[i]);
		console.log("Getting shelf " + this.shelves[i].shelfName + " (getShelvesList)");
	}

	//return as an array of shelves
	return shelvesList;
}

//adds the given shelf to the library
Shelf.prototype.addShelfTo = function(library){
	library.shelves.push(this);
	console.log(this.shelfName + " pushed to " + library.libraryName);
}

//adds the given book to the shelf
Book.prototype.addBookTo = function(shelf){
	shelf.books.push(this);
	console.log(this.bookName + " pushed to " + shelf.shelfName);
}

//if this book is available return the shelf it is in, else return "unavailable"
Book.prototype.isAvailableIn = function(library){
	var i = 0;
	var j = 0;
	//for each shelf in the library
	for(i=0; i<library.shelves.length; i++){
    console.log("Checking " + library.shelves[i].shelfName + "...");

		//for each book in the shelf
		for(j=0;j<library.shelves[i].books.length;j++){
			//if this book is at this spot in the shelf, return the shelf
			if((this.bookName==library.shelves[i].books[j].bookName) && (library.shelves[i].books[j].available==1)){
				console.log("Found " + this.bookName + " in "+ library.shelves[i].shelfName);
				return library.shelves[i];
			}
		}
	}

	//if we make it here, we have to return unavailable
	console.log("Could not find " + this.bookName);
	var shelf = new Shelf();
	return shelf;
}

//creates the table of shelves and books
function createTable(library){

	//creates the table html DOM element
  mytable = $("<table id= \"genLibTable\" border='4'></table>");
  mytablebody = $("<tbody></tbody>");

  curr_row = $("<tr bgcolor=\"#0bed0b\"></tr>");

	//add all the shelves to the table
  for(col = 0; col < library.shelves.length; col++){
  	curr_cell = $("<td></td>");
   	curr_text = library.shelves[col].shelfName;
   	curr_cell.append(curr_text);
  	curr_row.append(curr_cell);
  }

	//appends arg to mytablebody
	mytablebody.append(curr_row);

	//add the books to the shelf columns
	//get the longest shelf's length
	var longestShelfLen = 0;

	for(i=0;i<library.shelves.length;i++){
		if(library.shelves[i].books.length > longestShelfLen){
			longestShelfLen = library.shelves[i].books.length;
		}
	}

	//for every book in the shelves
	for(row=0;row<longestShelfLen;row++){
		//make a new row
		curr_row = $("<tr bgcolor=\"#d2e940\"></tr>");

		//for each shelf
		for(col=0;col<library.shelves.length;col++){


			//if the shelf has a book at that spot
			if((row<library.shelves[col].books.length) && (library.shelves[col].books[row].available==1)){
				//make a new data col
				curr_cell = $("<td id=\""+library.shelves[col].books[row].bookName+"\"></td>");
				curr_text = library.shelves[col].books[row].bookName;
			}
			else{
				//make a new data col
				curr_cell = $("<td></td>");
				curr_text = " ";
			}
			curr_cell.append(curr_text);
			curr_row.append(curr_cell);
			mytablebody.append(curr_row);
		}
	}

	//append the body to the whole table
	mytable.append(mytablebody);

	//return generated table
	return mytable;
}

$("#genLibTable").on("click", "td", function() {
    //Do stuff
		alert("CLICKED!");
});

//when the document is ready, basically the main function
$(document).ready(function() {
	//variables
	var i=0;

	//make the library
	var library = new Library("Mitra's Library");

	//create shelves
	for(i=0;i<3;i++){
		var newShelf = new Shelf("Shelf " + i);
		newShelf.addShelfTo(library);
	}
	//alert(library.shelves[0].shelfName + library.shelves[1].shelfName + library.shelves[2].shelfName);

	var list = library.getShelvesList();
	//alert(list[0].shelfName + list[1].shelfName + list[2].shelfName);

	//add books to the shelves
	//shelf 0
	for(i=0;i<3;i++){
		var newBook = new Book("Book " + i,"Book " + i+" Description",1);
		newBook.addBookTo(library.shelves[0]);
	}

	//shelf 1
	for(;i<6;i++){
		var newBook = new Book("Book " + i,"Book " + i+" Description",1);
		newBook.addBookTo(library.shelves[1]);
	}

	//shelf2
	for(;i<9;i++){
		var newBook = new Book("Book " + i,"Book " + i+" Description",1);
		newBook.addBookTo(library.shelves[2]);
	}

	//add an unavailable book
	var newBook = new Book("Book 10","Book 10 Description",1);
	newBook.addBookTo(library.shelves[2]);

	var newBook = new Book("Book 11111","Book 11 Description",0);
	newBook.addBookTo(library.shelves[2]);

	var newBook = new Book("Book 11","DIFERENT BOOK 11",1);
	newBook.addBookTo(library.shelves[2]);

	//create the table from the library and display
	createTable(library).insertBefore($('#libraryTable'));

	$(document).on('click', 'td', function () {
			//get variables
			var string = $(this).html();
			var column = this.cellIndex;
			var row = this.parentNode.rowIndex - 1;

			//show user the book details if the book has a name
			if(row>=0 && col>=0 && string!=" "){
				alert(library.shelves[column].books[row].details);
			}
	});

});
