(function () {
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoDataService', TodoDataService);

  function TodoDataService() {
    const todoData = this;
    var todosStorage = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

    todoData.getTodosArr = () => todosStorage;

    function updateStorage() {
      const storage = localStorage.getItem('todos');
      todosStorage = storage ? JSON.parse(storage) : [];
    }

    todoData.addTodo = (todoItem) => {
      const newTodo = {
        text: todoItem,
        isDone: false,
        isUpdating: false,
      };

      const todos = todoData.getTodosArr();
      const newTodos = [newTodo, ...todos];

      localStorage.setItem('todos', JSON.stringify(newTodos));
      updateStorage();
    }

    todoData.toggleUpdateMode = (idx) => {
      const todo = todoData.getTodosArr()[idx];
      todo.isUpdating = !todo.isUpdating;
    }

    todoData.toggleDoneState = (idx) => {
      const todo = todoData.getTodosArr()[idx];
      todo.isDone = !todo.isDone;
    }

    todoData.updateTodo = (idx, updatedTodoText) => {
      const todos = todoData.getTodosArr();
      const newTodos = [...todos].map((todo, index) => {
        if (index === idx) {
          return {
            ...todo,
            text: updatedTodoText,
          }
        }

        return todo;
      });

      localStorage.setItem('todos', JSON.stringify(newTodos));
      updateStorage();
    }

    todoData.deleteTodo = (idx) => {
      const todos = todoData.getTodosArr();
      const newTodos = [...todos].filter((_, index) => index !== idx);

      localStorage.setItem('todos', JSON.stringify(newTodos));
      updateStorage();
    }

    todoData.clear = () => {
      localStorage.clear();
      updateStorage();
    }
  }
}());