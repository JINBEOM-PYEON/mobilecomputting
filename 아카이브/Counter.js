import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppContext } from './AppContext';

const Counter = () => {
  const { count, increment } = useContext(AppContext);

  const handleIncrement = () => {
    increment();
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <View style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Increment</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
