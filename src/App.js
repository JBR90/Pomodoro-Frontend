import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import DisplayTodos from "./components/DisplayTodos";
import "./App.scss";
import DisplayAddTodo from "./components/DisplayAddTodo";
import todoService from "./services/todo";

function App() {
  const [number, setNumber] = useState(1);
  const [pomodoroState, setPomodoroState] = useState(true);

  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("25");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(1500);

  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "finish Backend",
      status: false,
    },
    {
      id: 2,
      todo: "Make a cup of tea",
      status: true,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // useEffect to get people from server
  useEffect(() => {
    todoService.getAll().then((initalTodo) => {
      setTodos(initalTodo);
    });
  }, []);

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

  const handleTimeStopButton = () => {
    setIsActive(!isActive);
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

  const addTodo = (e) => {
    e.preventDefault();

    const todoObject = {
      id: todos.length + 1,
      todo: newTodo,
      status: false,
    };
    todoService
      .create(todoObject)
      .then((returnedTodo) => {
        setTodos(todos.concat(returnedTodo));
        setNewTodo("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDeleteTodo = (e) => {
    console.log("delete");
    console.log(e.target.value);
    if (window.confirm(`Are you sure you want to delete ?`)) {
      todoService.deleteTodo(e.target.value);
      setTodos(todos.filter((todo) => todo.id.toString() !== e.target.value));
    }
    console.log(todos);
  };

  return (
    <div className="App">
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
      <DisplayTodos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
