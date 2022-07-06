<script setup lang="ts">
  import { mdiPlus } from "@mdi/js"
  import IconMdi from "@/components/IconMdi.vue"
  import { ref } from "vue"
  import useTodo from "@/composables/useTodo"

  const todoName = ref("")
  const { addTodo } = useTodo()
  const onSubmit = () => {
    addTodo(todoName.value.trim())
    todoName.value = ""
  }
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="flex justify-between items-center gap-2 p-2">
    <label class="form-control flex-1 text-accent">
      <input type="text" v-model="todoName" class="w-full px-2 outline-none" />
    </label>
    <button
      type="submit"
      class="flex-shrink-0"
      :disabled="!todoName.trim().length">
      <icon-mdi :icon="mdiPlus" :size="18" />
    </button>
  </form>
</template>

<style scoped lang="postcss"></style>
