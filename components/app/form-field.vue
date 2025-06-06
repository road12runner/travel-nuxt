<script setup lang="ts">
defineProps<{
  label: string;
  name: string;
  type?: "text" | "textarea" | "number";
  error?: string;
  disabled?: boolean;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">
      {{ label }}
    </legend>
    <Field
      :as="type ? (type === 'textarea' ? 'textarea' : 'input') : 'input'"
      :name="name"
      :type="type ?? 'text'"
      class="w-full"
      :class="{
        'input': !type || type === 'text' || type === 'number',
        'textarea': type === 'textarea',
        'input-error': error,
      }"
      :disabled="disabled"
    />
    <p v-if="error" class="fieldset-label text-error">
      {{ error }}
    </p>
  </fieldset>
</template>

<style scoped>

</style>
