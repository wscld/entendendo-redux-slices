import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToDo } from "../../models/todo.model";
import { actions, SliceState } from "../../store/todoSlice";
import { HeaderComponent } from "./HeaderComponent";
import { ListComponent } from "./ListComponent";

export const HomeContainer = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state: SliceState) => state.todos);

  const addTodo = (text: string) => {
    const todo = new ToDo(text);
    dispatch(actions.addTodo(todo));
  };

  const rmTodo = (todo: ToDo) => {
    dispatch(actions.removeTodo(todo));
  };

  return (
    <>
      <HeaderComponent
        todoText={todoText}
        setTodoText={setTodoText}
        addTodo={addTodo}
      ></HeaderComponent>
      <ListComponent todos={todos} remover={rmTodo}></ListComponent>
    </>
  );
};
