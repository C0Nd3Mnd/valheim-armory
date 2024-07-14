<script setup lang="ts">
const model = defineModel<UpgradeLevel>();

defineProps<{
  max: UpgradeLevel;
}>();

function iconName(star: number) {
  return model.value !== undefined && model.value >= star
    ? "i-pepicons-print-star-filled"
    : "i-pepicons-print-star";
}
</script>

<template>
  <div class="flex items-center">
    <UIcon
      v-for="star in max"
      :key="star"
      :name="iconName(star)"
      class="bg-primary-500 cursor-pointer size-6"
      @click="model = star as UpgradeLevel"
    />
    <UIcon
      v-for="unavailable in 4 - max"
      :key="unavailable"
      name="i-pepicons-print-star-off"
      class="bg-gray-300 size-6"
    ></UIcon>
  </div>
</template>
