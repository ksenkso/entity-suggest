<template>
  <div class="company-item">
    <img
      :src="avatar"
      :alt="name || prefixedAlias"
      :aria-label="name || prefixedAlias"
      class="avatar"
    >
    <div class="company-info">
      <div class="name">
        {{ name || prefixedAlias }}
      </div>
      <div class="alias">
        {{ prefixedAlias }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { alias } from '@/components/EntitySuggestions/utils.js';

export default {
  name: 'CompanyItem',

  props: {
    name: {
      type: String,
      default: null,
    },
    alias: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: null,
    }
  },

  setup (props) {
    return {
      prefixedAlias: computed(() => alias(props.alias))
    };
  }
};
</script>
<style>

</style>
