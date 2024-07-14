<script setup lang="ts">
import { Line } from "vue-chartjs";
const { burndownChart } = useBurndownGraph();
const burndownStore = useBurndownStore();
</script>

<template>
  <div class="flex flex-col">
    <UFormGroup label="Damage per hit">
      <UInput v-model="burndownStore.damagePerHit" type="number" />
    </UFormGroup>
    <Line :data="burndownChart" />
  </div>
</template>
