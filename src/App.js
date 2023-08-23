import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Tasklist from "./Components/Tasklist/Tasklist";

/* const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "Pendente"
}; */

let idAcc = 0;

const generateid = () => {
  idAcc += 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateid(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          ondeleteTask={deleteTask}
        />
        <Tasklist
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          ondeleteTask={deleteTask}
        />
        <Tasklist
          title="Completo"
          taskState="Completo"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Completo")}
          onTaskUpdate={updateTask}
          ondeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
