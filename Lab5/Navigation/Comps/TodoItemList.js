import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const TodoItemList = ({ item, clickHandler }) => {
  const itemStyle = item.special ? { ...styles.item, backgroundColor: '#FFF4CB' } : styles.item;

  return (
    <View style={itemStyle}>
      <Text style={styles.itemText}>{item.text}</Text>
      <Button title="X" onPress={() => clickHandler(item.key)} color="#ff6347"/>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFA', 
  },
  specialItem: {
    backgroundColor: '#FFF4CB',
  itemText: {
    maxWidth: '90%',
  },
}

});



export default TodoItemList;
