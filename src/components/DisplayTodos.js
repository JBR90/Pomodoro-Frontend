import DisplayTodo from "./DisplayTodo";
import { StyledTodos } from "./styles/StyledTodos";
const DisplayTodos = ({ todos, handleDeleteTodo }) => {
  console.log(todos);
  return (
    <StyledTodos>
      {todos.map((todo) => (
        <DisplayTodo
          key={todo._id}
          todo={todo.todo}
          status={todo.status}
          id={todo.id}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </StyledTodos>
  );
};

export default DisplayTodos;
