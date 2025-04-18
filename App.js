import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='#ff3f48'
        barStyle="light-content"
      />
      <Routes />
    </NavigationContainer>
  );
}