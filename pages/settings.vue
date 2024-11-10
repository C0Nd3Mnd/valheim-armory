<script setup lang="ts">
const colorMode = useColorMode();
const settingsStore = useSettingsStore();

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
  <div class="flex flex-col gap-4">
    <UFormGroup label="Color scheme">
      <USelectMenu
        v-model="colorMode.preference"
        :options="colorModeDropdown"
        option-attribute="label"
        value-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Stylized font">
      <UCheckbox
        v-model="settingsStore.useStylizedFont"
        label="Use stylized font"
      />
    </UFormGroup>
  </div>
</template>
