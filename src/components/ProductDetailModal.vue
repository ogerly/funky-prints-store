<template>
  <div class="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4" @click.self="productStore.closeModal">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row animate-fade-in-up">
      
      <!-- Image Section -->
      <div class="w-full md:w-1/2 bg-gray-100 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none overflow-hidden">
        <img 
          :src="productStore.selectedProduct?.image"
          :alt="productStore.selectedProduct?.name"
          class="w-full h-64 md:h-full object-cover"
        />
      </div>

      <!-- Details Section -->
      <div class="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
        <div>
          <!-- Close Button -->
          <button @click="productStore.closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <h2 class="font-display text-4xl font-bold text-gray-800 mb-2">{{ productStore.selectedProduct?.name }}</h2>
          <p class="text-gray-600 mb-4">{{ productStore.selectedProduct?.description }}</p>

          <!-- Color Selector -->
          <div class="mt-6">
            <h4 class="font-bold text-sm text-gray-500 mb-2">Farbe wählen:</h4>
            <div class="flex gap-2 flex-wrap">
              <div v-for="color in productStore.selectedProduct?.colors" :key="color">
                <input 
                  type="radio" 
                  :name="'modal-color'" 
                  :id="'modal-color-' + color" 
                  :value="color" 
                  v-model="selectedColor"
                  class="radio radio-primary hidden"
                />
                <label 
                  :for="'modal-color-' + color" 
                  class="btn btn-sm"
                  :class="{ 'btn-primary': selectedColor === color, 'btn-outline': selectedColor !== color }"
                >{{ color }}</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Section -->
        <div class="mt-8">
          <div class="flex justify-between items-center mb-4">
            <!-- Quantity Selector -->
            <div class="flex items-center gap-3">
              <span class="font-bold text-gray-600">Menge:</span>
              <button class="btn btn-xs btn-outline btn-primary" @click="decrementQuantity">-</button>
              <span class="font-bold text-lg w-4 text-center">{{ quantity }}</span>
              <button class="btn btn-xs btn-outline btn-primary" @click="incrementQuantity">+</button>
            </div>
            <span class="text-4xl font-bold text-funky-pink">{{ productStore.selectedProduct?.price.toFixed(2) }}€</span>
          </div>

          <!-- Add to Cart Button -->
          <button 
            class="btn btn-primary btn-block text-white text-lg"
            @click="handleAddToCart"
            :disabled="!selectedColor"
          >
            <span v-if="!selectedColor">Bitte Farbe wählen</span>
            <span v-else>In den Warenkorb</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProductStore } from '../stores/productStore'

const productStore = useProductStore()

const quantity = ref(1)
const selectedColor = ref<string | null>(null)

// Set a default color when the modal opens
onMounted(() => {
  if (productStore.selectedProduct?.colors?.length) {
    selectedColor.value = productStore.selectedProduct.colors[0]
  }
})

const incrementQuantity = () => quantity.value++
const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const handleAddToCart = () => {
  if (!productStore.selectedProduct || !selectedColor.value) {
    // Safety check, should not happen with the button disabled
    return
  }
  // Call the store action to add the item to the cart
  productStore.addToCart(
    productStore.selectedProduct,
    selectedColor.value,
    quantity.value
  )
}
</script>

<style scoped>
/* Animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out forwards;
}

.text-funky-pink {
  color: #FF1B8D;
}

/* Custom radio button styling */
input[type="radio"]:checked + label {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  color: white;
}
</style>
