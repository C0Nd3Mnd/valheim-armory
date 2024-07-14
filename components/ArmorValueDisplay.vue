<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>

<template>
  <UFormGroup label="Total Armor">
    <div class="grid justify-items-center items-center">
      <UIcon
        name="i-pepicons-print-shield"
        class="size-12"
        style="grid-area: 1/1/1/1"
      />
      <span style="grid-area: 1/1/1/1">
        {{ value }}
      </span>
    </div>
  </UFormGroup>
</template>
