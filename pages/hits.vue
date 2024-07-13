<script setup lang="ts">
import { Line } from "vue-chartjs";
const { tankedHitsChart } = useArmorGraph();
</script>

<template>
  <Line :data="tankedHitsChart" />
</template>
