<script setup lang="ts">
import { IconCopy } from "@tabler/icons-vue";

const props = defineProps({
  password: String,
});

async function copyPasswordToClipboard() {
  if (props.password) {
    await navigator.clipboard.writeText(props.password);
  }
}
</script>

<template>
  <button
    @click="copyPasswordToClipboard"
    class="bg-green-200 flex gap-1 p-1 rounded-md hover:scale-105 shadow-md duration-150 active:shadow-sm active:scale-95 shadow-slate-300"
  >
    <p>Copy</p>
    <IconCopy />
  </button>
</template>
