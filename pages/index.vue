<script setup lang="ts">
import { useCharacterStore } from "~/stores/character";

const characterStore = useCharacterStore();
const damageStore = useDamageStore();

const damageStepsPresets = [
  [
    {
      label: "Meadows",
      click: () => {
        damageStore.start = 5;
        damageStore.end = 10;
        damageStore.stepSize = 1;
      },
    },
    {
      label: "Black Forest",
      click: () => {
        damageStore.start = 10;
        damageStore.end = 70;
        damageStore.stepSize = 10;
      },
    },
    {
      label: "Swamp",
      click: () => {
        damageStore.start = 20;
        damageStore.end = 120;
        damageStore.stepSize = 10;
      },
    },
    {
      label: "Mountains",
      click: () => {
        damageStore.start = 40;
        damageStore.end = 110;
        damageStore.stepSize = 10;
      },
    },
    {
      label: "Plains",
      click: () => {
        damageStore.start = 85;
        damageStore.end = 130;
        damageStore.stepSize = 5;
      },
    },
    {
      label: "Mistlands",
      click: () => {
        damageStore.start = 50;
        damageStore.end = 200;
        damageStore.stepSize = 10;
      },
    },
    {
      label: "Ashlands",
      click: () => {
        damageStore.start = 120;
        damageStore.end = 240;
        damageStore.stepSize = 15;
      },
    },
  ],
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl">Character</h2>
    <UFormGroup label="Health">
      <UInput v-model="characterStore.health" type="number" />
    </UFormGroup>
    <h2 class="text-xl">Damage steps</h2>
    <UFormGroup>
      <UDropdown :items="damageStepsPresets">
        <UButton
          label="Load Preset"
          trailing-icon="i-pepicons-print-angle-down"
        />
      </UDropdown>
    </UFormGroup>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
      <UFormGroup label="Start">
        <UInput v-model="damageStore.start" type="number" />
      </UFormGroup>
      <UFormGroup label="End">
        <UInput v-model="damageStore.end" type="number" />
      </UFormGroup>
      <UFormGroup label="Step size">
        <UInput v-model="damageStore.stepSize" type="number" />
      </UFormGroup>
    </div>
    <h2 class="text-xl">Armor Sets</h2>
    <ArmorSetEditor />
  </div>
</template>
