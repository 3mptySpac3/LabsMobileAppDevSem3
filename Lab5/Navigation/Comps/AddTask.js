
const addTask = (text) => {
  setTasks((prevTasks) => {
    return [...prevTasks, { text, key: Math.random().toString(), isSpecial: false }];
  });
};



export default addTask;