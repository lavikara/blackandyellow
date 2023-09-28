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
};

export const EDIT_TASK = (state, payload) => {
  state.tasks.map((task) => {
    if (task.title === payload.title) {
      const indexToReplace = task.taskList.findIndex(
        (obj) => obj.id === payload.id
      );
      if (indexToReplace !== -1) {
        task.taskList.splice(indexToReplace, 1, {
          id: payload.id,
          task: payload.task,
        });
      }
    }
  });
};

export const EDIT_TITLE = (state, payload) => {
  state.tasks.map((task) => {
    if (task.title === payload.title) {
      task.title = payload.editedTitle;
    }
  });
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

export const SET_CURRENT_TASK = (state, payload) => {
  state.currentTask = payload;
};

export const SHOW_ADD_TASK_MODAL = (state, payload) => {
  state.showAddTask = payload;
};

export const SET_DRAGGED_TASK = (state, payload) => {
  let newTaskList = [];
  state.tasks.map((task) => {
    if (task.title === payload && state.startDragValues.title !== payload) {
      task.taskList.push({
        id: state.startDragValues.id,
        task: state.startDragValues.task,
      });
    }
    if (
      task.title === state.startDragValues.title &&
      state.startDragValues.title !== payload
    ) {
      newTaskList = task.taskList.filter(
        (obj) => obj.id !== state.startDragValues.id
      );
      task.taskList = newTaskList;
    }
  });
};

export const SET_START_DRAG_VALUES = (state, payload) => {
  state.startDragValues = payload;
};
