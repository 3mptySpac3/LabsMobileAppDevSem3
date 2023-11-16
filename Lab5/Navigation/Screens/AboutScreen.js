"use client";

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  const name = 'Jean-Pierre Nde-Forgwang';
  const email = 'Random@gmail.com';
  const major = 'Software Development';
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };




  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Me</Text>
      <View style={styles.infoContainer}>
      <TouchableOpacity onPress={handlePress}>
          <Text style={isPressed ? [styles.infoTextName, styles.pressed] : styles.infoTextName}>
            Name: {name}
          </Text>
        </TouchableOpacity>   

        {isPressed && (
        <Text style={styles.messageText}> Congratulations! You have found an Easter Egg!</Text>
        )}
        <Text style={styles.infoText}>Email: {email}</Text>
        <Text style={styles.infoText}>Major: {major}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7', 
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    alignSelf: 'stretch', 
    padding: 20,
    backgroundColor: '#fff', 
    borderRadius: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10, 
  },
  infoTextName: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10, 
    color: 'blue',
  },
  pressed:{
    color: 'black',
  },
  messageText: {
    fontSize: 15,
    color: 'green',
    marginBottom: 10,
  },
});

export default AboutScreen;
