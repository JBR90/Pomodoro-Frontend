import styled from "styled-components";
import { colors } from "./colours";

export const StyledAddTodo = styled.div`
  margin: auto;
  width: 80%;
  margin-bottom: 20px;
  form {
    /* border: solid black thin; */
    display: flex;
    padding: 10px;

    input {
      width: 100%;
      padding: 10px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      border: none;
    }
    button {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      padding: 10px 15px;
      margin: 0px 10px 0px 0px;
      white-space: nowrap;
      border: none;
    }
  }
`;
