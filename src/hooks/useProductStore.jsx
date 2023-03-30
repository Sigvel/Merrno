import { create } from "zustand";
import { saveLocalStorage, getLocalStorage } from "../components/LocalStorage";
// product store
export const useProductStore = create((set) => ({
  products: getLocalStorage(),

  // Add products.
  addProduct: (product) =>
    set((state) => {
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      let newProducts;
      if (productIndex !== -1) {
        newProducts = state.products.map((p, index) =>
          index === productIndex ? { ...p, quantity: p.quantity + 1, 
            discountedPrice: p.discountedPrice + p.discountedPrice / p.quantity,
            price: p.price + p.price / p.quantity } : p
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
      const newProducts = state.products.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1, 
        discountedPrice: ((product.quantity + 1) * product.discountedPrice) / product.quantity,
        price: ((product.quantity + 1) * product.price) / product.quantity } : product
      );


      saveLocalStorage(newProducts);

      return { products: newProducts };
    }),

  // decrement quantity
  decrementQuantity: (id) =>
    set((state) => {
      const newProducts = state.products.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: Math.max(0, product.quantity - 1), 
            discountedPrice: (Math.max(0, product.quantity - 1) * product.discountedPrice) / product.quantity,
            price: (Math.max(0, product.quantity - 1) * product.price) / product.quantity
         } : { ...product }
      );

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

  // Clear products and amount.
  checkout: () =>
    set((state) => {
      const totalCost = state.products.reduce((total, product) => total + product.discountedPrice, 0)
      const order = {
        products: state.products,
        totalCost,
      }

      const newProducts = [];
      saveLocalStorage(newProducts);

      return { products: newProducts, order };
    }),
}));

function useStore() {
  const addProduct = useProductStore((state) => state.addProduct);
  const removeProduct = useProductStore((state) => state.removeProduct);
  const products = useProductStore((state) => state.products);
  const checkout = useProductStore((state) => state.checkout);
  const incrementQuantity = useProductStore((state) => state.incrementQuantity);
  const decrementQuantity = useProductStore((state) => state.decrementQuantity);

  function addToCart(product) {
    addProduct(product);
    console.log(products);
  }

  function increment(id) {
    incrementQuantity(id);
  }

  function decrement(id) {
    decrementQuantity(id);
  }

  function removeFromCart(id) {
    removeProduct(id);
    console.log(products);
  }

  function getCartTotal() { 
  return products.reduce((total, product) => total + product.discountedPrice, 0);
  }

  function getCartQuantity() {
    return products.reduce((total, product) => total + product.quantity, 0);
  }

  function cartCheckout() {
    checkout();
    console.log(products);
  }

  return { addToCart, removeFromCart, cartCheckout, getCartQuantity, getCartTotal, increment, decrement};
}

export { useStore };