//creates the library object
function Library(){
	this.shelves = [];
}

//creates the shelf object
function Shelf(){
	this.books = [];
}

<<<<<<< HEAD
function Book(name){
	 this.name = name;
=======
//creates the book object
function Book(){
	this.name = [];
>>>>>>> origin/master
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

<<<<<<< HEAD

=======
		//declare a new library and shelves
>>>>>>> origin/master
    var library = new Library();
    var shelf1 = new Shelf();
    var shelf2 = new Shelf();
    var shelf3 = new Shelf();

    library.shelves.push(shelf1);
    library.shelves.push(shelf2);
    library.shelves.push(shelf3);

    var book1 = new Book("Math");
    var book2 = new Book("Biology");
    var book3 = new Book("Physics");
    var book4 = new Book("English");
    var book5 = new Book("Chemistry");
    var book6 = new Book("Statistics");

    //Create shelf 1
    shelf1.books.push(book1);
    shelf1.books.push(book2);
    shelf1.books.push(book3);
    shelf1.books.push(book4);
    shelf1.books.push(book5);
    shelf1.books.push(book6);

    //Create shelf 2
    shelf2.books.push(book1);
    shelf2.books.push(book2);
    shelf2.books.push(book3);
    shelf2.books.push(book4);
    shelf2.books.push(book5);

    //Create shelf 3
    shelf3.books.push(book1);
    shelf3.books.push(book2);
    shelf3.books.push(book3);
    shelf3.books.push(book4);

    console.log(shelf2.books[0]);
    console.log(shelf1);
    console.log(shelf2);
    console.log(shelf3);

     curr_row = $('<tr></tr>');

     for(row = 1; row <= 3; row++) {
     	curr_cell = $('<td></td>');
     	curr_text = "Shelf" + row;
     	curr_cell.append(curr_text);
     	curr_row.append(curr_cell);
     }

	mytablebody.append(curr_row); // appends arg to mytablebody

	mytable.append(mytablebody);

	for(row = 0; row < 6; row++) {
		curr_row = $('<tr></tr>');

		curr_cell = $('<td></td>');
		curr_text = shelf1.books[row].name;
		curr_cell.append(curr_text);
		curr_row.append(curr_cell);

        if(row < shelf2.books.length)
		{
            curr_cell = $('<td></td>');
		    curr_text = shelf2.books[row].name;
		      curr_cell.append(curr_text);
		      curr_row.append(curr_cell);
         }

           if(row < shelf3.books.length)
        {
            curr_cell = $('<td></td>');
            curr_text = shelf3.books[row].name;
            curr_cell.append(curr_text);
            curr_row.append(curr_cell);
         }

	    mytablebody.append(curr_row); // appends arg to mytablebody
	  }

	  mytable.append(mytablebody);

    mytable.insertBefore($('#tablecreate')); // real dom from document!

}
<<<<<<< HEAD

function displayBookInfo(){
    
}
=======
>>>>>>> origin/master
