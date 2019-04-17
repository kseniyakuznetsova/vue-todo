<template>
  <div>
    <input @keydown.enter="insertTodo(newTodo)" type="text" v-model="newTodo">
    <button @click="insertTodo(newTodo)">+</button>
    <ul id="todo-list">
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" v-on:delete-todo="deleteTodo"></TodoItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from "vue-property-decorator";
import $store from "@/store";
import TodoItem from "@/components/TodoItem.vue";
import Todo from "@/model/Todo";

@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  newTodo: string = "";
  todos: Todo[] = [];

  created() {
    this.todos = $store.state.todos;
  }

  insertTodo(text: string) {
    this.todos.push({
      id: this.todos.length,
      title: text,
      isCompleted: false
    });
  }
  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
</script>