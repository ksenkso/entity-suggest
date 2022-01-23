<template>
  <span class="user-item">
    <span class="avatar-container">
      <Avatar
        type="user"
        :url="avatar"
        :name="name || prefixedAlias"
      />
    </span>
    <span class="user-info">
      <span class="name">
        {{ name || prefixedAlias }}
      </span>
      <span class="alias">
        {{ prefixedAlias }}
      </span>
    </span>
  </span>
</template>

<script>
import { computed } from 'vue';
import { alias } from '@/components/EntitySuggestions/utils.js';
import Avatar from '@/components/Avatar.vue';

export default {
  name: 'UserItem',
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
@import "~@/styles/_variables.scss";

.user-item {
  display: flex;
  align-items: center;
}

.avatar-container {
  border-radius: $border-radius;
  margin-right: 12px;
  width: 32px;
  height: 32px;
}

.user-info {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}
</style>
