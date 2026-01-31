<template>
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <!-- Animated background blobs -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-funky-pink opacity-20 rounded-full blob-animation blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-funky-purple opacity-20 rounded-full blob-animation blur-3xl" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-funky-orange opacity-15 rounded-full blob-animation blur-3xl" style="animation-delay: 4s;"></div>
      
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <!-- Emoji decorations -->
        <div class="text-6xl md:text-8xl mb-8 float-animation">
          🍆🍑✨
        </div>
        
        <h1 class="font-display text-7xl md:text-9xl font-bold mb-6 text-gradient leading-tight">
          FUNKY PRINTS
        </h1>
        
        <p class="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
          3D-gedruckte Kunstwerke mit 
          <span class="text-funky-pink font-bold wiggle inline-block">Humor</span> & 
          <span class="text-funky-purple font-bold wiggle inline-block" style="animation-delay: 0.3s;">Style</span>
        </p>
        
        <p class="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Handgemachte, bemalte Figuren für Erwachsene, die das Leben nicht zu ernst nehmen. 
          Einzigartig, lustig, und definitiv ein Gesprächsthema! 🎨
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="btn btn-primary btn-lg text-white text-xl px-8 shadow-2xl hover:scale-105 transition-transform">
            🛍️ Zur Galerie
          </button>
          <button class="btn btn-outline btn-lg text-xl px-8 hover:scale-105 transition-transform">
            📸 Instagram
          </button>
        </div>
        
        <!-- Features badges -->
        <div class="mt-16 flex flex-wrap gap-4 justify-center">
          <div class="badge badge-lg bg-white/80 backdrop-blur-sm p-4 gap-2 border-2 border-funky-pink">
            <span class="text-2xl">🎨</span>
            <span class="font-medium">Handgemalt</span>
          </div>
          <div class="badge badge-lg bg-white/80 backdrop-blur-sm p-4 gap-2 border-2 border-funky-purple">
            <span class="text-2xl">📐</span>
            <span class="font-medium">3D-Gedruckt</span>
          </div>
          <div class="badge badge-lg bg-white/80 backdrop-blur-sm p-4 gap-2 border-2 border-funky-orange">
            <span class="text-2xl">✨</span>
            <span class="font-medium">Einzigartig</span>
          </div>
          <div class="badge badge-lg bg-white/80 backdrop-blur-sm p-4 gap-2 border-2 border-funky-blue">
            <span class="text-2xl">🇩🇪</span>
            <span class="font-medium">Made in Germany</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>