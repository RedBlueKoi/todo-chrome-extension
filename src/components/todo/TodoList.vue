<script setup lang="ts">
  import TodoItem from "./TodoItem.vue"
  import useTodo from "@/composables/useTodo"

  const { todos } = useTodo()
</script>

<template>
  <div>
    <transition-group name="todo" mode="out-in">
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    </transition-group>
  </div>
</template>

<style scoped lang="postcss">
  .todo-move,
  .todo-enter-active,
  .todo-leave-active {
    transition: all 0.5s ease-in-out;
  }

  .todo-enter-from,
  .todo-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .todo-enter-from {
    transform: translateX(-30px);
  }
</style>
