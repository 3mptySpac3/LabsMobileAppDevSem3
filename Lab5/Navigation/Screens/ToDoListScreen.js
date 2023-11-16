import React from 'react';
import ToDoForm from '../Comps/ToDoForm';
import ToDoList from '../Comps/ToDoList';
import { useState } from 'react';
import { View } from 'react-native';

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState([
    { text: 'Sleep', key: '1' },
    { text: 'Eat', key: '2' },
    { text: 'Cry', key: '3' },
  ]);

  const addTask = (text) => {
    setTasks((prevTasks) => {
      return [{ text, key: Math.random().toString() }, ...prevTasks];
    });
  };

  const addSpecialTaskHandler = (specialText) => {
    setTasks((prevTasks) => {
      return [{ text: specialText, key: Math.random().toString(), special: true }, ...prevTasks];
    });
  };

  const deleteTask = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.key !== key);
    });
  };


  return (
    <View style={{ flex: 1 }}>
      <ToDoForm submitHandler={addTask} addSpecialTaskHandler={addSpecialTaskHandler} />
      <ToDoList tasks={tasks} clickHandler={deleteTask} />
    </View>
  );
};

export default ToDoListScreen;
