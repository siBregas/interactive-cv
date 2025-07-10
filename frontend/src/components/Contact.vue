<script setup>
import SectionTitle from './SectionTitle.vue';
</script>
<template>
<footer id="kontak" class="py-20 bg-gray-900 text-white border-t border-gray-700">
<div class="container mx-auto px-6 text-center">
<div class="mb-12 text-center">
<h2 class="text-4xl font-bold text-white">Hubungi Saya</h2>
<div class="w-48 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
</div>
<p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung
atau bertanya.</p>

<!-- Social Media Icons -->
<div class="flex justify-center items-center mb-12">
  <!-- Discord -->
  <a href="https://discordapp.com/users/547039972553654289" target="_blank" class="hover:scale-110 transition-transform duration-300 group flex items-center justify-center mx-4 p-2 rounded-lg hover:bg-gray-800">
    <img src="/image/DC.png" alt="Discord" class="w-12 h-12 object-contain">
    <span class="sr-only">Discord</span>
  </a>

  <!-- Facebook -->
  <a href="https://www.facebook.com/bregas.bregas.395017/" target="_blank" class="hover:scale-110 transition-transform duration-300 group flex items-center justify-center mx-4 p-2 rounded-lg hover:bg-gray-800">
    <img src="/image/FB.png" alt="Facebook" class="w-12 h-12 object-contain">
    <span class="sr-only">Facebook</span>
  </a>

  <!-- Instagram -->
  <a href="https://www.instagram.com/dmsbregas/" target="_blank" class="hover:scale-110 transition-transform duration-300 group flex items-center justify-center mx-4 p-2 rounded-lg hover:bg-gray-800">
    <img src="/image/IG.png" alt="Instagram" class="w-12 h-12 object-contain">
    <span class="sr-only">Instagram</span>
  </a>

  <!-- Steam -->
  <a href="https://steamcommunity.com/id/STF_Bregas" target="_blank" class="hover:scale-110 transition-transform duration-300 group flex items-center justify-center mx-0 p-2 rounded-lg hover:bg-gray-800">
    <img src="/image/STEAM.png" alt="Steam" class="w-20 h-20 object-contain">
    <span class="sr-only">Steam</span>
  </a>

  <!-- WhatsApp -->
  <a href="https://wa.me/085876110727" target="_blank" class="hover:scale-110 transition-transform duration-300 group flex items-center justify-center mx-2 p-2 rounded-lg hover:bg-gray-800">
    <img src="/image/WA.png" alt="WhatsApp" class="w-16 h-16 object-contain">
    <span class="sr-only">WhatsApp</span>
  </a>
</div>

<div class="flex justify-center space-x-6 mb-8">

<a href="https://github.com/siBregas" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>

<a href="#" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>

</div>
<p class="text-gray-500">&copy; {{ new Date().getFullYear() }}
Dimas Bregas Khalis Sumarsana. Dibuat dengan vue.js express vercel </p>
</div>
</footer>
</template>
