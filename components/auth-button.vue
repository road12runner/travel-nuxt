<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const { loading, signIn, user } = useAuthStore();
</script>

<template>
  <div v-if="!loading && user" class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1">
      <div v-if="user.image" class="avatar">
        <div class="w-8 rounded-full">
          <img :src="user.image" :alt="user.name">
        </div>
      </div>
      {{ user.name }}
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow">
      <li>
        <NuxtLink to="/sign-out">
          <Icon name="tabler:logout-2" size="24" />
          Sign Out
        </NuxtLink>
      </li>
    </ul>
  </div>
  <button v-else :disabled="loading" class="btn btn-accent" @click="signIn">
    Sign In
    <span v-if="loading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>

<style scoped>

</style>
