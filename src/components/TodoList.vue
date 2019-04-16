<template>
  <div>
    <ul id="todo-list">
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id"></TodoItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from "vue-property-decorator";
import Todo from "@/model/Todo";
import TodoItem from "@/components/TodoItem.vue";

@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  todos = [
    { id: 1, title: "First task", isCompleted: true },
    { id: 2, title: "Second task", isCompleted: false }
  ];
}
</script>