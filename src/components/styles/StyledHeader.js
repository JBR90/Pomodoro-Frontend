import styled from "styled-components";
import { colors } from "./colours";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .container {
    display: flex;
    flex-direction: column;
    /* margin: 10px; */

    justify-content: center;
    align-items: center;
    justify-items: center;
    /* border: solid black; */
    /* img {
      margin: 10px;
    } */
    p {
      padding: 8px;
      font-size: 15px;
    }
  }
  h1 {
    /* padding-top: 30px; */
    /* border: solid black; */
    font-size: 60px;
    text-align: center;
  }
  .tomato {
    margin: 10px;
    width: 50px;
    :hover {
      transform: scale(1.1);
    }
    :active {
      transform: scale(0.7);
    }
  }

  /* display: grid;
  grid-template-columns: 1fr repeat(3, auto) 1fr;
  grid-column-gap: 5px;
  justify-items: center;
  padding: 0px;
  margin: 0px;
  h1 {
    grid-column-start: 3;
  }
  .login {
    grid-column-start: 3;
  } */
`;
