import { create } from 'zustand'

type CountState = {
    count: number;
    increase: () => void;
    decrease: () => void;
    setHundred: () => void;
};
const useStore = create<CountState>((set) => ({
    count : 0,
    increase : () => set((state) => ({ count: state.count + 1 })),
    decrease : () => set((state) => ({ count: state.count - 1 })),
    setHundred : () => set(() => ({ count: 100 })),
}))

export default useStore;