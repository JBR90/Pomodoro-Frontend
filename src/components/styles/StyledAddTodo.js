import styled from "styled-components";
import { colors } from "./colours";

export const StyledAddTodo = styled.div`
  margin: auto;
  width: 70%;
  margin-bottom: 20px;
  form {
    /* border: solid black thin; */
    display: flex;
    padding: 10px;

    input {
      width: 100%;
      padding: 10px;
    }
    button {
      padding: 10px 15px;
      margin: 0px 10px 0px 0px;
      white-space: nowrap;
    }
  }
`;
