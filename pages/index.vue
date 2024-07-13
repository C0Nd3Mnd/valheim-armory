<script setup lang="ts">
import { Line } from "vue-chartjs";
const { chartData, armorSets } = useArmorGraph();
</script>

<template>
  <Line :data="chartData" />
  <ArmorSetEditor v-model="armorSets" />
</template>
