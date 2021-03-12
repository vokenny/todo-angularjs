(function () {
  'use strict';

  angular
    .module('TodoApp')
    .component('todoList', {
      templateUrl: 'src/templates/todo-list.html',
      controller: 'TodoListController',
      controllerAs: 'todoListCtrl',
      bindings: {
        todos: '<'
      }
    });
}());