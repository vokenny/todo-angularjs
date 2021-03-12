(function () {
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoFormController', TodoFormController);

  TodoFormController.$inject = ['$scope', 'TodoDataService'];
  function TodoFormController($scope, TodoDataService) {
    const todoForm = this;
    const todoData = TodoDataService;

    todoForm.addTodo = (todoItem) => {
      todoData.addTodo(todoItem);

      $scope.todoItem = '';
    }

    todoForm.clear = () => todoData.clear();
  }
}());