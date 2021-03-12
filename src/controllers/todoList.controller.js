(function () {
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoListController', TodoListController);

  TodoListController.$inject = ['TodoDataService'];
  function TodoListController(TodoDataService) {
    const todoList = this;
    const todoData = TodoDataService;

    todoList.updateMode = false;
    todoList.updateTodoIdx = 0;

    todoList.updateTodo = (idx) => {
      todoList.updateMode = true;
      todoList.updateTodoIdx = idx;
    };

    todoList.confirmUpdate = (idx, todoUpdate) => {
      todoData.updateTodo(idx, todoUpdate);
      todoList.updateMode = false;
    };

    todoList.cancelUpdate = () => todoList.updateMode = false;

    todoList.deleteTodo = (idx) => todoData.deleteTodo(idx);

    todoList.changeDoneState = (idx) => todoData.updateTodo(idx);
  }
}());