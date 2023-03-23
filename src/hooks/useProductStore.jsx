import { create } from "zustand";
import { saveLocalStorage, getLocalStorage } from "../components/LocalStorage";
// product store
export const useProductStore = create((set) => ({
  products: getLocalStorage(),

  // Add products.
  addProduct: (product) =>
    set((state) => {
      const productIndex = state.products.findIndex(p => p.id === product.id);
      let newProducts;
      if (productIndex !== -1) {
        newProducts = state.products.map((p, index) => 
          index === productIndex ? { ...p, quantity: p.quantity + 1 } : p
      );
      } else {
        newProducts = [...state.products, { ...product, quantity: 1 }];
      }
      saveLocalStorage(newProducts);
      return { products: newProducts };
    }),

// increment quantity
  incrementQuantity: (id) =>
    set((state) => {
      const newProducts = state.products.map((product) => (product.id === id ? { ...product, 
        quantity: product.quantity + 1, 
        discountedPrice: (product.quantity + 1)* product.discountedPrice/product.quantity} : product));
      saveLocalStorage(newProducts);
      return { products: newProducts };
    }),

// decrement quantity
  decrementQuantity: (id) =>
    set((state) => {
      const newProducts = state.products.map((product) => (product.id === id && product.quantity > 0 ) ? 
      { ...product, 
        quantity: Math.max(0, product.quantity - 1), 
        discountedPrice: (Math.max(0,(product.quantity - 1))) * product.discountedPrice/product.quantity} : {...product});
      saveLocalStorage(newProducts);
      return { products: newProducts };
    }),

  // Remove product
  removeProduct: (id) =>
    set((state) => {
      const newProducts = state.products.filter((product) => product.id !== id);
      saveLocalStorage(newProducts);
      return { products: newProducts };
    }),

  // Clear products and amount
  clearCart: () => set({ products: [] }),
}));

function useStore() {
  const addProduct = useProductStore((state) => state.addProduct);
  const removeProduct = useProductStore((state) => state.removeProduct);
  const products = useProductStore((state) => state.products);
  const incrementQuantity = useProductStore((state) => state.incrementQuantity);
  const decrementQuantity = useProductStore((state) => state.decrementQuantity);

  function addToCart(product) {
    addProduct(product);
    console.log(products);
  }

  function increment(id) {
    incrementQuantity(id);
    console.log(products);
  }

  function decrement(id) {
    decrementQuantity(id);
    console.log(products);
  }

  function removeFromCart(id) {
    removeProduct(id);
    console.log(products);
  }

  function clearCart() {
    console.log("Cart cleared");
  }

  function getCartTotal() {
    return products.reduce((total, product) => total + product.discountedPrice * product.length, 0);
  }

  return { addToCart, removeFromCart, clearCart, getCartTotal, increment, decrement };
}

export { useStore };
