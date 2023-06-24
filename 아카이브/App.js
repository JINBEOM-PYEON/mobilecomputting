import React from 'react';
import { View, Text } from 'react-native';
import { AppProvider } from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <Counter />
    </AppProvider>
  );
};

export default App;
