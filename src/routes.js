const {
  addBookHandler,
  getAllBooksHandler,
  getBookByBookIdHandler,
  editBookByBookIdHandler,
  deleteBookByBookIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByBookIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByBookIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByBookIdHandler,
  },
];

module.exports = routes;
