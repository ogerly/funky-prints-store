<template>
    <section id="galerie" class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="font-display text-6xl md:text-7xl font-bold text-center mb-4 text-gradient">
          DIE KOLLEKTION
        </h2>
        <p class="text-center text-xl text-gray-600 mb-16">
          Jedes Stück ein Unikat – handgefertigt mit Liebe zum Detail (und Humor) 😏
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in products"
            :key="product.id"
            class="card bg-white shadow-2xl flex flex-col"
          >
            <figure class="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-8xl">
                {{ product.emoji }}
              </div>
              <div class="absolute top-4 right-4">
                <span class="badge badge-primary badge-lg text-white">{{ product.size }}</span>
              </div>
            </figure>

            <div class="card-body flex-grow flex flex-col justify-between">
              <div>
                <h3 class="card-title text-2xl font-display text-gray-800">
                  {{ product.name }}
                </h3>
                <p class="text-gray-600 mt-2">{{ product.description }}</p>

                <!-- Color Selector -->
                <div class="mt-4">
                  <h4 class="font-bold text-sm text-gray-500 mb-2">Farbe wählen:</h4>
                  <div class="flex gap-2 flex-wrap">
                    <div v-for="color in product.colors" :key="color">
                      <input
                        type="radio"
                        :name="'color-' + product.id"
                        :id="'color-' + product.id + '-' + color"
                        :value="color"
                        v-model="product.selectedColor"
                        class="radio radio-primary hidden"
                      />
                      <label
                        :for="'color-' + product.id + '-' + color"
                        class="btn btn-sm"
                        :class="{ 'btn-primary': product.selectedColor === color, 'btn-outline': product.selectedColor !== color }"
                      >
                        {{ color }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <!-- Quantity & Price -->
                <div class="flex justify-between items-center mb-4">
                   <!-- Quantity Selector -->
                  <div class="flex items-center gap-3">
                    <span class="font-bold text-gray-600">Menge:</span>
                    <button class="btn btn-xs btn-outline btn-primary" @click="decrementQuantity(product)">-</button>
                    <span class="font-bold text-lg w-4 text-center">{{ product.quantity }}</span>
                    <button class="btn btn-xs btn-outline btn-primary" @click="incrementQuantity(product)">+</button>
                  </div>
                  <span class="text-3xl font-bold text-funky-pink">{{ product.price }}€</span>
                </div>

                <!-- Order Button -->
                <button
                  class="btn btn-primary btn-block text-white"
                  @click="placeOrder(product)"
                  :disabled="!product.selectedColor"
                >
                  <span v-if="!product.selectedColor">Bitte Farbe wählen</span>
                  <span v-else>Bestellen & Magic Link anfordern ✨</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Order CTA -->
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

  <script setup>
  import { ref } from 'vue'

  const products = ref([
    {
      id: 1,
      name: 'Der Klassiker',
      emoji: '🍆',
      description: 'Zeitlos, elegant, und immer ein Hingucker. In verschiedenen Größen und Farben.',
      size: 'M',
      colors: ['Pink', 'Lila', 'Neon'],
      price: '24.99',
      quantity: 1,
      selectedColor: 'Pink' // Default color
    },
    {
      id: 2,
      name: 'Peachy Delight',
      emoji: '🍑',
      description: 'Fruchtig, frech, fabelhaft. Handbemalt mit extra viel Liebe.',
      size: 'L',
      colors: ['Pastell', 'Rainbow', 'Glitzer'],
      price: '29.99',
      quantity: 1,
      selectedColor: 'Pastell'
    },
    {
      id: 3,
      name: 'Das Duo',
      emoji: '🍆🍑',
      description: 'Warum sich entscheiden? Das perfekte Paar für jeden Anlass.',
      size: 'Set',
      colors: ['Matching', 'Kontrast'],
      price: '44.99',
      quantity: 1,
      selectedColor: 'Matching'
    },
    {
      id: 4,
      name: 'Mini Edition',
      emoji: '🍆',
      description: 'Klein, aber oho! Perfekt als Geschenk oder Deko.',
      size: 'S',
      colors: ['Rot', 'Blau', 'Grün'],
      price: '14.99',
      quantity: 1,
      selectedColor: 'Rot'
    },
    {
      id: 5,
      name: 'XXL Showpiece',
      emoji: '🍑',
      description: 'Für alle, die es gerne groß und auffällig mögen. Ein echtes Statement!',
      size: 'XXL',
      colors: ['Gold', 'Silber'],
      price: '49.99',
      quantity: 1,
      selectedColor: 'Gold'
    },
    {
      id: 6,
      name: 'Artist Edition',
      emoji: '✨',
      description: 'Limitierte Künstler-Edition mit einzigartigen Designs. Nummeriert!',
      size: 'M',
      colors: ['Unikat'],
      price: '39.99',
      quantity: 1,
      selectedColor: 'Unikat'
    }
  ])

  const incrementQuantity = (product) => {
    product.quantity++
  }

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      product.quantity--
    }
  }

  const placeOrder = (product) => {
    if (!product.selectedColor) {
      alert('Bitte wählen Sie eine Farbe aus.');
      return;
    }
    console.log('--- ✨ Bestellung wird simuliert ---');
    console.log(`Produkt: ${product.name}`);
    console.log(`Menge: ${product.quantity}`);
    console.log(`Farbe: ${product.selectedColor}`);
    console.log(`Preis: ${product.price}€`);
    console.log('Ein Magic Link zur Bestätigung würde jetzt an die E-Mail des Kunden gesendet.');
    alert(`Bestellung für "${product.name}" (${product.selectedColor}) wurde simuliert! Schau in die Entwicklerkonsole für Details.`);
  }

  </script>

  <style scoped>
  /* Styling for the custom radio buttons */
  label.btn {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  /* When the hidden radio is checked, the sibling label (the button) gets a style */
  input[type="radio"]:checked + label {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--p) / var(--tw-bg-opacity));
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
    color: white;
  }
  </style>
