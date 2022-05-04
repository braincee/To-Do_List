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
  it('Adding new task', () => {
    const todo = new ToDos();
    todo.addTodo('Practice', false, 1);

    expect(todo.todos[1].details).toEqual('Practice');
  });
  it('Adding todo to return details property', () => {
    const todo = new ToDos();
    todo.addTodo('Sleep', false, 2);

    expect(todo.todos[2].details).toBe('Sleep');
  });
  it('Adding todo to return boolean', () => {
    const todo = new ToDos();
    todo.addTodo('Cook', true, 3);

    expect(todo.todos[3].completed).toEqual(true);
  });
  it('Adding todo to return index', () => {
    const todo = new ToDos();
    todo.addTodo('Singing', false, 4);

    expect(todo.todos[4].index - 1).toEqual(4);
  });
});

// Testing Remove Item Todo
describe('Testing Remove Item', () => {
  it('Removing todo from array to be null', () => {
    const todo = new ToDos();
    todo.addTodo('Drive', false, 5);
    todo.deleteTodo(0);

    expect(todo.length).toBeUndefined();
  });
  it('Removing todo from a multiple added todos which returns details', () => {
    const todo = new ToDos();
    todo.addTodo('Read', false, 4);
    todo.deleteTodo(5);

    expect(todo.todos[5].details).toEqual('Read');
  });
  it('Removing  todo from a multiple added todos which return length', () => {
    const todo = new ToDos();
    todo.addTodo('Pray', false, 4);
    todo.addTodo('Lunch', false, 5);
    todo.deleteTodo(3);

    expect(todo.todos).toHaveLength(7);
  });
});
