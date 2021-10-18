(function () {
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoListController', TodoListController);

  TodoListController.$inject = ['TodoDataService'];
  function TodoListController(TodoDataService) {
    const todoList = this;
    const todoData = TodoDataService;

    todoList.toggleUpdateMode = (idx) => {
      todoData.toggleUpdateMode(idx);
    };

    todoList.confirmUpdate = (idx, updatedTodoText) => {
      todoData.updateTodo(idx, updatedTodoText);
      todoData.toggleUpdateMode(idx);
    };

    todoList.deleteTodo = (idx) => todoData.deleteTodo(idx);

    todoList.toggleDoneState = (idx) => todoData.toggleDoneState(idx);
  }
}());