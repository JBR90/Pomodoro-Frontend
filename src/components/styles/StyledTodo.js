import styled from "styled-components";
import { colors } from "./colours";

export const StyledTodo = styled.div`
  border: solid black thin;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: auto;
  margin-bottom: 10px;
  width: 60%;

  background-color: ${(props) =>
    props.status ? colors.break : colors.tomatoLight};
  button {
    border: none;
    margin-left: 10px;
    border-radius: 50%;
    padding: 6px;

    :hover {
      transform: scale(1.1);
    }
  }
  .todo {
    text-decoration: ${(props) => (props.status ? "line-through" : "none")};
  }
  ${(props) => (props.status ? "" : ":hover { opacity:0.8}")};
`;
