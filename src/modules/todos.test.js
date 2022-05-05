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
    todo.deleteTodo(5);

    expect(todo[5]).toBeUndefined();
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
  it('remove', () => {
    const todo = new ToDos();
    todo.deleteTodo(5);
    expect(todo.todos[5].details).toEqual('Lunch');
  });
});
// testing for editing todo

describe('Test for Edit Todo', () => {
  it('Editing todo to return new details', () => {
    const todo = new ToDos();
    todo.addTodo('Walking', false, 6);
    todo.todos[6].details = 'Brushing';

    expect(todo.todos[6].details).toMatch('Brushing');
  });
  it('Editing todo to return new details', () => {
    const todo = new ToDos();
    todo.todos[0].details = 'Praying';

    expect(todo.todos[0].details).toMatch('Praying');
  });

  it('Editing todo to return new index property', () => {
    const todo = new ToDos();
    todo.todos[1].index = 3;

    expect(todo.todos[1].index).toEqual(3);
  });
});

// Testing for updating todo booleans

describe('Test for Upadate Todo Booleans', () => {
  it('Updating todo to return boolean true', () => {
    const todo = new ToDos();
    todo.addTodo('Watching', true, 7);
    todo.todos[7].completed = true;

    expect(todo.todos[7].completed).toBe(true);
  });
  it('Updating todo to return boolean false', () => {
    const todo = new ToDos();
    todo.todos[5].completed = false;

    expect(todo.todos[5].completed).toEqual(false);
  });
});
// Testing for clearing all completed todo.
describe('Test for Clear All Completed Todo', () => {
  it('Test for remove todo with boolean true', () => {
    const todo = new ToDos();
    todo.addTodo('Jogging', true, 8);
    todo.clearCompleted();

    expect(todo.todos.length).toBe(6);
  });
  it('Test for remove todo with boolean true', () => {
    const todo = new ToDos();
    todo.addTodo('Breakfast', true, 9);
    todo.addTodo('Laundry', true, 10);
    todo.deleteTodo(4);
    todo.addTodo('Travelling', false, 11);
    todo.clearCompleted();
    expect(todo.todos.length).toBe(6);
  });
  it('Test for remove todo with boolean true', () => {
    const todo = new ToDos();
    todo.addTodo('Rafting', true, 12);
    todo.deleteTodo(10);
    todo.addTodo('Cycling', true, 13);
    todo.deleteTodo(12);
    todo.clearCompleted();

    expect(todo.todos.length).toBe(5);
  });
});
