(function () {
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoController', TodoController);

  function TodoController() {
    const todo = this;
  }
}());