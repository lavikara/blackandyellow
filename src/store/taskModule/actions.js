import api from "@/api/task";

export const getAllTask = async ({ commit, dispatch }) => {
  try {
    dispatch("setLoading", true, { root: true });
    const response = await api.getAllTask();
    const { tasks } = response.data;
    tasks.push({});
    commit("SET_ALL_TASKS", tasks);
    dispatch("setLoading", false, { root: true });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addTitle = async ({ commit }, payload) => {
  try {
    commit("ADD_TITLE", payload);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addTask = async ({ commit }, payload) => {
  try {
    commit("ADD_TASK", payload);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editTask = async ({ commit }, payload) => {
  try {
    commit("EDIT_TASK", payload);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editTitle = async ({ commit }, payload) => {
  try {
    commit("EDIT_TITLE", payload);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteTask = async ({ commit }, payload) => {
  try {
    commit("DELETE_TASK", payload);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const setCurrentTask = async ({ commit }, payload) => {
  try {
    commit("SET_CURRENT_TASK", payload);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const showAddTaskModal = async ({ commit }, payload) => {
  try {
    commit("SHOW_ADD_TASK_MODAL", payload);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
