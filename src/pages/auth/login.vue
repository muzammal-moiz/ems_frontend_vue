<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 p-4">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-indigo-700 mb-6">Login to Your Account</h2>
      <form @submit.prevent="handleLogin">
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
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition"
        >
          Login
        </button>
        <p class="text-sm text-center mt-4 text-gray-600">
          Don't have an account?
          <router-link to="/register" class="text-indigo-600 hover:underline">Register here</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

async function handleLogin() {
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email: email.value,
      password: password.value
    });

    localStorage.setItem('token', response.data.token);

    router.push('/'); // Redirect on success
  } catch (error) {
    alert(error.response?.data?.message || 'Login failed');
  }
}
</script>

<style >

</style>
