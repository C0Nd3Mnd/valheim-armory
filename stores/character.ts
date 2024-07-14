export const useCharacterStore = defineStore(
  "character",
  () => {
    const health = ref(100);

    return {
      health,
    };
  },
  { persist: { storage: persistedState.localStorage } },
);
