import { StyledCountdown } from "./styles/StyledCountDown";

const CountDown = ({ minute, second, handleTimeButton, isActive, state }) => {
  return (
    <StyledCountdown state={state}>
      <h1>{`${minute}:${second}`}</h1>

      <button onClick={handleTimeButton}>
        {isActive ? "Restart" : "Start"}
      </button>
    </StyledCountdown>
  );
};

export default CountDown;
