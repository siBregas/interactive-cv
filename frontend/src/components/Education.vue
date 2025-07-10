<script setup>
import SectionTitle from './SectionTitle.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Make educationHistory reactive with ref
const educationHistory = ref([
]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Error fetching education data:', error);
    // Keep using local data if API fails
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white">
    <SectionTitle title="Riwayat Pendidikan" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(education, index) in educationHistory" :key="index" class="p-4 border rounded-md shadow-md">
        <h3 class="text-lg font-semibold">{{ education.institution }}</h3>
        <p class="text-sm text-gray-600">{{ education.degree }}</p>
        <p class="text-sm text-gray-500">{{ education.year }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#pendidikan .grid > div {
  max-width: 300px; /* Adjust the size of the education boxes */
  margin: auto; /* Center the boxes */
}
</style>
