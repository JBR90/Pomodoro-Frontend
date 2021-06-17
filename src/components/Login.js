import { StyledLogin } from "./styles/StyledLogin";

const Login = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  handleLogout,
  handleSignUp,
  user,
}) => {
  const loginForm = () => (
    <form onSubmit={handleLogin}>
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
      <div>
        <button type="submit">Login"</button>
        <button onClick={handleSignUp}>Sign Up"</button>
      </div>
    </form>
  );

  const loggedIn = () => (
    <div>
      <h1>{`Hi ${user.username}`}</h1>
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
