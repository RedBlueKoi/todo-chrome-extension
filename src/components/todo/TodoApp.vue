<script setup lang="ts">
  import TodoHeader from "./TodoHeader.vue"
  import TodoList from "./TodoList.vue"
</script>

<template>
  <div class="todo grid h-full">
    <todo-header />
    <todo-list />
  </div>
</template>

<style scoped lang="postcss">
  .todo {
    grid-template-rows: auto 1fr;
  }
</style>
