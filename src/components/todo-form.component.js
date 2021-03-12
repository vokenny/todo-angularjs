(function () {
  'use strict';

  angular
    .module('TodoApp')
    .component('todoForm', {
      templateUrl: 'src/templates/todo-form.html',
      controller: 'TodoFormController',
      controllerAs: 'todoFormCtrl',
      bindings: {
        todos: '<'
      }
    });
}());