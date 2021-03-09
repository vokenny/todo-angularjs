(function () {
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoDataService', TodoDataService);

  function TodoDataService() {
    const todoData = this;
    var todosStorage = JSON.parse(localStorage.getItem('todos'));

    todoData.getTodosArr = () => todosStorage ? todosStorage : [];

    function refreshStorage() {
      todosStorage = JSON.parse(localStorage.getItem('todos'));
    }

    todoData.addTodo = (todoItem) => {
      const newTodo = {
        text: todoItem,
        isDone: false
      };

      const todos = todoData.getTodosArr();
      const newTodos = [newTodo, ...todos];

      localStorage.setItem('todos', JSON.stringify(newTodos));
      refreshStorage();
    }

    todoData.updateTodo = (idx, updatedTodo) => {
      const todos = todoData.getTodosArr();
      const newTodos = [...todos].map((todo, index) => {
        if (index === idx) {
          return updatedTodo ? { text: updatedTodo, isDone: false } : { text: todo.text, isDone: !(todo.isDone) };
        } else {
          return todo;
        }
      });

      localStorage.setItem('todos', JSON.stringify(newTodos));
      refreshStorage();
    }

    todoData.deleteTodo = (idx) => {
      const todos = todoData.getTodosArr();
      const newTodos = [...todos].filter((_, index) => index !== idx);

      localStorage.setItem('todos', JSON.stringify(newTodos));
      refreshStorage();
    }

    todoData.clear = () => {
      localStorage.clear();
      refreshStorage();
    }
  }
}());