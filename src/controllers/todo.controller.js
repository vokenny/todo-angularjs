(function () {
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['TodoDataService'];
  function TodoController(TodoDataService) {
    const todo = this;
    const todoData = TodoDataService;

    todo.getTodos = () => todoData.getTodosArr();
  }
}());