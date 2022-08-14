import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StackNavigator from './js/navigation/StackNavigator';


const App = () => {
  
  return (
    <>
      <StackNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  centered: {
    marginHorizontal: 100,
    marginVertical: 200
  }
});

export default App;
