import styled from "styled-components";

export const StyledCountdown = styled.div`

  margin: 0px;
  padding: 10px;
  display: flex;
  border-top: solid black thin;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  h1 {
    // border: solid black;
    margin: 0px;
    padding: 10px;
    font-size: 80px;

    text-align: center;
  }
  button {
    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
    background-color: #ffffff;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    color: #666666;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 8px 24px;
    margin-bottom: 10px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;
    visibility: ${(props) => (props.state ? "visible;" : "hidden;")}
  
    &:hover {
      background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
      background-color: #f6f6f6;
    }
  }
`;
