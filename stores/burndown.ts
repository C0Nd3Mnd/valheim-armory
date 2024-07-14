export const useBurndownStore = defineStore(
  "burndown",
  () => {
    const damagePerHit = ref(100);

    return {
      damagePerHit,
    };
  },
  { persist: { storage: persistedState.localStorage } },
);
