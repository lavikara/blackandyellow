import { createStore } from "vuex";
import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import taskModule from "./taskModule/index";

const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: { taskModule },
});

export default store;
