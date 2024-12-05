<script setup lang="ts">
import PassChecker from "./components/PassChecker.vue";
import SocialBadge from "./components/SocialBadge.vue";
import githubIcon from "./assets/github.svg";

const passwordTips = [
  "Have at least 8 characters, but is recommended 12 or more.",
  "Does not contain any information related with you or your account data.",
  "Use a good amount of special characters, uppercase letters and numbers combined.",
  "Are saved in safes places. Ex: Passwords Managers and all those sites where you not lost the information but nobody can see it.",
];
</script>

<template>
  <main class="flex flex-col items-center gap-5 pt-5">
    <h1 class="text-3xl font-bold text-center text-slate-700">PassChecker</h1>
    <p class="sm:text-xl font-medium text-center text-slate-600">
      Test your passwords and stay safe online.
    </p>

    <PassChecker />
  </main>
  <aside class="sm:w-[600px] m-[auto] pt-8">
    <h2 class="text-center mb-3 text-xl text-slate-900 font-medium">
      Good passwords are those that...
    </h2>
    <ul class="px-3" v-for="(tip, idx) in passwordTips">
      <li :key="idx" class="text-pretty text-slate-700 leading-6 mb-2">
        {{ tip }}
      </li>
    </ul>
  </aside>
  <footer
    class="flex gap-2 justify-center items-center fixed bottom-0 w-[100dvw] py-2"
  >
    <p>Made with ❤️ by</p>
    <SocialBadge
      username="Amtr4x"
      link="https://github.com/Amtr4x"
      bg-color="bg-purple-600"
      fg-color="text-white"
      :icon-src="githubIcon"
    />
  </footer>
</template>
