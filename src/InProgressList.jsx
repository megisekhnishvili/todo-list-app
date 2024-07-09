import React from 'react';

const InProgressList = React.memo(({ tasks, onMoveToDone }) => {
  return (
    <div className="inprogress-list">
      <h2>In Progress</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onMoveToDone(index)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default InProgressList;
