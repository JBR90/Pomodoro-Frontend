import styled from "styled-components";
import { colors } from "./colours";
import { Flex } from "./Mixins";

export const StyledLogin = styled.div`
  /* position: fixed; */
  /* background-color: ${(props) => colors.tomato}; */
  /* top: 15px;
  right: 10px; */
  width: 200px;
  border: solid black thin;
  border-radius: 10px;
  padding: 0px 15px 10px 15px;

  input {
    text-align: center;
    width: 100%;
  }
  ::placeholder {
    text-align: center;
    color: blue;
    opacity: 1; /* Firefox */
  }
  .cancel-btn {
    /* position: fixed; */
    /* top: 15px;
    right: 0; */
    float: right;
    padding: 0;
    /* margin: 0; */
    background: none;
    border: none;
    cursor: pointer;
  }
  .login-btns {
    display: grid;

    grid-template-columns: 1fr 1fr;
    /* justify-content: space-around; */
    button {
      /* color: ${(props) => colors.text1}; */
    }
  }
`;
