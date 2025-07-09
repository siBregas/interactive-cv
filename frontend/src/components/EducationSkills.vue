<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

// Education data
const educationHistory = ref([
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas AMIKOM ', major: 'S1 - Teknik Informatika' },
  { id: 2, period: '2019 - 2022', institution: 'SMK Negeri 2 Klaten', major: 'Elektornika' }
]);

// Skills data
const skills = ref([
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' }
]);

onMounted(async () => {
  try {
    const [educationResponse, skillsResponse] = await Promise.all([
      axios.get('http://localhost:3000/api/education'),
      axios.get('http://localhost:3000/api/skills')
    ]);
    educationHistory.value = educationResponse.data;
    skills.value = skillsResponse.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="pendidikan-skill" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan & Keahlian" />

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Education Section (Left) -->
        <div class="bg-gray-700 rounded-lg shadow-lg p-8 border border-gray-600">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Riwayat Pendidikan</h3>
          <div class="space-y-6 relative">
            <!-- Garis penghubung vertikal di tengah titik -->
            <div class="absolute left-2 top-4 bottom-0 w-0.5 bg-blue-400"></div>

            <div v-for="(edu, index) in educationHistory" :key="edu.id"
                 class="pl-6 pb-6 relative">
              <!-- Titik timeline -->
              <div class="absolute w-4 h-4 bg-blue-500 rounded-full left-0 top-2 z-10"></div>
              <p class="font-semibold text-blue-400 text-sm">{{ edu.period }}</p>
              <h4 class="text-xl font-bold text-white mt-1">{{ edu.institution }}</h4>
              <p class="text-gray-300">{{ edu.major }}</p>
            </div>
          </div>
        </div>

        <!-- Skills Section (Right) -->
        <div class="bg-gray-700 rounded-lg shadow-lg p-8 border border-gray-600">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Keahlian & Teknologi</h3>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="skill in skills" :key="skill.name"
                 class="bg-gray-600 p-4 rounded-lg text-center transform hover:-translate-y-1 transition-transform duration-300 border border-gray-500">
              <h4 class="text-lg font-bold text-white">{{ skill.name }}</h4>
              <p class="text-gray-300 mt-1 text-sm">{{ skill.level }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
