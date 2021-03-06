(function () {
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoDataService', TodoDataService);

  function TodoDataService() {
    const todoData = this;

    let todos = [];

    todoData.todosArr = todos;

    todoData.addTodo = (todoItem) => {
      todos.push(todoItem);
    }

    todoData.deleteTodo = (idx) => {
      todos.splice(idx, 1);
    }

    todoData.clear = () => {
      localStorage.clear()
      console.log("Local storage cleared");
    };
  }
}());