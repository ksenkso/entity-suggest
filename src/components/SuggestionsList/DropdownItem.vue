<template>
  <li
    role="option"
    :class="className"
    :aria-selected="selected"
    @click="$emit('select')"
  >
    <slot />
  </li>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: {
    active: {
      type: Boolean,
    },
    selected: {
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
  cursor: pointer;
  display: block;
  font-size: 1rem;
  padding: 0;
  @include font;
  button {
    width: 100%;
  }

  &:hover, &_active {
    background: #eee;
  }
}
</style>
