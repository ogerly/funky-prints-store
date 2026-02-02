<template>
  <section id="galerie" class="py-20 px-4 bg-white/50">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-display text-6xl md:text-7xl font-bold text-center mb-4 text-gradient bg-gradient-to-r from-funky-pink to-funky-purple">
        DIE KOLLEKTION
      </h2>
      <p class="text-center text-xl text-gray-500 mb-16">
        Jedes Stück ein Unikat – klicke auf ein Produkt für mehr Details.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="product in productStore.products" :key="product.id" class="card bg-white shadow-xl flex flex-col cursor-pointer transform hover:scale-105 transition-transform duration-300" @click="productStore.openModal(product)">
          <figure class="relative h-80 bg-gray-100 overflow-hidden">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover">
          </figure>
          <div class="card-body flex-grow flex flex-col justify-between">
            <div>
              <h3 class="card-title text-2xl font-display text-gray-800">
                {{ product.name }}
              </h3>
              <p class="text-3xl font-bold text-funky-pink mt-4">{{ product.price }}€</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 card bg-gradient-to-r from-funky-pink via-funky-purple to-funky-orange text-white shadow-2xl">
        <div class="card-body text-center p-12">
          <h3 class="font-display text-5xl font-bold mb-4">
            🎨 INDIVIDUELLE ANFRAGEN
          </h3>
          <p class="text-xl mb-6 opacity-90">
            Hast du eine verrückte Idee? Wir bringen sie in 3D zum Leben!<br />
            Farben, Größen, Designs – alles ist möglich.
          </p>
          <button class="btn btn-neutral btn-lg text-xl">
            Kontakt aufnehmen 📧
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '../stores/productStore'
const productStore = useProductStore()
</script>

<style scoped>
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
