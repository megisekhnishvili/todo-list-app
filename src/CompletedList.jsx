import React from 'react';

const CompletedList = React.memo(({ tasks, onMoveBackToInProgress, onDeleteTask }) => {
  return (
    <div className="completed-list">
      <h2>Completed</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onMoveBackToInProgress(index)}>In Progress</button>
            <button onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CompletedList;


