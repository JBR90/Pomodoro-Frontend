import styled from "styled-components";
import { colors } from "./colours";

export const StyledTimerHeader = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    margin: 20px;
  }

  button {
    font-size: 20px;
    margin: 10px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
