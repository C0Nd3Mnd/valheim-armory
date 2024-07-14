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

watch(
  () => model.value.name,
  () => (model.value.level = 1),
);
</script>

<template>
  <UFormGroup>
    <div class="flex flex-col gap-2">
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
  </UFormGroup>
</template>
