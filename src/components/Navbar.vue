<template>
  <div class="navbar bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-30 px-4">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-box w-52">
          <li><a href="#galerie" class="text-lg">Galerie</a></li>
          <li><a href="#about" class="text-lg">About</a></li>
          <li><a href="#custom" class="text-lg">Custom</a></li>
          <li><a href="#contact" class="text-lg">Kontakt</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-2xl font-display text-gradient">
        FUNKY PRINTS
      </a>
    </div>
    
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-lg font-medium">
        <li><a href="#galerie" class="hover:text-funky-pink">Galerie</a></li>
        <li><a href="#about" class="hover:text-funky-pink">About</a></li>
        <li><a href="#custom" class="hover:text-funky-pink">Custom</a></li>
        <li><a href="#contact" class="hover:text-funky-pink">Kontakt</a></li>
      </ul>
    </div>
    
    <div class="navbar-end gap-2">
       <button @click="productStore.toggleCart" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span v-if="cartItemCount > 0" class="badge badge-sm badge-primary indicator-item">{{ cartItemCount }}</span>
        </div>
      </button>
      <button class="btn btn-primary text-white" @click="productStore.toggleCart">
        Warenkorb
        <span v-if="cartItemCount > 0">({{ cartItemCount }})</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '../stores/productStore'

const productStore = useProductStore()

const cartItemCount = computed(() => 
  productStore.cart.reduce((total, item) => total + item.quantity, 0)
)

</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #FF1B8D, #9D4EDD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
