<script setup lang="ts">
const model = defineModel<UpgradeLevel>();

defineProps<{
  max: UpgradeLevel;
}>();

function iconName(star: number) {
  return model.value !== undefined && model.value >= star
    ? "i-heroicons-star-solid"
    : "i-heroicons-star";
}
</script>

<template>
  <div class="flex items-center">
    <UIcon
      v-for="star in max"
      :key="star"
      :name="iconName(star)"
      class="text-yellow-500 cursor-pointer"
      @click="model = star as UpgradeLevel"
    />
    <UIcon
      v-for="unavailable in 4 - max"
      :key="unavailable"
      name="i-heroicons-x-mark"
      class="text-stone-300"
    ></UIcon>
  </div>
</template>
