const {
  addTodo,
  getTodoById,
  getAllTodo,
  updateTodoById,
  deleteTodo,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => 'Selamat datang di API Todo',
  },
  {
    method: 'POST',
    path: '/todos',
    handler: addTodo,
  },
  {
    method: 'GET',
    path: '/todos/{id}',
    handler: getTodoById,
  },
  {
    method: 'GET',
    path: '/todos',
    handler: getAllTodo,
  },
  {
    method: 'PUT',
    path: '/todos/{id}',
    handler: updateTodoById,
  },
  {
    method: 'DELETE',
    path: '/todos/{id}',
    handler: deleteTodo,
  },
];

module.exports = { routes };
