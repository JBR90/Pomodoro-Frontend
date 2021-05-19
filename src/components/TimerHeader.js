import { StyledTimerHeader } from "./styles/StyledTimerHeader";

const TimerHeader = ({ state, number, handleClick }) => {
  return (
    <StyledTimerHeader isActive={state}>
      <header>
        <h3>{state ? `Pomodoro # ${number}` : "Take a break"}</h3>
        <button onClick={handleClick}>>></button>
      </header>
    </StyledTimerHeader>
  );
};

export default TimerHeader;
