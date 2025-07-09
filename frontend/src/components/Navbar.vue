<template>
<header class="bg-white shadow-md sticky top-0 z-50 animate-fade-in bg-blue-500">

<nav class="container mx-auto px-6 py-4">

<div class="flex justify-between items-center">
<!-- Logo/Brand -->
<div class="text-2xl font-bold text-gray-800">Nama Mahasiswa</div>

<!-- Desktop Menu -->
<ul class="hidden md:flex space-x-6">
<li><a href="#profil" class="text-black hover:text-gray-500 transform hover:-translate-y-0.5 transition-all duration-300">Profil</a></li>

<li><a href="#pendidikan-skill" class="text-black hover:text-gray-500 transform hover:-translate-y-0.5 transition-all duration-300">Pendidikan & Skill</a></li>

<li><a href="#proyek" class="text-black hover:text-gray-500 transform hover:-translate-y-0.5 transition-all duration-300">Proyek</a></li>

<li><a href="#kontak" class="text-black hover:text-gray-500 transform hover:-translate-y-0.5 transition-all duration-300">Kontak</a></li>

</ul>

<!-- Mobile Menu Button -->
<button
@click="toggleMobileMenu"
class="md:hidden flex flex-col space-y-1 p-2"
aria-label="Toggle mobile menu"
>
<span class="w-6 h-0.5 bg-gray-800 transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></span>
<span class="w-6 h-0.5 bg-gray-800 transition-all duration-300" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
<span class="w-6 h-0.5 bg-gray-800 transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></span>
</button>
</div>

<!-- Mobile Menu -->
<div
class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
:class="isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'"
>
<ul class="pt-4 pb-2 space-y-2">
<li><a href="#profil" @click="closeMobileMenu" class="block py-2 px-4 text-black hover:bg-gray-100 rounded transition-colors duration-200">Profil</a></li>
<li><a href="#pendidikan-skill" @click="closeMobileMenu" class="block py-2 px-4 text-black hover:bg-gray-100 rounded transition-colors duration-200">Pendidikan & Skill</a></li>
<li><a href="#proyek" @click="closeMobileMenu" class="block py-2 px-4 text-black hover:bg-gray-100 rounded transition-colors duration-200">Proyek</a></li>
<li><a href="#kontak" @click="closeMobileMenu" class="block py-2 px-4 text-black hover:bg-gray-100 rounded transition-colors duration-200">Kontak</a></li>
</ul>
</div>
</nav>
</header>

</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
isMobileMenuOpen.value = false;
};
</script>
