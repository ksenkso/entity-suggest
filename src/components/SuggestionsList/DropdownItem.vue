<template>
  <button
    :class="className"
    @click="$emit('select')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: {
    active: {
      type: Boolean,
    },
  },
  emits: ['select'],
  computed: {
    className () {
      return ['dropdown-item', this.active && 'dropdown-item_active'];
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_mixins.scss";

.dropdown-item {
  border: none;
  background: #fff;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.125rem;
  padding: 0;
  position: relative;
  text-decoration: none;
  @include font;

  &:hover, &_active {
    background: #eee;
  }
}
</style>
