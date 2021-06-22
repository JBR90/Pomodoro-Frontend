import Login from "./Login";
import Togglable from "./Togglable";
import { StyledHeader } from "./styles/StyledHeader";
import tomatoImg from "../images/tomato.png";

const Header = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  handleLogout,
  handleSignUp,
  user,
  handleResetTimer,
}) => {
  return (
    <StyledHeader>
      <div className="container">
        <img
          onClick={(e) => handleResetTimer(e)}
          className="tomato"
          src={tomatoImg}
          alt=""
        />
        <p>Reset Timer</p>
      </div>
      {/* <div className="login">
        <Togglable user={user} buttonLabel="login">
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            handleSignUp={handleSignUp}
            user={user}
          />
        </Togglable>
      </div> */}
      <h1>Pomodoro Todo</h1>
      <div className="container">
        <img className="tomato" src={tomatoImg} alt="" />
        <p>Login / Signup</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
