<template>
  <div data-theme="funky" class="min-h-screen scroll-smooth">
    <Navbar />
    <Hero />
    <ProductGallery id="galerie" />
    <About id="about"/>
    <Custom id="custom"/>
    <Contact id="contact"/>
    <Footer />

    <!-- Overlays -->
    <ProductDetailModal v-if="productStore.isModalOpen" />
    <ShoppingCart />

  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import ProductGallery from './components/ProductGallery.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Custom from './components/Custom.vue'
import Footer from './components/Footer.vue'
import ProductDetailModal from './components/ProductDetailModal.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import { useProductStore } from './stores/productStore'

const productStore = useProductStore()
</script>

<style>
/* Globale Übergänge für ein smoothes Erlebnis könnten hier rein */
html {
  scroll-behavior: smooth;
}
</style>
