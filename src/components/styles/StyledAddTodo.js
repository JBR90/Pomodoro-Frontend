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
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
      border: none;
    }
    button {
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
      padding: 10px 15px;
      margin: 0px 10px 0px 0px;
      white-space: nowrap;
      border: none;
    }
  }
`;
