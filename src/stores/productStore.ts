import { defineStore } from 'pinia'

// Einzelnes Produkt
export interface Product {
  id: number
  name: string
  description: string
  image: string
  price: number
  colors: string[]
}

// Artikel im Warenkorb
export interface CartItem {
  cartId: string // Eindeutige ID für diesen Warenkorb-Eintrag
  productId: number
  name: string
  image: string
  price: number
  color: string
  quantity: number
}

// Struktur des Stores
interface ProductStoreState {
  products: Product[]
  isModalOpen: boolean
  selectedProduct: Product | null
  cart: CartItem[]
  isCartOpen: boolean
}

export const useProductStore = defineStore('products', {
  state: (): ProductStoreState => ({
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
            description: "An elegant, spiraling sculpture that draws the eye upward. The 'Twisted Spire' is a sophisticated piece that plays with light and shadow.",
            image: 'https://storage.googleapis.com/gemini-studio-assets/funky-prints/003.png',
            price: 59.99,
            colors: ['Pearl White', 'Silver', 'Copper'],
        },
    ],
    isModalOpen: false,
    selectedProduct: null,
    cart: [],
    isCartOpen: false,
  }),

  actions: {
    // Modal-Steuerung
    openModal(product: Product) {
      this.selectedProduct = product
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },

    // Warenkorb-Steuerung
    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },

    addToCart(product: Product, color: string, quantity: number) {
      const existingItem = this.cart.find(
        item => item.productId === product.id && item.color === color
      )

      if (existingItem) {
        // Wenn Artikel bereits im Warenkorb ist, nur Menge erhöhen
        existingItem.quantity += quantity
      } else {
        // Andernfalls neuen Artikel hinzufügen
        const newItem: CartItem = {
          cartId: `cart-${Date.now()}-${Math.random()}`,
          productId: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          color: color,
          quantity: quantity,
        }
        this.cart.push(newItem)
      }
      this.closeModal()
    },

    removeFromCart(cartId: string) {
      this.cart = this.cart.filter(item => item.cartId !== cartId)
    },

    updateQuantity(cartId: string, newQuantity: number) {
      const item = this.cart.find(item => item.cartId === cartId)
      if (item && newQuantity > 0) {
        item.quantity = newQuantity
      } else if (item && newQuantity <= 0) {
        // Bei Menge 0 oder weniger, Artikel entfernen
        this.removeFromCart(cartId)
      }
    },
  },
})
