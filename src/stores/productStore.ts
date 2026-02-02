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
        name: 'Cosmic Kiss',
        description: 'A sensual sculpture capturing a moment of interstellar intimacy. The glossy, intertwined forms create a dynamic and evocative centerpiece.',
        image: 'https://storage.googleapis.com/gemini-studio-assets/funky-prints/004.png',
        price: 69.99,
        colors: ['Galaxy Purple', 'Stardust Silver', 'Nebula Pink'],
    },
    {
        id: 2,
        name: 'Venus Bloom',
        description: 'Inspired by botanical anatomy, this print is a celebration of natural curves and sensual forms. A vibrant, eye-catching piece that adds a touch of playful eroticism.',
        image: 'https://storage.googleapis.com/gemini-studio-assets/funky-prints/005.png',
        price: 49.99,
        colors: ['Passion Red', 'Orchid Pink', 'Forest Green'],
    },
    {
        id: 3,
        name: 'Liquid Desire',
        description: 'This abstract form flows with a captivating, molten energy. Its smooth, reflective surface and sensual curves make it a mesmerizing addition to any modern decor.',
        image: 'https://storage.googleapis.com/gemini-studio-assets/funky-prints/006.png',
        price: 59.99,
        colors: ['Molten Gold', 'Chrome Silver', 'Obsidian Black'],
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
