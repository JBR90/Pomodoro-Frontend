import { StyledAddTodo } from "./styles/StyledAddTodo";

const DisplayAddTodo = ({ handleNewTodo, newTodo, addTodo }) => {
  return (
    <StyledAddTodo>
      <form onSubmit={addTodo}>
        <button type="submit">Add</button>
        <input type="text" value={newTodo} onChange={handleNewTodo} />
      </form>
    </StyledAddTodo>
  );
};

export default DisplayAddTodo;
