(function () {
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoDataService', TodoDataService);

  function TodoDataService() {
    const todoData = this;

    todoData.getTodosArr = () => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

    todoData.addTodo = (todoItem) => {
      let todos = todoData.getTodosArr();
      todos.push(todoItem);
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    todoData.deleteTodo = (idx) => {
      let todos = todoData.getTodosArr();
      todos.splice(idx, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    todoData.clear = () => localStorage.clear();
  }
}());