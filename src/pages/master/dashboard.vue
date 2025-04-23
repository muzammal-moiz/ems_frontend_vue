<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out shadow-md',
        isSidebarOpen ? 'w-64' : 'w-16',
        'bg-indigo-700 text-white'
      ]"
    >
      <div class="flex items-center justify-between px-4 py-4 border-b border-indigo-600">
        <span v-if="isSidebarOpen" class="text-lg font-bold">My Admin</span>
        <button @click="toggleSidebar" class="text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      <nav class="mt-4 space-y-1">
        <router-link
          to="/"
          class="flex items-center px-4 py-3 hover:bg-indigo-600 transition-colors"
          :class="{'bg-indigo-800': isActive('/dashboard')}"
        >
          <svg class="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3h18v18H3z"/>
          </svg>
          <span v-if="isSidebarOpen">Dashboard</span>
        </router-link>

        <router-link
          to="/department"
          class="flex items-center px-4 py-3 hover:bg-indigo-600 transition-colors"
          :class="{'bg-indigo-800': isActive('/Department')}"
        >
          <svg class="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 3.13a4 4 0 010 7.75"/>
            <path d="M2 12h20M2 16h20M2 20h20"/>
          </svg>
          <span v-if="isSidebarOpen">Department</span>
        </router-link>

        <router-link
          to="/employee"
          class="flex items-center px-4 py-3 hover:bg-indigo-600 transition-colors"
          :class="{'bg-indigo-800': isActive('/employee')}"
        >
          <svg class="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 00-3-3.87"/>
            <path d="M4 21v-2a4 4 0 013-3.87"/>
            <path d="M16 3.13a4 4 0 01.9 7.45"/>
            <path d="M8 3.13a4 4 0 10-.9 7.45"/>
          </svg>
          <span v-if="isSidebarOpen">Employee</span>
        </router-link>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-white shadow flex items-center justify-between px-6 py-4">
        <div class="text-xl font-semibold text-indigo-700">Welcome</div>
        <div class="relative" @click="toggleDropdown">
          <div class="flex items-center cursor-pointer">
            <img
              class="w-8 h-8 rounded-full"
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="User"
            />
            <span class="ml-2 font-medium text-gray-700">John Doe</span>
            <svg
              class="w-4 h-4 ml-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50"
          >
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
            <a href="#" @click.prevent="logout" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const isSidebarOpen = ref(true);
const isDropdownOpen = ref(false);
const route = useRoute();

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}
function isActive(path) {
  return route.path === path;
}


</script>
