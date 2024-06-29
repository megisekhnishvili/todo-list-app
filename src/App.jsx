import React, { useState, useCallback } from 'react';
import ToDoList from './ToDoList';
import CompletedList from './CompletedList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = useCallback(() => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  }, [newTask]);

  const handleFinishTask = useCallback((index) => {
    setTasks((prevTasks) => {
      const finishedTask = prevTasks[index];
      return prevTasks.filter((_, i) => i !== index);
    });
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, tasks[index]]);
  }, [tasks]);

  const handleMoveToDo = useCallback((index) => {
    setCompletedTasks((prevCompletedTasks) => {
      const taskToMove = prevCompletedTasks[index];
      return prevCompletedTasks.filter((_, i) => i !== index);
    });
    setTasks((prevTasks) => [...prevTasks, completedTasks[index]]);
  }, [completedTasks]);

  const handleDeleteTask = useCallback((index) => {
    setCompletedTasks((prevCompletedTasks) => prevCompletedTasks.filter((_, i) => i !== index));
  }, []);

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
