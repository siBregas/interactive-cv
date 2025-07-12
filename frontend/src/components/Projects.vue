<script setup>
import { ref, onMounted } from 'vue';
import SectionTitle from './SectionTitle.vue';
import { projects } from '../data/staticData.js';

const currentSlideIndex = ref(0);

// Auto-slide functionality
const startAutoSlide = () => {
  setInterval(() => {
    // Get the first project (CRUD project) images
    const crudProject = projects.find(p => p.has_slider);
    if (crudProject && crudProject.images) {
      currentSlideIndex.value = (currentSlideIndex.value + 1) % crudProject.images.length;
    }
  }, 3000); // Change image every 3 seconds
};

onMounted(() => {
  // Start auto-slide for CRUD images
  startAutoSlide();
});

</script>
<template>
<section id="proyek" class="py-20 bg-gray-900">
<div class="container mx-auto px-6">
<SectionTitle title="Proyek History" />
<div class="grid md:grid-cols-2 gap-12">        <div v-for="project in projects" :key="project.title"
          class="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">

          <!-- Image Slider for CRUD Project -->
          <div v-if="project.has_slider" class="relative w-full h-56 overflow-hidden bg-gray-700">
            <div class="flex transition-transform duration-500 ease-in-out h-full"
                 :style="{ transform: `translateX(-${currentSlideIndex * 100}%)` }">
              <img v-for="(img, index) in project.images" :key="index"
                   :src="img"
                   :alt="`${project.title} - Image ${index + 1}`"
                   class="w-full h-full object-contain flex-shrink-0 bg-gray-700">
            </div>

            <!-- Slide Indicators -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div v-for="(img, index) in project.images" :key="index"
                   :class="['w-2 h-2 rounded-full transition-colors duration-300',
                           currentSlideIndex === index ? 'bg-white' : 'bg-white/50']">
              </div>
            </div>
          </div>

          <!-- Regular Image for Other Projects -->
          <img v-else :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover">

          <div class="p-6">
<h3 class="text-2xl font-bold text-white mb-2">{{
project.title }}</h3>
<p class="text-gray-300 mb-4">{{ project.description }}</p>
<div class="mb-4">

<span v-for="t in project.tech" :key="t" class="inline-block bg-blue-600 text-blue-100 text-sm font-semibold mr-2 mb-2 px-2.5

py-0.5 rounded-full">{{ t }}</span>
</div>
<a :href="project.link" target="_blank" rel="noopener
noreferrer" class="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition-colors duration-200">Lihat
Detail &rarr;</a>
</div>
</div>
</div>
</div>
</section>
</template>
