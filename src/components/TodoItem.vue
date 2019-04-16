<template>
  <li>
    <input type="checkbox" :checked="todo.isCompleted">
    <span>{{todo.title}}</span>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from "vue-property-decorator";
import Todo from "@/model/Todo";

@Component
export default class TodoItem extends Vue {
  @Prop() private todo!: Todo;
}
</script>

<style scoped>
</style>
