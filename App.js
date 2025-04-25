import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';


export default function App() {
  const [items,setItems] = useState({});
  const handleSelectDate = (date,startTime, endTime) => {
    if (!items [date]){
      items[date] =[];
    }
    items[date].push({name:`${startTime} - ${endTime}`});
    setItems ({ items})
  }
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