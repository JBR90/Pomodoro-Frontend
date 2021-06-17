import DisplayTodo from "./DisplayTodo";
import { StyledTodos } from "./styles/StyledTodos";
const DisplayTodos = ({ todos, handleDeleteTodo, handleTodoStatus }) => {
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
          handleTodoStatus={handleTodoStatus}
        />
      ))}
    </StyledTodos>
  );
};

export default DisplayTodos;
