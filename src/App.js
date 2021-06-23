import React, { useState, useEffect, useRef } from "react";
import Timer from "./components/Timer";
import DisplayTodos from "./components/DisplayTodos";
import "./App.scss";
import DisplayAddTodo from "./components/DisplayAddTodo";
import todoService from "./services/todo";
import Login from "./components/Login";
import loginService from "./services/login";
import userService from "./services/users";
import Togglable from "./components/Togglable";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(1);
  const [pomodoroState, setPomodoroState] = useState(true);

  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("25");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(1500);

  const [message, setMessage] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loginVisibility, setLoginVisibility] = useState(false);

  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   todo: "finish Backend",
    //   status: false,
    // },
    // {
    //   id: 2,
    //   todo: "Make a cup of tea",
    //   status: true,
    // },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const loginRef = useRef();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedTodoAppUser");
    console.log("loggedUser local stroage", loggedUserJSON);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      todoService.setToken(user.token);
    }
  }, []);

  // useEffect to get todo from server
  useEffect(() => {
    if (user != null) {
      (async function getAll() {
        console.log("get todos from server");
        const getTodos = await todoService.getAll();
        getTodos ? setTodos(getTodos) : setTodos([{}]);
      })();
    } else {
      return null;
    }

    // console.log("triggered");
    // todoService.getAll().then((initalTodo) => {
    //   initalTodo ? setTodos(initalTodo) : setTodos([{}]);
    // });
  }, [user]);

  useEffect(() => {
    let intervalId;
    if (counter === -1) {
      setIsActive(false);
    }
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const handleTimeButton = () => {
    setIsActive(!isActive);
    setCounter(1500);
    setMinute("25");
    setSecond("00");
    setIsActive(true);
  };

  const handleMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handleTimeStopButton = () => {
    setIsActive(!isActive);
  };

  const handleResetTimer = (e) => {
    console.log(e.target);
    // e.target.style.width = "20px";
    setIsActive(false);
    setCounter(1500);
    setMinute("25");
    setSecond("00");
    setNumber(1);
  };

  const handleClick = (e) => {
    pomodoroState ? setNumber(number + 1) : setNumber(number);
    if (!pomodoroState) {
      handleTimeButton();
    } else {
      setMinute("05");
      setSecond("00");
      setCounter(300);
      // setPomodoroState(true);
      // return;
    }

    handlePomodoroState();
  };

  const handlePomodoroState = () => {
    pomodoroState ? setPomodoroState(false) : setPomodoroState(true);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must login to create a todo");
      return null;
    }

    const todoObject = {
      // id: todos.length + 1,
      todo: newTodo,
      status: false,
    };
    try {
      const returnedTodo = await todoService.create(todoObject);
      setTodos(todos.concat(returnedTodo));
      setNewTodo("");
    } catch (err) {
      console.log(err);
    }
  };
  const handleTodoStatus = async (id) => {
    console.log(id);
    try {
      const todo = todos.find((todo) => todo.id.toString() === id);
      todo.status ? (todo.status = false) : (todo.status = true);
      console.log("update todo", todo);
      const updatedTodo = await todoService.updateTodo(id, todo);
      setTodos(todos.map((todo) => (todo.id !== id ? todo : updatedTodo)));
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDeleteTodo = async (e) => {
    try {
      if (window.confirm(`Are you sure you want to delete ?`)) {
        console.log(e.target.value);
        await todoService.deleteTodo(e.target.value.toString());
        setTodos(todos.filter((todo) => todo.id.toString() !== e.target.value));
      }
    } catch (err) {
      console.log(err);
    }

    // console.log("delete");
    // console.log(e.target.value);
    // if (window.confirm(`Are you sure you want to delete ?`)) {
    //   todoService.deleteTodo(e.target.value);
    //   setTodos(todos.filter((todo) => todo.id.toString() !== e.target.value));
    // }
    // console.log(todos);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Loggin in with", username, password);
    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedTodoAppUser", JSON.stringify(user));

      todoService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
      // console.log("logged in", user);
    } catch (exception) {
      handleMessage("Wrong credentials");
      // setMessage("Wrong credentials");
      console.log("Wrong Credentials");
      // setTimeout(() => {
      //   setMessage(null);
      // }, 5000);
    }
  };

  const handleLogout = () => {
    console.log("handleLogout");
    window.localStorage.clear();
    setTodos([]);
    setUser(null);
    console.log("handle logout", todos);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await userService.signup({
        username,
        password,
      });
      handleMessage(`${user.username}, your account is created`);
      console.log(user);
    } catch (err) {
      handleMessage("Signup failed - try again");
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        handleSignUp={handleSignUp}
        user={user}
        handleResetTimer={handleResetTimer}
        setLoginVisibility={setLoginVisibility}
        message={message}
      />
      {/* <Togglable user={user} buttonLabel="login">
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
      </Togglable> */}

      <Timer
        state={pomodoroState}
        number={number}
        minute={minute}
        second={second}
        isActive={isActive}
        handleTimeButton={handleTimeButton}
        handleClick={handleClick}
      />
      <DisplayAddTodo
        handleNewTodo={handleNewTodo}
        newTodo={newTodo}
        addTodo={addTodo}
      ></DisplayAddTodo>
      <DisplayTodos
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleTodoStatus={handleTodoStatus}
      />
    </div>
  );
}

export default App;
