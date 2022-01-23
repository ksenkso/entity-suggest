<template>
  <span class="tag">
    <slot />
    <button
      class="close"
      @click="remove"
    >
      <Icon
        name="close"
        class="close"
      />
    </button>
  </span>
</template>

<script>
import Icon from '@/components/Icon.vue';
export default {
  name: 'Tag',
  components: { Icon },
  emits: ['remove'],
  methods: {
    remove (e) {
      e.stopPropagation();
      this.$emit('remove');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/_variables.scss";

.tag {
  display: flex;
  align-items: baseline;
  height: 28px;
  margin-right: 4px;
  padding: 4px;
  border-radius: 3px;
  background-color: $brand-color;
  color: $white;
  font-size: 14px;
  font-weight: 700;

  button {
    margin-left: 4px;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    color: inherit;

    .close {
      width: 8px;
      height: 8px;
      fill: currentColor;
    }
  }
}
</style>
