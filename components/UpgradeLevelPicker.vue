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

function color(star: number) {
  return model.value !== undefined && model.value >= star
    ? "bg-primary-500"
    : "bg-gray-500";
}
</script>

<template>
  <div class="flex items-center">
    <UIcon
      v-for="star in max"
      :key="star"
      :name="iconName(star)"
      class="cursor-pointer size-6"
      :class="color(star)"
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
