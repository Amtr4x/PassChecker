<script setup lang="ts">
import { ref, watch } from "vue";
import { ratePassword } from "../core/passChecker";
import PasswordInput from "./PasswordInput.vue";

const userPassword = ref("");
const passwordRating = ref("not valid");
const inputType = ref("password");
const borderColor = ref("transparent");

watch(passwordRating, () => {
  if (passwordRating.value === "not valid") {
    borderColor.value = "duration-300 border-red-400";
  } else if (passwordRating.value === "weak") {
    borderColor.value = "duration-300 border-pink-400";
  } else if (passwordRating.value === "vulnerable") {
    borderColor.value = "duration-300 border-orange-400";
  } else if (passwordRating.value === "upgradable") {
    borderColor.value = "duration-300 border-blue-400";
  } else if (passwordRating.value === "secure") {
    borderColor.value = "duration-300 border-green-400";
  }
});

/**
 * Update the password rating for the password provided
 * */
function updateRating(password: string) {
  const passwordStrength = ratePassword(password).valueOf();
  userPassword.value = password;

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
</script>

<template>
  <form
    @submit.prevent
    class="sm:w-[400px] bg-slate-50 p-4 shadow-md shadow-slate-200 flex flex-col gap-3 border-2 border-solid rounded-md"
    :class="borderColor"
  >
    <fieldset class="flex flex-col gap-1">
      <legend class="text-slate-700">
        Introduce a password to test its strength 💪️
      </legend>
      <label for="user-passwd" class="text-slate-700">Password: </label>
      <PasswordInput
        :input-type="inputType"
        :password="userPassword"
        @rate-password="updateRating"
        @toggle-visibility="togglePasswordVisibility"
        class="self-center"
      />
    </fieldset>
    <p v-if="passwordRating" class="text-center font-medium text-slate-900">
      Your password is {{ passwordRating }}
    </p>
    <p v-else class="text-center font-medium text-slate-900">
      Let's see your password 🧐️
    </p>
  </form>
</template>
