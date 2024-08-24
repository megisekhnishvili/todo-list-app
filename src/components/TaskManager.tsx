import React, { useEffect, useState } from 'react';
import { Task } from '../types';
import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService';

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<{ title: string; description: string }>({
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleCreateTask = async () => {
    if (newTask.title && newTask.description) {
      const task = await createTask({ ...newTask, completed: false });
      setTasks([...tasks, task]);
      setNewTask({ title: '', description: '' });
    }
  };

  const handleUpdateTask = async (task: Task) => {
    const updatedTask = await updateTask({ ...task, completed: !task.completed });
    setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={handleCreateTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => handleUpdateTask(task)}>
              {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
