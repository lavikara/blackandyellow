export const setLoading = async ({ commit }, payload) => {
  try {
    commit("SET_LOADING", payload);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
