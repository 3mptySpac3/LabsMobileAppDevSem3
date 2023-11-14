import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import addSpecialTaskHandler from './AddSpecTask';


const ToDoForm = ({ submitHandler, addSpecialTaskHandler }) => {
  const [text, setText] = useState('');
  const [isSpecial, setIsSpecial] = useState(false);

  const changeHandler = (val) => {
    setText(val);
  };

  const handleTaskSubmit = () => {
    if (isSpecial) {
      addSpecialTaskHandler(text); 
    } else {
      submitHandler(text); 
    }
    setText(''); 
    setIsSpecial(false); 
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Add new todo...'
        onChangeText={changeHandler}
        value={text}
      />
      <Button onPress={handleTaskSubmit} title='Add' color='black' />
      <Button onPress={() => setIsSpecial(!isSpecial)} title={isSpecial ? 'Special' : 'Normal'} color={isSpecial ? 'green' : 'gray'} />
    </View>
  );
};




const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default ToDoForm;
