<script setup lang="ts">
const armorStore = useArmorStore();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div v-for="(armorSet, index) of armorStore.sets" :key="index">
      <div class="flex gap-2 items-end">
        <UFormGroup label="Name" class="flex-1">
          <UInput v-model="armorSet.name" placeholder="Heavy" />
        </UFormGroup>
        <UFormGroup label="Total Armor">
          <UInput
            v-model="armorSet.totalArmor"
            type="number"
            placeholder="50"
          />
        </UFormGroup>
        <UButton color="red" @click="armorStore.deleteSet(armorSet)">
          Delete
        </UButton>
      </div>
    </div>
    <UButton @click="armorStore.addSet()">Add</UButton>
  </div>
</template>
