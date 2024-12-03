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
    class="bg-green-200 flex gap-1 utility-btn"
  >
    <p>Copy</p>
    <IconCopy />
  </button>
</template>
