<script setup lang="ts">
const drawer = ref(false);

const links = [
  {
    label: "Configuration",
    to: "/",
    icon: "i-pepicons-print-gear",
  },
  {
    label: "Damage taken",
    to: "/damage",
    icon: "i-pepicons-print-sword",
  },
  {
    label: "Hits tanked",
    to: "/hits",
    icon: "i-pepicons-print-sword-shield",
  },
  {
    label: "Health burndown",
    to: "/burndown",
    icon: "i-pepicons-print-fire",
  },
];
</script>

<template>
  <div class="container mx-auto my-4">
    <UCard :ui="{ header: { padding: 'pb-0' } }">
      <template #header class="p-0 px-0 py-0">
        <div class="flex flex-col gap-2">
          <div class="flex gap-1 items-start">
            <h1 class="text-2xl">Valheim Armory</h1>
            <h4 class="text-md text-gray-400">alpha</h4>
          </div>
          <UHorizontalNavigation :links="links" />
        </div>
      </template>
      <slot />
      <template #footer>
        <FooterInfo />
      </template>
    </UCard>
  </div>
</template>
