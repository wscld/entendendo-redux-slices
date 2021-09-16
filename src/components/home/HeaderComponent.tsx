export const HeaderComponent = ({ todoText, setTodoText, addTodo }: any) => {
  return (
    <div className="header">
      <input
        placeholder="todo..."
        onChange={(val) => {
          setTodoText(val.target.value);
        }}
      />
      <button onClick={() => addTodo(todoText)}>Adicionar</button>
    </div>
  );
};
