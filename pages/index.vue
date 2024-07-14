<script setup lang="ts">
import { useCharacterStore } from "~/stores/character";

const characterStore = useCharacterStore();
const damageStore = useDamageStore();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl">Character</h2>
    <UFormGroup label="Health">
      <UInput v-model="characterStore.health" type="number" />
    </UFormGroup>
    <h2 class="text-xl">Damage steps</h2>
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
    <h2 class="text-xl">Armor</h2>
    <ArmorSetEditor />
  </div>
</template>
