import { defineStore } from 'pinia'

export interface Product {
  id: number
  name: string
  description: string
  image: string
  price: number
  colors: string[]
}

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Funky Abstract Forms',
        description: 'A set of vibrant, abstract 3D forms that add a playful and artistic touch to any space. Perfect for sparking creativity and conversation.',
        image: 'https://storage.googleapis.com/gemini-studio-assets/funky-prints/001.png',
        price: 49.99,
        colors: ['Hot Pink', 'Lime Green', 'Electric Blue'],
      },
      {
        id: 2,
        name: 'Geometric Heart',
        description: 'A modern take on a classic symbol. This geometric heart combines sharp angles with a soft, emotional core, printed in a stunning, high-quality finish.',
        image: 'https://storage.googleapis.com/gemini-studio-assets/funky-prints/002.png',
        price: 34.99,
        colors: ['Ruby Red', 'Obsidian Black', 'Gold'],
      },
      {
        id: 3,
        name: 'Twisted Spire',
        description: 'An elegant, spiraling sculpture that draws the eye upward. The \'Twisted Spire\' is a sophisticated piece that plays with light and shadow.',
        image: 'https://storage.googleapis.com/gemini-studio-assets/funky-prints/003.png',
        price: 59.99,
        colors: ['Pearl White', 'Silver', 'Copper'],
      },
    ] as Product[],
    isModalOpen: false,
    selectedProduct: null as Product | null,
  }),
  actions: {
    openModal(product: Product) {
      this.selectedProduct = product
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.selectedProduct = null
    },
  },
})