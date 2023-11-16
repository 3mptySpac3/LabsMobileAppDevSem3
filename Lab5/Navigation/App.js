import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import ToDoListScreen from './Screens/ToDoListScreen';
import AboutScreen from './Screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Todos" component={ToDoListScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
});
