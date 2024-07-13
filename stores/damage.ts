export const useDamageStore = defineStore(
  "damageStep",
  () => {
    /**
     * Damage values to calculate the damage taken for.
     */
    const steps = ref(
      new Array(20).fill(0).map((_, index) => (index + 5) * 10),
    );
    // const steps = ref([10, 20]);

    return { steps };
  },
  // { persist: true },
);
