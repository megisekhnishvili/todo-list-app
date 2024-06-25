import React, { useState } from 'react';
import ToDoList from './ToDoList';
import CompletedList from './CompletedList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleFinishTask = (index) => {
    const finishedTask = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, finishedTask]);
  };

  const handleMoveToDo = (index) => {
    const taskToMove = completedTasks[index];
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
    setTasks([...tasks, taskToMove]);
  };

  const handleDeleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-columns">
        <ToDoList tasks={tasks} onFinishTask={handleFinishTask} />
        <CompletedList
          tasks={completedTasks}
          onMoveToDo={handleMoveToDo}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default App;
