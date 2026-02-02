<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <div class="text-6xl md:text-8xl mb-8 float-animation">
        🍆🍑✨
      </div>
      
      <h1 class="font-display text-7xl md:text-9xl font-bold mb-6 text-gradient leading-tight bg-gradient-to-r from-funky-pink to-funky-purple">
        FUNKY PRINTS
      </h1>
      
      <p class="text-2xl md:text-3xl font-medium text-gray-700 mb-4">
        3D-gedruckte Kunstwerke mit 
        <span class="text-funky-pink font-bold wiggle inline-block">Humor</span> & 
        <span class="text-funky-purple font-bold wiggle inline-block" style="animation-delay: 0.3s;">Style</span>
      </p>
      
      <p class="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
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
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
