import { Chart } from "chart.js";

export const useSettingsStore = defineStore(
  "settings",
  () => {
    const useStylizedFont = ref(true);

    watch(
      useStylizedFont,
      (value) => {
        Chart.defaults.font.family = value
          ? "Caesar Dressing"
          : "system-ui, sans-serif";
      },
      { immediate: true },
    );

    return {
      useStylizedFont,
    };
  },
  { persist: { storage: persistedState.localStorage } },
);
