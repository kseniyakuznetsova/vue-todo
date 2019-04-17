import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Сходить в магазин",
        isCompleted: false
      },
      {
        id: 2,
        title: "Переустановить винду",
        isCompleted: true
      },
      {
        id: 3,
        title: "Выгулить собаку",
        isCompleted: false
      }
    ]
  },
  mutations: {},
  actions: {}
});
