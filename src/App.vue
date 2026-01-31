<template>
  <div data-theme="funky" class="min-h-screen">
    <Navbar />
    <Hero />
    <ProductGallery />
    <About />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import ProductGallery from './components/ProductGallery.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
</script>

<style>
</style>
