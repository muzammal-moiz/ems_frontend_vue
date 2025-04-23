<template>
  <div class="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Employee Profile</h2>

    <table class="min-w-full divide-y divide-gray-200 border border-gray-200 text-sm">
      <thead class="bg-gray-100 text-left text-gray-700">
        <tr>
          <th class="px-4 py-2">Photo</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Phone</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">Department</th>
          <th class="px-4 py-2">Joining Date</th>
          <th class="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-100">
        <tr>
          <td class="px-4 py-2">
            <img
              :src="employee.photo"
              alt="Photo"
              class="w-12 h-12 rounded-full ring-2 ring-indigo-400 object-cover"
            />
          </td>
          <td class="px-4 py-2">{{ employee.name }}</td>
          <td class="px-4 py-2">{{ employee.email }}</td>
          <td class="px-4 py-2">{{ employee.phone }}</td>
          <td class="px-4 py-2">{{ employee.role }}</td>
          <td class="px-4 py-2">{{ employee.department }}</td>
          <td class="px-4 py-2">{{ employee.joined }}</td>
          <td class="px-4 py-2">
            <span
              class="px-2 py-1 rounded-full text-xs font-semibold"
              :class="employee.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
            >
              {{ employee.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-6">
      <h3 class="text-lg font-semibold text-indigo-700 mb-2">About</h3>
      <p class="text-gray-700">{{ employee.bio }}</p>
    </div>
  </div>
</template>

<script setup>
const employee = {
  name: "Ayesha Khan",
  email: "ayesha.khan@example.com",
  phone: "+92 300 1234567",
  role: "HR Manager",
  department: "Human Resources",
  joined: "March 1, 2022",
  status: "Active",
  bio: "Ayesha is a dedicated HR professional with over 5 years of experience in people management and organizational development.",
  photo: "https://randomuser.me/api/portraits/men/65.jpg"
};
</script>
