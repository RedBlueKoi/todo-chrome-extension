<script setup lang="ts">
  import TodoApp from "@/components/todo/TodoApp.vue"
</script>

<template>
  <div class="h-[350px] w-[300px] base">
    <todo-app />
  </div>
</template>

<style>
  @import "@/assets/base.css";

  .base {
    @apply text-white;
    @apply bg-accent-light;
    font-size: 18px;
  }
</style>
