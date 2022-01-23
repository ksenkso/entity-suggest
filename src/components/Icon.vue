<template>
  <svg class="icon">
    <use :href="`symbols.svg#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
