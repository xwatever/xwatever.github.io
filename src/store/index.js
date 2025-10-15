import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      aboutSubView: [],
      view: [],
    };
  },
  mutations: {
    getAboutSubView(state) {
      state.aboutSubView = JSON.parse(
        sessionStorage.getItem("aboutSubView") || "{}"
      );
    },
    getView(state) {
      state.view = JSON.parse(sessionStorage.getItem("view") || "{}");
    },
  },
  actions: {
    getAboutSubView(context) {
      context.commit("getAboutSubView");
    },
    getView(context) {
      context.commit("getView");
    },
  },
});

export default store;
