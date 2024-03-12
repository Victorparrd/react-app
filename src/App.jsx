import React, { useState } from 'react';
import MainItem from './MainItem';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemSelected = (title) => {
    if (selectedItem === title) {
      setSelectedItem('');
    } else {
      setSelectedItem(title);
    }
  };

  return (
    <div>
      <MainItem
        title="Alaska"
        subItems={['Bascom']}
        onItemSelected={handleItemSelected}
        isExpanded={selectedItem === 'Alaska'}
        closeOtherItems={() => setSelectedItem('')}
      />
      <MainItem
        title="Connecticut"
        subItems={null}
        onItemSelected={handleItemSelected}
        isExpanded={selectedItem === 'Connecticut'}
        closeOtherItems={() => setSelectedItem('')}
      />
      <MainItem
        title="Wisconsin"
        subItems={['Oretta', 'Konterra', 'Guthrie']}
        onItemSelected={handleItemSelected}
        isExpanded={selectedItem === 'Wisconsin'}
        closeOtherItems={() => setSelectedItem('')}
      />
      <MainItem
        title="Nebraska"
        subItems={['Jennings', 'Harviell', 'Alfarata', 'Bluffview', 'Escondida']}
        onItemSelected={handleItemSelected}
        isExpanded={selectedItem === 'Nebraska'}
        closeOtherItems={() => setSelectedItem('')}
      />
      <MainItem
        title="Georgia"
        subItems={null}
        onItemSelected={handleItemSelected}
        isExpanded={selectedItem === 'Georgia'}
        closeOtherItems={() => setSelectedItem('')}
      />
    </div>
  );
};

export default App;
