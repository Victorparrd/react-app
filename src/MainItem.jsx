import React, { useState } from 'react';
import './MainItem.css';
import SubItem from './SubItem';

const MainItem = ({ title, subItems, onItemSelected, isExpanded, closeOtherItems }) => {
  const [expanded, setExpanded] = useState(isExpanded || false);

  const handleClick = () => {
    setExpanded(!expanded);
    onItemSelected(title);
    closeOtherItems();
  };

  return (
    <div
      className={`main-item ${(!subItems || subItems.length === 0) && !expanded ? 'empty' : ''}`}
      onClick={handleClick}
    >
      {title}
      {expanded && subItems && subItems.map((subItem, index) => (
        <SubItem key={index} title={subItem} />
      ))}
    </div>
  );
};

export default MainItem;
