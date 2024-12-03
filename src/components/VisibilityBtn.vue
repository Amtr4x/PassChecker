<script setup lang="ts">
import { IconEye, IconEyeOff } from "@tabler/icons-vue";

const props = defineProps({
  inputType: String,
});
</script>

<template>
  <button
    class="p-1 rounded-md shadow-md duration-150 active:shadow-sm hover:scale-105 active:scale-95 shadow-slate-300"
    :class="props.inputType === 'password' ? 'bg-red-200' : 'bg-green-200'"
  >
    <IconEye v-if="props.inputType === 'password'" />
    <IconEyeOff v-else />
  </button>
</template>
