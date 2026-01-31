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
            class="card bg-white shadow-2xl hover:shadow-funky-pink/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <figure class="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <!-- Placeholder for product image -->
              <div class="absolute inset-0 flex items-center justify-center text-8xl">
                {{ product.emoji }}
              </div>
              <div class="absolute top-4 right-4">
                <span class="badge badge-primary badge-lg text-white">{{ product.size }}</span>
              </div>
            </figure>
            
            <div class="card-body">
              <h3 class="card-title text-2xl font-display text-gray-800">
                {{ product.name }}
              </h3>
              <p class="text-gray-600">{{ product.description }}</p>
              
              <div class="flex gap-2 mt-2 flex-wrap">
                <div 
                  v-for="color in product.colors" 
                  :key="color"
                  class="badge badge-outline"
                >
                  {{ color }}
                </div>
              </div>
              
              <div class="card-actions justify-between items-center mt-4">
                <span class="text-3xl font-bold text-funky-pink">{{ product.price }}€</span>
                <button class="btn btn-primary text-white">
                  Zum Shop 🛒
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
      price: '24.99'
    },
    {
      id: 2,
      name: 'Peachy Delight',
      emoji: '🍑',
      description: 'Fruchtig, frech, fabelhaft. Handbemalt mit extra viel Liebe.',
      size: 'L',
      colors: ['Pastel', 'Rainbow', 'Glitzer'],
      price: '29.99'
    },
    {
      id: 3,
      name: 'Das Duo',
      emoji: '🍆🍑',
      description: 'Warum sich entscheiden? Das perfekte Paar für jeden Anlass.',
      size: 'Set',
      colors: ['Matching', 'Kontrast'],
      price: '44.99'
    },
    {
      id: 4,
      name: 'Mini Edition',
      emoji: '🍆',
      description: 'Klein, aber oho! Perfekt als Geschenk oder Deko.',
      size: 'S',
      colors: ['Alle Farben'],
      price: '14.99'
    },
    {
      id: 5,
      name: 'XXL Showpiece',
      emoji: '🍑',
      description: 'Für alle, die es gerne groß und auffällig mögen. Ein echtes Statement!',
      size: 'XXL',
      colors: ['Custom'],
      price: '49.99'
    },
    {
      id: 6,
      name: 'Artist Edition',
      emoji: '✨',
      description: 'Limitierte Künstler-Edition mit einzigartigen Designs. Nummeriert!',
      size: 'M',
      colors: ['Unikat'],
      price: '39.99'
    }
  ])
  </script>
  
  <style scoped>
  </style>