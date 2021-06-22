import styled from "styled-components";
import { colors } from "./colours";

export const StyledTimer = styled.div`
  border: solid black thin;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;

  transition: background 0.5s ease;
  background-color: ${(props) =>
    props.isActive ? colors.tomato : colors.break};
`;
