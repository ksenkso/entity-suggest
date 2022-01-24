<template>
  <span class="entity-item">
    <span class="entity-item__avatar">
      <Avatar
        type="company"
        :url="avatar"
        :name="name || prefixedAlias"
      />
    </span>
    <span class="entity-item__info">
      <span class="entity-item__name">
        {{ name || prefixedAlias }}
      </span>
      <span class="entity-item__alias">
        Компания
      </span>
    </span>
  </span>
</template>

<script>
import { computed } from 'vue';
import { alias } from '@/components/EntitySuggestions/utils.js';
import Avatar from '@/components/Avatar.vue';

export default {
  name: 'CompanyItem',
  components: { Avatar },
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
<style lang="scss" scoped>
@import "~@/styles/components/EntityItem.scss";
</style>
