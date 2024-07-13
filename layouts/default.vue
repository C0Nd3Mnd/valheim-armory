<script setup lang="ts">
const drawer = ref(false);

const links = [
  {
    label: "Configuration",
    to: "/",
  },
  {
    label: "Damage taken",
    to: "/damage",
  },
  {
    label: "Hits tanked",
    to: "/hits",
  },
];
</script>

<template>
  <div class="container mx-auto flex flex-col">
    <UHorizontalNavigation :links="links" />
    <slot />
  </div>
</template>
