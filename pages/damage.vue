<script setup lang="ts">
import { Line } from "vue-chartjs";
const { effectiveDamageChart } = useArmorGraph();
</script>

<template>
  <Line :data="effectiveDamageChart" />
</template>
