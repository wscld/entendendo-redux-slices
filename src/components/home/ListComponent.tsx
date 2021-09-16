import { ToDo } from "../../models/todo.model";

export const ListComponent = ({ todos, remover }: any) => {
  const todosList = todos.map((todo: ToDo) => (
    <li key={todo.id}>
      <div className="item">
        <span>{todo.text}</span>
        <div className="button" onClick={() => remover(todo)}>
          deletar
        </div>
      </div>
    </li>
  ));

  return <ul>{todosList}</ul>;
};
