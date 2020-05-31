# findworka_test
Building a test project as an interview for findworka.com
This task is designed to provide an opportunity for a to demonstrate general
PHP based restful API development knowledge in the sense
the developer (you):
write clean, structured, readable and maintainable code
create simple application components and building blocks
understand fetching, transforming and aggregating data from external APIs
maintain a well designed application state
craft a pleasant api consumer experience

The Proble solved in the codebase

Create a small set of rest API endpoints using either one of NodeJS or PHP
that can be used for listing the names of books along with their authors and
comment counts, adding and listing anonymous comments for a book, and
getting the character list for a book.

Laravel and Vue.js was used for this project. To get started, simply clone and run the following commands:

`composer install`
`npm install`

The above commands would install all necessary dependencies needed.

To serve the project run the following commands

`php artisan serve`
`npm run watch`

All the API routes can be found in `api.php`  in the routes directry

The vue commponents are found in the `resource` folder.
Axios was used to make API call in the Vue.js components.
