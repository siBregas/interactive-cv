<script setup>
import SectionTitle from './SectionTitle.vue';
import { educationHistory } from '../data/staticData.js';
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white">
    <SectionTitle title="Riwayat Pendidikan" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(education, index) in educationHistory" :key="index" class="p-4 border rounded-md shadow-md">
        <h3 class="text-lg font-semibold">{{ education.institution }}</h3>
        <p class="text-sm text-gray-600">{{ education.major }}</p>
        <p class="text-sm text-gray-500">{{ education.period }}</p>
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
