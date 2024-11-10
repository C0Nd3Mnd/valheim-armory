<script setup lang="ts">
import { Line } from "vue-chartjs";
import type { ChartOptions, ChartData } from "chart.js";

const props = defineProps<{
  data: ChartData<"line">;
  options: ChartOptions<"line">;
}>();

const baseChartOptions: ChartOptions<"line"> = {
  maintainAspectRatio: true,
  aspectRatio: Math.max(
    (Math.min(window.innerWidth, 1536) / window.innerHeight) * 1.25,
    1,
  ),
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const enabledDatasets = [];

const finalData = computed(() => props.data);

const finalChartOptions = computed<ChartOptions<"line">>(() => ({
  ...baseChartOptions,
  ...props.options,
}));
</script>

<template>
  <Line :data="finalData" :options="finalChartOptions" />
  <div class="flex gap-4 justify-center flex-wrap">
    <UCheckbox
      v-for="dataset of props.data.datasets"
      :key="dataset.label"
      :model-value="true"
      :label="dataset.label"
      :color="dataset.borderColor"
      :style="{ color: dataset.borderColor }"
      :ui="{ inner: 'ms-1' }"
    />
  </div>
</template>
