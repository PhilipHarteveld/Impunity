import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
