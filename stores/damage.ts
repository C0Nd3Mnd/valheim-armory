export const useDamageStore = defineStore(
  "damageStep",
  () => {
    const start = ref(10);
    const end = ref(200);
    const stepSize = ref(10);

    /**
     * Damage values to calculate the damage taken for.
     */
    const steps = computed(() => {
      const s: number[] = [];

      for (let i = start.value; i < end.value; i += stepSize.value) {
        s.push(i);
      }

      s.push(end.value);

      return s;
    });

    return { start, end, stepSize, steps };
  },
  { persist: { storage: persistedState.localStorage } },
);
