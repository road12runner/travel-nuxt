<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const { loading, signIn } = useAuthStore();
</script>

<template>
  <button :disabled="loading" class="btn btn-accent" @click="signIn">
    Sign In
    <span v-if="loading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>

<style scoped>

</style>
