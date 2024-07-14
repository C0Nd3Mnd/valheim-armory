<script setup lang="ts">
const armorStore = useArmorStore();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div v-for="(_, index) in armorStore.sets" :key="index">
      <ArmorConfigurator v-model="armorStore.sets[index]" />
    </div>
    <UButton @click="armorStore.addSet()">Add</UButton>
  </div>
</template>
