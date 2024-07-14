<script setup lang="ts">
import { chestArmor } from "~/data/chestArmor.js";
import { helmets } from "~/data/helmets";
import { legArmor } from "~/data/legArmor";
import { capes } from "~/data/capes";

const model = defineModel<ArmorSet>({ required: true });

const totalArmorValue = computed(() => getArmorSetValue(model.value));

const name = ref("");
</script>

<template>
  <div class="flex items-center justify-between gap-4">
    <UFormGroup label="Name" class="flex-1">
      <UInput v-model="model.name" />
    </UFormGroup>
    <span>{{ totalArmorValue }}</span>
    <div class="grid grid-cols-2 gap-2 items-center">
      <span>Helmet</span>
      <ArmorPiecePicker v-model="model.selection.helmet" :pieces="helmets" />
      <span>Chest Armor</span>
      <ArmorPiecePicker v-model="model.selection.chest" :pieces="chestArmor" />
      <span>Leg Armor</span>
      <ArmorPiecePicker v-model="model.selection.legs" :pieces="legArmor" />
      <span>Cape</span>
      <ArmorPiecePicker v-model="model.selection.cape" :pieces="capes" />
    </div>
  </div>
</template>
