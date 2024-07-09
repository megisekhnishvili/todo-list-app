import React from 'react';

const BacklogList = React.memo(({ tasks, onMoveToInProgress }) => {
  return (
    <div className="backlog-list">
      <h2>Backlog</h2>
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

export default BacklogList;
