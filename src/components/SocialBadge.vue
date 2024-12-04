<script setup lang="ts">
defineProps<{
  username: string;
  link: string;
  iconSrc: string;
  bgColor: string;
  fgColor: string;
}>();
</script>

<template>
  <a
    class="font-medium rounded-md p-1 flex gap-1 duration-150 active:scale-95 hover:scale-105"
    :class="bgColor + ' ' + fgColor"
    :href="link"
    target="_blank"
    noopener
    noreferrer
  >
    {{ username }}
    <img :src="iconSrc" />
  </a>
</template>
