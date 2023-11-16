"use client";
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>

      <Image
      source={require('../Comps/Images/Herm.jpg')}
      style={styles.image}
      />
      
      <View style={styles.spacer} />
      
      <Button
        title="Go to To-Dos"
        onPress={() => navigation.navigate('Todos')}
        color="#000" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#f7f7f7', 
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center', 
    color: '#333', 
  },
  spacer: {
    flex: 1, 
    justifyContent: 'center', 
  },
  imageContainer: {
    flex: 1, 
    justifyContent: 'center',  },

  image: {
    width: 350, 
    height: 450, 
    alignSelf: 'center',  },
});

export default HomeScreen;
