<script setup lang="ts">
  import type { Todo } from "@/composables/useTodo"
  import useTodo from "@/composables/useTodo"
  import IconMdi from "@/components/IconMdi.vue"
  import { mdiClose } from "@mdi/js"
  import { computed } from "vue"

  export interface Props {
    todo: Todo
  }
  const props = defineProps<Props>()
  const { toggleTodo, removeTodo } = useTodo()
  const isOverdue = computed(() => {
    const current = new Date()
    return current > props.todo.deadline
  })
</script>

<template>
  <div
    class="p-2 w-full transition-colors duration-200 ease-in-out hover:bg-accent">
    <div class="body flex justify-between items-center gap-2">
      <div class="name">
        <button type="button" @click="removeTodo(todo.id)">
          <icon-mdi :icon="mdiClose" :size="16" />
        </button>
        {{ todo.name }}
      </div>
      <button type="button" @click="toggleTodo(todo.id)" class="status">
        {{ todo.isComplete ? "Done" : "Fix me" }}
      </button>
    </div>
    <div class="deadline text-sm flex justify-between items-center gap-2">
      <span class="block">
        {{ todo.deadline.getDate() }}/{{ todo.deadline.getMonth() }}/{{
          todo.deadline.getFullYear()
        }}
      </span>
      <span class="status" v-if="isOverdue">{{ "Overdue" }}</span>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
