import React, { useState, useCallback } from 'react';
import BacklogList from './BacklogList';
import InProgressList from './InProgressList';
import DoneList from './DoneList';
import './App.css';

const App = () => {
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = useCallback(() => {
    if (newTask.trim() !== '') {
      setBacklogTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  }, [newTask]);

  const handleMoveToInProgress = useCallback((index) => {
    const taskToMove = backlogTasks[index];
    setBacklogTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setInProgressTasks((prevTasks) => [...prevTasks, taskToMove]);
  }, [backlogTasks]);

  const handleMoveToDone = useCallback((index) => {
    const taskToMove = inProgressTasks[index];
    setInProgressTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setDoneTasks((prevTasks) => [...prevTasks, taskToMove]);
  }, [inProgressTasks]);

  const handleMoveBackToInProgress = useCallback((index) => {
    const taskToMove = doneTasks[index];
    setDoneTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setInProgressTasks((prevTasks) => [...prevTasks, taskToMove]);
  }, [doneTasks]);

  const handleDeleteTask = useCallback((index) => {
    setDoneTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="app-container">
      <h1>Task Management</h1>
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
        <BacklogList tasks={backlogTasks} onMoveToInProgress={handleMoveToInProgress} />
        <InProgressList tasks={inProgressTasks} onMoveToDone={handleMoveToDone} />
        <DoneList
          tasks={doneTasks}
          onMoveBackToInProgress={handleMoveBackToInProgress}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default App;
