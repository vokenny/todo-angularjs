(function () {
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoDataService', TodoDataService);

  function TodoDataService() {
    const todoData = this;

    todoData.getTodosArr = () => {
      const todosStorage = localStorage.getItem('todos')

      return todosStorage ? JSON.parse(todosStorage) : [];
    }

    todoData.addTodo = (todoItem) => {
      const todos = todoData.getTodosArr();
      const newTodos = [todoItem, ...todos];

      localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    todoData.updateTodo = (idx, updatedTodo) => {
      const todos = todoData.getTodosArr();
      const newTodos = [...todos].map((todo, index) => index === idx ? updatedTodo : todo);

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