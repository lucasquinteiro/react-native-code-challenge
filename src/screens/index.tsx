import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Code Challenge!</Text>
    </View>
  );
};

export default HomeScreen;
