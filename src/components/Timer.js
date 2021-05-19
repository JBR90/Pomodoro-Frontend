import TimerHeader from "./TimerHeader";
import CountDown from "./CountDown";
import { StyledTimer } from "./styles/StyledTimer";

const Timer = ({
  state,
  number,
  handleClick,
  minute,
  second,
  handleTimeButton,
  isActive,
}) => {
  return (
    <StyledTimer isActive={state}>
      <TimerHeader
        state={state}
        number={number}
        handleClick={handleClick}
      ></TimerHeader>
      <CountDown
        minute={minute}
        second={second}
        handleTimeButton={handleTimeButton}
        isActive={isActive}
        state={state}
      />
    </StyledTimer>
  );
};

export default Timer;
