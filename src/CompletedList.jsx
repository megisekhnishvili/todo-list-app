import React from 'react';

const CompletedList = React.memo(({ tasks, onMoveToDo, onDeleteTask }) => {
  return (
    <div className="completed-list">
      <h2>Completed</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onMoveToDo(index)}>Move to To-Do</button>
            <button onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CompletedList;
