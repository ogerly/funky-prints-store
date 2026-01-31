<template>
    <footer class="bg-neutral text-white py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="md:col-span-2">
            <h3 class="font-display text-4xl font-bold mb-4 text-gradient-alt">
              FUNKY PRINTS
            </h3>
            <p class="text-gray-300 mb-6">
              3D-gedruckte Kunstwerke für Erwachsene mit Humor. 
              Handgemacht in Deutschland. 🇩🇪
            </p>
            <div class="flex gap-4">
              <a href="#" class="btn btn-circle btn-primary hover:scale-110 transition-transform">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="btn btn-circle btn-secondary hover:scale-110 transition-transform">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="font-bold text-lg mb-4">Links</h4>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#galerie" class="hover:text-funky-pink transition-colors">Galerie</a></li>
              <li><a href="#" class="hover:text-funky-pink transition-colors">Shop</a></li>
              <li><a href="#" class="hover:text-funky-pink transition-colors">Custom Orders</a></li>
              <li><a href="#" class="hover:text-funky-pink transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <!-- Legal -->
          <div>
            <h4 class="font-bold text-lg mb-4">Rechtliches</h4>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#" class="hover:text-funky-pink transition-colors">Impressum</a></li>
              <li><a href="#" class="hover:text-funky-pink transition-colors">Datenschutz</a></li>
              <li><a href="#" class="hover:text-funky-pink transition-colors">AGB</a></li>
              <li><a href="#" class="hover:text-funky-pink transition-colors">Widerrufsrecht</a></li>
            </ul>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <!-- Bottom -->
        <div class="text-center text-gray-400">
          <p class="mb-2">🔞 Alle Produkte sind nur für Erwachsene (18+) bestimmt.</p>
          <p>&copy; 2026 Funky Prints. Made with 💜 in Germany.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .text-gradient-alt {
    background: linear-gradient(135deg, #FF1B8D 0%, #4CC9F0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  </style>