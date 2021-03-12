(function () {
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoDataService', TodoDataService);

  function TodoDataService() {
    const todoData = this;
    var todosCache = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

    todoData.getTodosArr = () => todosCache;

    function updateCache() {
      const storage = localStorage.getItem('todos');
      todosCache = storage ? JSON.parse(storage) : [];
    }

    todoData.addTodo = (todoItem) => {
      const newTodo = {
        text: todoItem,
        isDone: false
      };

      const todos = todoData.getTodosArr();
      const newTodos = [newTodo, ...todos];

      localStorage.setItem('todos', JSON.stringify(newTodos));
      updateCache();
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
      updateCache();
    }

    todoData.deleteTodo = (idx) => {
      const todos = todoData.getTodosArr();
      const newTodos = [...todos].filter((_, index) => index !== idx);

      localStorage.setItem('todos', JSON.stringify(newTodos));
      updateCache();
    }

    todoData.clear = () => {
      localStorage.clear();
      updateCache();
    }
  }
}());