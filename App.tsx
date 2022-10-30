import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomeScreen from './src/screens';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#203354',
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
