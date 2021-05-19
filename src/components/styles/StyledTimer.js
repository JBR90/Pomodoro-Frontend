import styled from "styled-components";
import { colors } from "./colours";

export const StyledTimer = styled.div`
  border: solid black thin;
  border-radius: 2%;
  transition: background 0.5s ease;
  background-color: ${(props) =>
    props.isActive ? colors.tomato : colors.break};
`;
