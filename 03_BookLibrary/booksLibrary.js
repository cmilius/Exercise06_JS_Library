//creates the library object
function Library(){
	this.shelves = ["Shelf 1", "Shelf 2", "Shelf 3"];
}

//creates the shelf object
function Shelf(){
	this.books = [];
}

//creates the book object
function Book(){
	this.name = [];
}

//when the document is ready, make the table
$(document).ready(function() {
	createTable();
});

//creates the table of shelves and books
function createTable() {
		//creates the table html DOM element
    mytable = $("<table border='2'></table>");
    mytablebody = $('<tbody></tbody>');

		//declare a new library and shelves
    var library = new Library();
    var shelf1 = new Shelf();
    var shelf2 = new Shelf();
    var shelf3 = new Shelf();

    //Create shelf 1
    for(var i = 1; i <= 6; i++){
    	shelf1.books.push("Books " + i);
    }

    //Create shelf 2
    for(var i = 1; i <= 5; i++){
    	shelf2.books.push("Books " + i);
    }

     //Create shelf 3
     for(var i = 1; i <= 4; i++){
     	shelf3.books.push("Books " + i);
     }


     curr_row = $('<tr></tr>');

     for(row = 0; row < 3; row++) {
     	curr_cell = $('<td></td>');
     	curr_text = library.shelves[row];
     	curr_cell.append(curr_text);
     	curr_row.append(curr_cell);
     }

	mytablebody.append(curr_row); // appends arg to mytablebody

	mytable.append(mytablebody);

	for(row = 0; row < 6; row++) {
		curr_row = $('<tr></tr>');

		curr_cell = $('<td></td>');
		curr_text = shelf1.books[row];
		curr_cell.append(curr_text);
		curr_row.append(curr_cell);
		curr_cell = $('<td></td>');
		curr_text = shelf2.books[row];
		curr_cell.append(curr_text);
		curr_row.append(curr_cell);
		curr_cell = $('<td></td>');
		curr_text = shelf3.books[row];
		curr_cell.append(curr_text);
		curr_row.append(curr_cell);

	    mytablebody.append(curr_row); // appends arg to mytablebody
	  }

	  mytable.append(mytablebody);

    mytable.insertBefore($('#tablecreate')); // real dom from document!

}
