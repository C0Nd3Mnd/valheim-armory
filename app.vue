<script setup lang="ts">
import "@fontsource/caesar-dressing";

useHead({
  title: "Valheim Armory",
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
});

const settingsStore = useSettingsStore();
</script>

<template>
  <StylizedFontInjector v-if="settingsStore.useStylizedFont" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
