<template>
  <div class="home">
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/TodoList.vue";

@Component({
  components: {
    TodoList
  }
})
export default class Home extends Vue {}
</script>
