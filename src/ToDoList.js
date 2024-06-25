import React from 'react';

const ToDoList = ({ tasks, onFinishTask }) => {
  return (
    <div className="todo-list">
      <h2>To Do</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onFinishTask(index)}>Finish</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
