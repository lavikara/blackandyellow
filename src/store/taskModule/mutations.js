export const SET_ALL_TASKS = (state, payload) => {
  state.tasks = payload;
};

export const ADD_TASK = (state, payload) => {
  state.tasks.map((task) => {
    if (task.title === payload.title) {
      task.taskList.push(payload.task);
    }
  });
};

export const ADD_TITLE = (state, payload) => {
  const lastIndex = state.tasks.length - 1;
  state.tasks.splice(lastIndex, 0, payload);
  // state.tasks.map((task) => {
  //   if (task.title === payload.title) {
  //     task.taskList.push(payload.task);
  //   }
  // });
};

export const EDIT_TASK = (state, payload) => {
  // state.tasks.map((task) => {
  //   if (task.title === payload.title) {
  //     console.log(task);
  //     const indexToReplace = task.taskList.findIndex(
  //       (obj) => obj.id === payload.id
  //     );
  //     if (indexToReplace !== -1) {
  //       task.taskList.splice(indexToReplace, 1, payload.task);
  //     }
  //   }
  // });
};

export const DELETE_TASK = (state, payload) => {
  let newTaskList = [];
  state.tasks.map((task) => {
    if (task.title === payload.title) {
      newTaskList = task.taskList.filter((obj) => obj.id !== payload.id);
      task.taskList = newTaskList;
    }
  });
};
