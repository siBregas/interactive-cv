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

  </section>
</template>
