import React from 'react';

const DoneList = React.memo(({ tasks, onMoveBackToInProgress, onDeleteTask }) => {
  return (
    <div className="done-list">
      <h2>Done</h2>
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

export default DoneList;
