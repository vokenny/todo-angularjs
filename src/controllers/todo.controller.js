(function () {
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['TodoDataService'];
  function TodoController(TodoDataService) {
    const todo = this;
    const todoData = TodoDataService;

    todo.getTodos = todoData.todosArr;

    todo.addTodo = (todoItem) => {
      todoData.addTodo(todoItem);
    }

    todo.deleteTodo = (idx) => {
      todoData.deleteTodo(idx);
    }

    todo.clear = () => todoData.clear();
  }
}());