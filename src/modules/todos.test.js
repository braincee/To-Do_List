/**
 * @jest-environment jsdom
 */

import ToDos from './todos.js';

document.body.innerHTML = '<div class="display"></div>';

// Testing Add Item Todo
describe('Testing Add Item', () => {
  test('Adding todo to array not to be null', () => {
    const todo = new ToDos();
    todo.addTodo('WakeUp', false, 0);

    expect(todo.length).not.toBeNull();
  });
  it('Adding todo to return details property', () => {
    const todo = new ToDos();
    todo.addTodo('Sleep', true, 1);

    expect(todo.todos[1].details).toBe('Sleep');
  });
  it('Adding todo to return boolean', () => {
    const todo = new ToDos();
    todo.addTodo('Cook', true, 2);

    expect(todo.todos[2].completed).toEqual(true);
  });
});

// Testing Remove Item Todo
describe('Testing Remove Item', () => {
  it('Removing todo from array to be null', () => {
    const todo = new ToDos();
    todo.addTodo('Drive', false, 3);
    todo.deleteTodo(0);

    expect(todo.length).toBeUndefined();
  });
  it('Remove task, from a multiple added tasks, return description property', () => {
    const todo = new ToDos();
    todo.addTodo('Read', false, 4);
    todo.deleteTodo(3);

    expect(todo.todos[3].details).toEqual('Read');
  });
  it('Remove task, from a multiple added tasks, return length', () => {
    const todo = new ToDos();
    todo.addTodo('Pray', false, 4);
    todo.addTodo('Lunch', false, 5);
    todo.deleteTodo(3);

    expect(todo.todos).toHaveLength(5);
  });
});
