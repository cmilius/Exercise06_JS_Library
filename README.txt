README.txt
Exercise06_JS_Library

02_Examples
  EX 00 order
    1. Console display of in test0.js because it is loading that file
    2. It will load "In head element" to console
    3. Create an event listener for when it is loaded, but won't print anything
    4. Display "Hello 1" on the page
    5. Console display of "in script1 body"
    6. Creates test() method
    7. Puts "Hello 2" on the page
    8. console display of "in script2 body"
    9. Console display of "in test0.js"
    10. Puts "Hello 3" on the page
    11. Takes awhile to load and display all 4 images
    13. Console display of "in test0.js"
    14. DOM has been fully loaded, so console display of "document is now ready"
    15. Load content into browser, so console display of "document has now been completely loaded"

  EX 01 functions
    Call uses comma separated arguments when used while apply uses an array containing the arguments when used
    Bind assigns functions to event handlers

  EX 02 json
    5. JSON.stringify(testObj); creates a JavaScript string based on a JS object
    6. JSON.parse(text); creates a JS object based on a JSON formatted string

  EX 03 jquery

  EX 03 jquery2

  EX 03 jquery3

  EX 04 objs

  EX 05 obj_Factory

  EX 06 obj_Constructor

  EX 07 obj_prototype

  EX 08 obj_consProto

02_JQuery
  EFFECTS
    1. Html Element: id=btnHide Effect: Hides this button from the screen, then shows it again
    2. Html Element: id=btnSlide  Effect: Hides button from screen with slide effect
    3. Html Element: id=btnToggle Effect: Toggles the visibility of the first two buttons
    4. Html Element: id=btnFade Effect: Fades this button out and back into visibility
    5. Html Element: id=btnAnimate Effect: Animates this button by making it taller, wider, then shrinking it back again

  EVENTS
    1. Html Element: id=btnClick Event: When the button is clicked, hide it
    2. Html Element: id=btnClick2 Event: When the button is double clicked, toggle btnClick's visibility
    3. Html Element: id=btnEnter Event: When mouse enters the button, tell user with an alert
    4. Html Element: id=btnLeave Event: When mouse leaves button, tell user with an alert
    5. Html Element: btnFocus Event: When button has the focus, change it's background-color to red you
      can test this by tabbing the focus through all the buttons

03_Library
  When making the library, we decided to have three different objects.  Their structures are listed below:
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

  The library would store an array of shelves, and each shelf would store an array of books.  These could
  then be added-to or removed-from as needed.  To keep track of what books were available, each book had
  an "available" variable, that either contained a 1 (for available), or a 0 (for unavailable).  This variable
  can be updated so a user can know if a book is available or not.

  We used the constructor-prototype pattern for each function declaration.  Each function declaration and its
  description is below:
  //get list of shelves in the library
  Library.prototype.getShelvesList = function()

  //adds the given shelf to the library
  Shelf.prototype.addShelfTo = function(library)

  //adds the given book to the shelf
  Book.prototype.addBookTo = function(shelf)

  //if this book is available return the shelf it is in, else return "unavailable"
  Book.prototype.isAvailableIn = function(library)

  **General functionality**
  When the document is loaded, then the page populates a library object with a
  set amount of shelves and books in those shelves.  Some of the shelves have
  books that are not available and unavailable.  From there, a table is generated
  using a library object that only contains the available books and is displayed
  to the user.  When the user clicks on a cell, it displays the name of the book
  and its details in an alert window.

  Below the table of available books is a search window to check availability for
  a book.  If a book is unavailable in the library (Book 12) or non-existant in
  the library, then the display window will say the the book is unavailable.  If
  the book is available, it will say that the book is available and what shelf it
  is located in.

  Below the check availability option, is a display shelves button.  Clicking this
  button will list all of the shelves in the library to the user.
