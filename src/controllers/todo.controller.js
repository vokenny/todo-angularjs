(function () {
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['$scope', 'TodoDataService'];
  function TodoController($scope, TodoDataService) {
    const todo = this;
    const todoData = TodoDataService;

    todo.updateMode = false;
    todo.updateTodoIdx = 0;

    todo.getTodos = () => todoData.getTodosArr();

    todo.addTodo = (todoItem) => {
      todoData.addTodo(todoItem);

      $scope.todoItem = '';
    }

    todo.updateTodo = (idx) => {
      todo.updateMode = true;
      todo.updateTodoIdx = idx;
    };

    todo.confirmUpdate = (idx, todoUpdate) => {
      todoData.updateTodo(idx, todoUpdate);
      todo.updateMode = false;
    };

    todo.cancelUpdate = () => todo.updateMode = false;

    todo.deleteTodo = (idx) => todoData.deleteTodo(idx);

    todo.clear = () => todoData.clear();
  }
}());