<template>
  <button
    :class="className"
    @click="$emit('select')"
    @mouseenter="onMouseEnter"
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
  emits: ['select', 'deactivate'],
  computed: {
    className () {
      return ['dropdown-item', this.active && 'dropdown-item_active'];
    }
  },
  methods: {
    onMouseEnter () {
      if (!this.active) {
        this.$emit('deactivate');
      }
    }
  }
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
