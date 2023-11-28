import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './Comps/ToDoList';
import ToDoForm from './Comps/ToDoForm';

export default function App() {
  return (
    <div>
    <SafeAreaView>
    <ToDoList />
    <ToDoForm />
    </SafeAreaView>
    </div>
  );
}
