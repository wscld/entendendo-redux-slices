export const HeaderComponent = ({ todoText, setTodoText, addTodo }: any) => {
  return (
    <>
      <input
        onChange={(val) => {
          setTodoText(val.target.value);
        }}
      />
      <button onClick={() => addTodo(todoText)}>Adicionar</button>
    </>
  );
};
