(function () {
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoDataService', TodoDataService);

  function TodoDataService() {
    const todoData = this;

    todoData.getTodosArr = () => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

    todoData.addTodo = (todoItem) => {
      const todos = todoData.getTodosArr();
      const newTodos = [...todos, todoItem];
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    todoData.deleteTodo = (idx) => {
      const todos = todoData.getTodosArr();
      const newTodos = [...todos].filter((_, index) => index !== idx);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    todoData.clear = () => localStorage.clear();
  }
}());