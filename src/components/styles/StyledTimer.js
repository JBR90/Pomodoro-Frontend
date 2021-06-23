import styled from "styled-components";
import { colors } from "./colours";

export const StyledTimer = styled.div`
  border: solid black thin;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  transition: background 0.5s ease;
  background-color: ${(props) =>
    props.isActive ? colors.tomato : colors.break};
`;
