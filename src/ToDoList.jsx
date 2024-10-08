import React from 'react';

const ToDoList = React.memo(({ tasks, onMoveToInProgress }) => {
  return (
    <div className="todo-list">
      <h2>To Do</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onMoveToInProgress(index)}>In Progress</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ToDoList;
