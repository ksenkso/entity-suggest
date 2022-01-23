<template>
  <div :class="className">
    <img
      v-if="url"
      :src="url"
      class="avatar"
      :alt="name"
      :aria-label="name"
    >
    <Icon
      v-else
      :name="`placeholder-${type}`"
      class="avatar-placeholder"
      :aria-label="name"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
export default {
  name: 'Avatar',
  components: { Icon },
  props: {
    url: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    },
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    className () {
      return ['avatar', `avatar_size-${this.size}`, `avatar_type-${this.type}`];
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/_variables.scss";

$sizes: (
  "sm": 18px,
  "md": 32px,
  "lg": 42px,
);

.avatar {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.avatar-container {
  border-radius: $border-radius;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  fill: #8bb58c;
}

.avatar-container_size {
  @each $size, $val in $sizes {
    &-#{$size} {
      width: $val;
      height: $val;
    }
  }
}
</style>
