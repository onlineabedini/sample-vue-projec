<template>
  <div>
    <!-- Page Header -->
    <h1>{{ currentHeader }}</h1>

    <!-- Step One -->
    <div v-if="currentStep === 1">
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        v-model="username"
        @input="resetUsernameError"
      />
      <p v-if="usernameError">{{ usernameError }}</p>
    </div>

    <!-- Step Two -->
    <div v-if="currentStep === 2">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" @input="resetEmailError" />
      <p v-if="emailError">{{ emailError }}</p>
    </div>

    <!-- Step Three -->
    <div v-if="currentStep === 3">
      <p>Step: review - Review your information</p>
      <ul>
        <li>Username: {{ username }}</li>
        <li>Email: {{ email }}</li>
      </ul>
    </div>

    <!-- Buttons -->
    <button id="btn-prev" @click="prevStep" :disabled="currentStep === 1">
      Prev
    </button>
    <button
      id="btn-next"
      @click="validateAndNextStep"
      :disabled="currentStep === 3"
    >
      Next
    </button>
  </div>
</template>


<script setup>
import { ref, computed, watch } from "vue";

// Variables
const username = ref("");
const email = ref("");
const currentStep = ref(1);
const usernameError = ref("");
const emailError = ref("");

const headers = [
  "Enter your username",
  "Enter your email",
  "Step: review - Review your information",
];

// Computed
const currentHeader = computed(() => headers[currentStep.value - 1]);

// Methods
function resetUsernameError() {
  if (usernameError.value) usernameError.value = "";
}

function resetEmailError() {
  if (emailError.value) emailError.value = "";
}

function isUsernameValid() {
  if (!username.value.trim()) {
    usernameError.value = "Invalid Username.";
    return false;
  }
  if (username.value.includes("@") || username.value.includes(" ")) {
    usernameError.value = "Invalid Username.";
    return false;
  }
  if (username.value.length < 4 || username.value.length > 32) {
    usernameError.value = "Invalid Username.";
    return false;
  }
  usernameError.value = "";
  return true;
}

function isEmailValid() {
  if (!email.value.trim()) {
    emailError.value = "Invalid email address.";
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = "Invalid email address.";
    return false;
  }
  emailError.value = "";
  return true;
}

function validateAndNextStep() {
  let isValid = true;
  if (currentStep.value === 1) isValid = isUsernameValid();
  if (currentStep.value === 2) isValid = isEmailValid();

  if (isValid && currentStep.value < 3) {
    currentStep.value++;
  } else if (currentStep.value === 3) {
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--;
}

// Watchers
watch(currentStep, (newStep) => {
  if (newStep === 1) resetUsernameError();
  if (newStep === 2) resetEmailError();
});
</script>
