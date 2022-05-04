export default class BooleanTodo {
    static updateStatus = (todo, status) => {
      todo.completed = status;
    };
}