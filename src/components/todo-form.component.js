(function () {
  'use strict';

  angular
    .module('TodoApp')
    .component('todoForm', {
      templateUrl: "src/templates/todo-form.html",
      controller: "TodoController as todoCtrl"
    });
}());