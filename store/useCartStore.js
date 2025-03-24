// store/useCartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [], // Regular cart items
      preorders: [], // Preorder items

      // Add to cart
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }
        }),

      // Add to preorders
      addToPreorders: (product) =>
        set((state) => {
          const existingPreorder = state.preorders.find((item) => item.id === product.id);
          if (existingPreorder) {
            return {
              preorders: state.preorders.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { preorders: [...state.preorders, { ...product, quantity: 1 }] };
          }
        }),

      // Remove from cart
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      // Remove from preorders
      removeFromPreorders: (id) =>
        set((state) => ({
          preorders: state.preorders.filter((item) => item.id !== id),
        })),

      // Update quantity of a cart or preorder item
      updateQuantity: (id, newQuantity, isCart = true) =>
        set((state) => ({
          cart: isCart
            ? state.cart.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
              )
            : state.cart,
          preorders: !isCart
            ? state.preorders.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
              )
            : state.preorders,
        })),

      // Clear cart
      clearCart: () => set({ cart: [] }),

      // Clear preorders
      clearPreorders: () => set({ preorders: [] }),
    }),
    {
      name: "cart-store", // Name for localStorage
    }
  )
);

export default useCartStore;