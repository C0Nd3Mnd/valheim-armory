<script setup lang="ts">
import { Line } from "vue-chartjs";
const { chartData } = useArmorGraph();
</script>

<template>
  <Line :data="chartData" />
  <ArmorSetEditor />
</template>
