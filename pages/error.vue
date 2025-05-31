<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unexpected error occurred";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-[400px] text-center mx-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="alert alert-error min-w-1/2 text-center flex flex-col justify-center items-center gap-4">
      <div>
        <span class="font-bold">Error!</span>
        <span>Something went wrong.</span>
        <span class="block">{{ error }}</span>
      </div>
      <div class="flex-none">
        <NuxtLink to="/" class="btn btn-primary">
          Go Home
          <Icon name="tabler:arrow-left" size="32" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
