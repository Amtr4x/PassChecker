<script setup lang="ts">
import { ref } from "vue";
import { ratePassword } from "../core/passChecker";
import { IconCopy, IconEye, IconEyeOff } from "@tabler/icons-vue";

const password = ref();
const passwordRating = ref();
const inputType = ref("password");

/**
 * Update the password rating for the password provided
 * */
function updateRating() {
  const passwordStrength = ratePassword(password.value).valueOf();

  switch (passwordStrength) {
    case 0:
      passwordRating.value = "not valid";
      break;
    case 1:
      passwordRating.value = "weak";
      break;
    case 2:
      passwordRating.value = "vulnerable";
      break;
    case 3:
      passwordRating.value = "upgradable";
      break;
    case 4:
      passwordRating.value = "secure";
      break;
  }
}

function togglePasswordVisibility() {
  if (inputType.value === "password") {
    inputType.value = "text";
  } else {
    inputType.value = "password";
  }
}

async function copyPasswordToClipboard() {
  if (password.value) {
    await navigator.clipboard.writeText(password.value);
  }
}
</script>

<template>
  <form @submit.prevent>
    <fieldset>
      <legend>Introduce a password to test its strength 💪️</legend>
      <label for="user-passwd">Password: </label>
      <button @click="togglePasswordVisibility">
        <IconEye v-if="inputType === 'password'" />
        <IconEyeOff v-else />
      </button>
      <input
        v-model="password"
        @keyup="updateRating"
        :type="inputType"
        placeholder="insecure1234..."
        autofocus
        autocomplete="off"
        id="user-passwd"
      />
      <button @click="copyPasswordToClipboard">
        <p>Copy</p>
        <IconCopy />
      </button>
    </fieldset>
    <p v-if="passwordRating">Your password is {{ passwordRating }}</p>
    <p v-else>Let's see your password 🧐️</p>
  </form>
</template>
