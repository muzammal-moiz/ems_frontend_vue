<template>
  <div class="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
    <h2 class="text-2xl font-bold text-indigo-700 mb-6">Manage Departments</h2>

    <!-- Add Department -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <input
        v-model="newDept.name"
        placeholder="Name"
        class="border px-3 py-2 rounded focus:ring focus:ring-indigo-300"
      />
      <input
        v-model="newDept.code"
        placeholder="Code"
        class="border px-3 py-2 rounded focus:ring focus:ring-indigo-300"
      />
      <input
        v-model="newDept.description"
        placeholder="Description"
        class="border px-3 py-2 rounded focus:ring focus:ring-indigo-300"
      />
      <div class="md:col-span-3">
        <button
          @click="addDepartment"
          class="bg-indigo-600 text-white px-4 py-2 mt-2 rounded hover:bg-indigo-700"
        >
          Add Department
        </button>
      </div>
    </div>

    <!-- Departments Table -->
    <table class="w-full border text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-left">Name</th>
          <th class="px-4 py-2 text-left">Code</th>
          <th class="px-4 py-2 text-left">Description</th>
          <th class="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="dept in departments"
          :key="dept.id"
          class="border-t hover:bg-gray-50"
        >
          <td class="px-4 py-2">
            <input v-model="dept.name" class="w-full border px-2 py-1 rounded" />
          </td>
          <td class="px-4 py-2">
            <input v-model="dept.code" class="w-full border px-2 py-1 rounded" />
          </td>
          <td class="px-4 py-2">
            <input v-model="dept.description" class="w-full border px-2 py-1 rounded" />
          </td>
          <td class="px-4 py-2 flex gap-2">
            <button @click="updateDepartment(dept)" class="text-blue-600 hover:underline">Update</button>
            <button @click="deleteDepartment(dept.id)" class="text-red-600 hover:underline">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const departments = ref([]);
const newDept = ref({
  name: '',
  code: '',
  description: '',
});
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const fetchDepartments = async () => {
  const res = await axios.get('http://localhost:8000/api/departments');
  departments.value = res.data;
};

const addDepartment = async () => {
  try {
    await axios.post('http://localhost:8000/api/departments', newDept.value);
    newDept.value = { name: '', code: '', description: '' };
    fetchDepartments();
  } catch (err) {
    alert(err.response?.data?.message || 'Failed to create department');
  }
};

const updateDepartment = async (dept) => {
  try {
    await axios.put(`http://localhost:8000/api/departments/${dept.id}`, {
      name: dept.name,
      code: dept.code,
      description: dept.description,
    });
    fetchDepartments();
  } catch (err) {
    alert(err.response?.data?.message || 'Failed to update department');
  }
};

const deleteDepartment = async (id) => {
  await axios.delete(`http://localhost:8000/api/departments/${id}`);
  fetchDepartments();
};

onMounted(fetchDepartments);
</script>
