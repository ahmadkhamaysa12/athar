import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,

      Login: (token) =>
        set({
          token,
        }),
      logout: () =>
        set({
          token: null,
        }),
    }),
    {
      name: 'token',
    },
  ),
);

export default useAuthStore;
