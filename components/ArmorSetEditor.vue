<script setup lang="ts">
const model = defineModel<ArmorSet[]>();

function addSet() {
  if (model.value === undefined) {
    model.value = [];
  }

  model.value.push({
    name: "Unnamed",
    totalArmor: 50,
  });
}
</script>

<template>
  <VList>
    <VListItem v-for="(armorSet, index) of model" :key="index">
      <div class="d-flex ga-2">
        <VTextField v-model="armorSet.name" label="Name" />
        <VTextField
          v-model="armorSet.totalArmor"
          type="number"
          label="Total Armor"
        />
      </div>
    </VListItem>
  </VList>
  <VBtn @click="addSet()">Add</VBtn>
</template>
