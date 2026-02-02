<template>
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
    :class="productStore.isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    @click="productStore.toggleCart"
  ></div>

  <div 
    class="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out"
    :class="productStore.isCartOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="flex flex-col h-full">
      <!-- Header -->
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-2xl font-display font-bold text-gradient">Warenkorb</h2>
        <button @click="productStore.toggleCart" class="btn btn-ghost btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <!-- Cart Items -->
      <div v-if="cartItems.length > 0" class="flex-grow overflow-y-auto p-4 space-y-4">
        <div v-for="item in cartItems" :key="item.cartId" class="flex items-start gap-4 p-2 rounded-lg bg-gray-50">
          <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-md">
          <div class="flex-grow">
            <h3 class="font-bold">{{ item.name }}</h3>
            <p class="text-sm text-gray-500">Farbe: {{ item.color }}</p>
            <p class="text-sm font-bold text-funky-pink">{{ item.price.toFixed(2) }}€</p>
            <div class="flex items-center gap-2 mt-2">
              <button class="btn btn-xs btn-outline" @click="updateQuantity(item.cartId, item.quantity - 1)">-</button>
              <span>{{ item.quantity }}</span>
              <button class="btn btn-xs btn-outline" @click="updateQuantity(item.cartId, item.quantity + 1)">+</button>
            </div>
          </div>
          <button @click="productStore.removeFromCart(item.cartId)" class="btn btn-ghost btn-sm text-red-500">
            Löschen
          </button>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="flex-grow flex flex-col justify-center items-center text-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <h3 class="text-xl font-bold">Dein Warenkorb ist leer</h3>
        <p class="text-gray-500 mt-2">Füge Produkte hinzu, um sie hier zu sehen.</p>
      </div>

      <!-- Footer -->
      <div v-if="cartItems.length > 0" class="p-4 border-t bg-gray-50">
        <div class="flex justify-between items-center font-bold text-lg mb-4">
          <span>Gesamtsumme:</span>
          <span>{{ cartTotal.toFixed(2) }}€</span>
        </div>
        <button class="btn btn-primary btn-block text-white">Zur Kasse</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '../stores/productStore'

const productStore = useProductStore()

const cartItems = computed(() => productStore.cart)
const cartTotal = computed(() => 
  productStore.cart.reduce((total, item) => total + item.price * item.quantity, 0)
)

const updateQuantity = (cartId: string, newQuantity: number) => {
  productStore.updateQuantity(cartId, newQuantity)
}
</script>

<style scoped>
.text-funky-pink {
  color: #FF1B8D;
}

.text-gradient {
  background: linear-gradient(to right, #FF1B8D, #9D4EDD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
