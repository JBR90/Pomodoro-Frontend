import { StyledTodo } from "./styles/StyledTodo";

const DisplayTodo = ({
  todo,
  id,
  status,
  handleDeleteTodo,
  handleTodoStatus,
}) => {
  // console.log("from todo");
  // console.log(todo);

  return (
    <div>
      <StyledTodo status={status} onClick={() => handleTodoStatus(id)}>
        <span className="todo">{`🍅 : ${todo}`}</span>
        <span>
          {/* {`${status}`} */}
          <button value={id} onClick={handleDeleteTodo}>
            ❌
          </button>{" "}
        </span>
      </StyledTodo>
    </div>
  );
};

export default DisplayTodo;
