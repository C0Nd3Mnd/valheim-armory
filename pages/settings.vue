<script setup lang="ts">
const colorMode = useColorMode();

const colorModeDropdown = [
  {
    label: "System",
    value: "system",
  },
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
];
</script>

<template>
  <UFormGroup label="Color scheme">
    <USelectMenu
      v-model="colorMode.preference"
      :options="colorModeDropdown"
      option-attribute="label"
      value-attribute="value"
    />
  </UFormGroup>
</template>
