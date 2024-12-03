<script setup lang="ts">
import CopyBtn from "./CopyBtn.vue";
import VisibilityBtn from "./VisibilityBtn.vue";

defineProps<{
  inputType: string;
  password: string;
}>();

defineEmits(["rate-password", "toggle-visibility"]);
</script>

<template>
  <div class="flex gap-2">
    <VisibilityBtn
      :input-type="inputType"
      @click="$emit('toggle-visibility')"
    />
    <input
      :value="password"
      @input="$emit('rate-password', ($event.target as HTMLInputElement).value)"
      :type="inputType"
      placeholder="insecure1234..."
      autofocus
      autocomplete="off"
      id="user-passwd"
      class="p-1 bg-slate-100 rounded-md focus:outline-green-200 shadow-md shadow-slate-200"
    />
    <CopyBtn :password="password" />
  </div>
</template>
