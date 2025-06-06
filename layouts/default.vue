<script setup lang="ts">
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main class="flex-1 flex clex-col">
      <slot />
    </main>
  </div>
</template>

<style scoped>

</style>
