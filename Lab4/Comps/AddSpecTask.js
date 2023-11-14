const addSpecialTaskHandler = (text) => {
  setTasks((prevTasks) => {
    return [...prevTasks, { text, key: Math.random().toString(), isSpecial: true }];
  });
};
export default addSpecialTaskHandler;