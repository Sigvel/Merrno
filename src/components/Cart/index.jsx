import { create } from "zustand";

export const useProductStore = create((set) => ({
    count: 0,
    addProduct: () => set((state) => ({count: state.count + 1})),
    clearCart: () => set({ count: 0}),
}))