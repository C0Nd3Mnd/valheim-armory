<script setup lang="ts">
const armorStore = useArmorStore();
</script>

<template>
  <div class="flex flex-col gap-2">
    <ArmorConfigurator
      v-for="(armorSet, index) in armorStore.sets"
      :key="index"
      v-model="armorStore.sets[index]"
    />
    <UButton
      size="xl"
      block
      icon="i-pepicons-print-plus-circle-filled"
      @click="armorStore.addSet()"
    >
      Add new Armor Set
    </UButton>
  </div>
</template>
