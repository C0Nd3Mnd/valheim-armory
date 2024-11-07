<script setup lang="ts">
import { chestArmor } from "~/data/chestArmor.js";
import { helmets } from "~/data/helmets";
import { legArmor } from "~/data/legArmor";
import { capes } from "~/data/capes";

const model = defineModel<ArmorSet>({ required: true });

const { deleteSet, moveDown, moveUp } = useArmorStore();

const totalArmorValue = computed(() => getArmorSetValue(model.value));

const name = ref("");
</script>

<template>
  <div
    class="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr_1fr_1fr_1fr_auto] items-start gap-4 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg"
  >
    <UFormGroup label="Name" class="flex-1">
      <UInput v-model="model.name" />
    </UFormGroup>
    <ArmorValueDisplay :value="totalArmorValue" class="flex flex-col w-max" />
    <ArmorPiecePicker
      v-model="model.selection.helmet"
      :pieces="helmets"
      label="Helmet"
    />
    <ArmorPiecePicker
      v-model="model.selection.chest"
      :pieces="chestArmor"
      label="Chest Armor"
    />
    <ArmorPiecePicker
      v-model="model.selection.legs"
      :pieces="legArmor"
      label="Leg Armor"
    />
    <ArmorPiecePicker
      v-model="model.selection.cape"
      :pieces="capes"
      label="Cape"
    />
    <UFormGroup label="Actions">
      <div class="flex gap-2">
        <UIcon
          name="i-pepicons-print-arrow-down"
          title="Move down"
          class="size-8 cursor-pointer bg-primary-500 hover:bg-primary-600"
          @click="moveDown(model)"
        />
        <UIcon
          name="i-pepicons-print-arrow-up"
          title="Move up"
          class="size-8 cursor-pointer bg-primary-500 hover:bg-primary-600"
          @click="moveUp(model)"
        />
        <UIcon
          name="i-pepicons-print-trash"
          title="Delete"
          class="size-8 cursor-pointer bg-red-500 hover:bg-red-600"
          @click="deleteSet(model)"
        />
      </div>
    </UFormGroup>
  </div>
</template>
