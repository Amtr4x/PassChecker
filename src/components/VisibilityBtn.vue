<script setup lang="ts">
import { IconEye, IconEyeOff } from "@tabler/icons-vue";

const props = defineProps({
  inputType: String,
});
</script>

<template>
  <button
    class="utility-btn"
    :class="props.inputType === 'password' ? 'bg-red-200' : 'bg-green-200'"
  >
    <IconEye v-if="props.inputType === 'password'" />
    <IconEyeOff v-else />
  </button>
</template>
