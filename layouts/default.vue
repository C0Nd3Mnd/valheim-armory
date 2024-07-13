<script setup lang="ts">
const drawer = ref(false);
</script>

<template>
  <v-app>
    <v-app-bar density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Valheim Armory</v-app-bar-title>
    </v-app-bar>
    Install and use Vuetify
    <VNavigationDrawer v-model="drawer">
      <v-list nav>
        <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox" />
      </v-list>
    </VNavigationDrawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
