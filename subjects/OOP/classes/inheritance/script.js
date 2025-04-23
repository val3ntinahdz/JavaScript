class Book {
    constructor(title, yearPublished, color) {
        this.title = title;
        this.yearPublished = yearPublished;
    } 

    set setBookColor(color) {
        this.color = color;

        // a set accessor requires exactly one parameter
    }

    get getBookName() {
        return this.title;
    }

    bookTitle() {
        console.log(`The book title is ${this.title}`)
    }

}
    
const theWaves = new Book("the waves", "1876");
console.log(theWaves);

// Class inheritance
class Author extends Book {
    firstName = "No first name";
    lastName = "No last name";

    // to access our main class properties, we gotta call super()
    constructor(title, yearPublished) {
        super(title, yearPublished);
        this.firstName = "Virginia";
        this.lastName = "Woolf";
    }

    // we access the Book class' method "bookTitle()".
    // it is possible to manipulate the content inside it and, at the same time, call the inherited content 
    bookTitle() {
        console.log(`The book title is ${this.title} and the author is ${this.firstName} ${this.lastName}`);
        super.bookTitle();
    }
}

const newAuthor = new Author("the waves", "1876");
console.log(newAuthor);
console.log(newAuthor.bookTitle());