import React from 'react';
import './SubItem.css';

const SubItem = ({ title }) => {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent MainItem click event from firing
  };

  return (
    <div className="sub-item" onClick={handleClick}>
      {title}
    </div>
  );
};

export default SubItem;
