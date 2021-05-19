import { StyledTodo } from "./styles/StyledTodo";

const DisplayTodo = ({ todo, id, status, handleDeleteTodo }) => {
  console.log("from todo");
  console.log(todo);

  return (
    <div>
      <StyledTodo>
        <span>{`Todo: ${id} ${todo}`}</span>
        <span>
          {`${status}`}
          <button value={id} onClick={handleDeleteTodo}>
            x
          </button>{" "}
        </span>
      </StyledTodo>
    </div>
  );
};

export default DisplayTodo;
