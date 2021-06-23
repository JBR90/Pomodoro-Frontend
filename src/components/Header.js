import Login from "./Login";
import Togglable from "./Togglable";
import { StyledHeader } from "./styles/StyledHeader";
import tomatoImg from "../images/tomato.png";
import React, { useRef } from "react";

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
  setLoginVisibility,
  message,
}) => {
  const loginRef = useRef();

  const handleLoginToggle = () => {
    loginRef.current.toggleVisibility();
  };

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
      <h1>Pomodoro Todo</h1>
      <div className="container">
        <img
          onClick={handleLoginToggle}
          className="tomato"
          src={tomatoImg}
          alt=""
        />
        <p>Login / Signup</p>
        <div className="login">
          <Togglable ref={loginRef} user={user} buttonLabel="login">
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              handleSignUp={handleSignUp}
              user={user}
              message={message}
            />
          </Togglable>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
