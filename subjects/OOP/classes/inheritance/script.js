// if you're curious and want to know more about this topic, you should definitely check:
// https://javascript.info/class-inheritance

// here, we introduce the class inheritance
// javascript.info says: Class inheritance is a way for one class to extend another class.
// so we can create new functionality on top of the existing.

// usually, when we need to use the same properties a class has in another one
// it might be time to use the reserved word "extends"
class Book {
    constructor(title, yearPublished) {
        this.yearPublished = yearPublished;
        this.title = title;
    } 

    set setBooktitle(title) {
        this.title = title;
        // a set accessor requires exactly one parameter
    }

    get getYearPublished() {
        return this.yearPublished;
    }

    bookTitle() {
        console.log(`The book title is ${this.title}`);
    }

    static isBookOrAuthorInstance(obj) {
        return obj instanceof Book;
    }

}

const book = new Book("no title", "1931");
console.log(book.getYearPublished);
book.setBooktitle = "the waves";
console.log("book instance:", book);
book.bookTitle();

// internally, 'extends' uses the old prototype mechanics. 
// It sets Author.prototype.[[Prototype]] to Book.prototype. 
// so, if a method is not found in Author.prototype, JavaScript calls it from Book.prototype.
class Author extends Book {
    firstName = "No first name";
    lastName = "No last name";

    // super() initializes the parent class properties and must be called before accessing 'this' in the subclass.
    // otherwise, it will throw an error! be careful!
    constructor(title, yearPublished) {
        super(title, yearPublished); // get access to "Book" methods by calling "super()"
        this.firstName = "Lewis";
        this.lastName = "Carroll";
    }

    // here, we overwrite the Book class' method "bookTitle()".
    // it is possible to call the parent method by typing "super.method()" 
    bookTitle() {
        console.log(`The book title is ${this.title}, the author is ${this.firstName} ${this.lastName}`);
        super.bookTitle();
    }

    static isBookOrAuthorInstance(obj) {
        return obj instanceof Author;
    }
}

const newAuthor = new Author("Alice in Wonderland", "1865");
console.log("author's instance:", newAuthor);
console.log("author's book title and details:");
newAuthor.bookTitle();


// experiment with overriding static methods and call them on classes
console.log(Book.isBookOrAuthorInstance(newAuthor)); // true
console.log(Book.isBookOrAuthorInstance([])); // false
console.log(Book.isBookOrAuthorInstance(book)); // true
console.log(Author.isBookOrAuthorInstance(book)); // false