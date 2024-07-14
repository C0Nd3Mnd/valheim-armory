<script setup lang="ts">
const props = defineProps<{
  pieces: ArmorPiece[];
}>();

const model = defineModel<{ name: string; level: UpgradeLevel }>({
  required: true,
});

const selectedPiece = computed(() =>
  props.pieces.find(({ name }) => name === model.value.name),
);
</script>

<template>
  <div class="flex gap-2 items-center">
    <USelectMenu
      v-model="model.name"
      :options="pieces"
      option-attribute="name"
      value-attribute="name"
      class="flex-1"
    />
    <UpgradeLevelPicker
      v-model="model.level"
      :max="Object.keys(selectedPiece?.armor ?? 0).length as UpgradeLevel"
    />
  </div>
</template>
