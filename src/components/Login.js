import { StyledLogin } from "./styles/StyledLogin";
import { StyledButton } from "./styles/StyledButtons";
import React, { useEffect, useState, useRef } from "react";

const Login = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  handleLogout,
  handleSignUp,
  user,
  message,
}) => {
  const node = useRef();

  // const [open, setOpen] = useState(false);

  // const handleClick = (e) => {
  //   if (node.current.contains(e.target)) {
  //     // inside click
  //     return;
  //   }
  //   // outside click
  //   setOpen(false);
  // };

  // const handleChange = (selectedValue) => {
  //   onchange(selectedValue);
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  const loginForm = () => (
    <form ref={node} onSubmit={handleLogin}>
      <div className="auth">
        <input
          type="text"
          value={username}
          name="Username"
          placeholder="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className="auth">
        <input
          type="password"
          value={password}
          name="Password"
          placeholder={"password"}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="login-btns">
        <button type="submit">Login</button>
        <button onClick={(e) => handleSignUp(e)}>Sign Up</button>
      </div>
      <span className="msg">{message}</span>
    </form>
  );

  const loggedIn = () => (
    <div>
      <p>{`Hi ${user.username}`}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );

  return (
    <StyledLogin>
      {user === null && loginForm()}
      {user !== null && loggedIn()}
    </StyledLogin>
  );
};

export default Login;
