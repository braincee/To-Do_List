import ToDos from './todos.js';

document.body.innerHTML = '<ul class=\'display\'></ul>';

describe('Test for adding', () => {
  it('Add task, array not to be null', () => {
    const todos = new ToDos();
    todos.addTodo('Morning', false, 0);
    expect(todos.length).not.toBeNull();
  });
});