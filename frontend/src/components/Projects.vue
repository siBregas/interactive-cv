<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const projects = [
{ title: 'Website Tambah kurang barang', image: 'https://via.placeholder.com/500x300?text=Proyek+1', description: 'web CRUD barang.', tech: ['Vue.js', 'Express.js', 'javascript', 'Prisma'], link: 'https://github.com/siBregas/TokoBarang_vue_express' },
{ title: 'project kelas online', image: 'https://via.placeholder.com/500x300?text=Proyek+2', description: 'web tembat belajar coding online', tech: ['Laravel', 'php'], link: 'https://github.com/KingEery/FP_PemrogWeb' }
];
onMounted(async () => {
try { const response = await
axios.get('http://localhost:3000/api/projects'); projects.value = response.data; } catch (error) { console.error(error); }
});

</script>
<template>
<section id="proyek" class="py-20 bg-gray-900">
<div class="container mx-auto px-6">
<SectionTitle title="Proyek History" />
<div class="grid md:grid-cols-2 gap-12">
<div v-for="project in projects" :key="project.title"
class="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
<img :src="project.image" alt="Gambar Proyek" class="w-full
h-56 object-cover">
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
