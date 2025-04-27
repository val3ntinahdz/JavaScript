# singleton pattern in javascript

welcome to a simple example of the singleton design pattern!

## what is singleton?
a singleton ensures that only one instance of a class exists and provides a way to access it across the whole application. even if we try to create multiple instances, they will all point to the first one created.

this can be useful when we want a single object controlling important parts of our app, like a configuration manager, a logger, or a connection to a database.

in this example:
- we create a singleton class.
- we try to create multiple instances with different names.
- we show that all instances are actually the same object.
- we also mention how es modules naturally behave like singletons.

hope you find it useful. :)