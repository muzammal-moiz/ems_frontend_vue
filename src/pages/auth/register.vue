<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 p-4">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-indigo-700 mb-6">Create an Account</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block mb-1 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            v-model="name"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Name"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>
        <div class="mb-6">
          <label class="block mb-1 font-semibold text-gray-700">Password</label>
          <input
            type="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Create a password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition"
        >
          Register
        </button>
        <p class="text-sm text-center mt-4 text-gray-600">
          Already have an account?
          <router-link to="/login" class="text-indigo-600 hover:underline">Login here</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');

function handleRegister() {
  // TODO: Implement register logic (e.g., API call)
  console.log('Register:', { name: name.value, email: email.value, password: password.value });
}
</script>


<style >

</style>
