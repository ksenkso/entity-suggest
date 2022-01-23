<template>
  <button
    class="dropdown-item"
    @click="$emit('select')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'DropdownItem',
  emits: ['select']
};
</script>

<style lang="scss" scoped>
.dropdown-item {
  border: none;
  background: #fff;
  box-sizing: border-box;
  color: #333;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.125rem;
  padding: 15px 20px;
  position: relative;
  text-decoration: none;

  &:hover {
    background: #eee;
    opacity: 1;
  }
}
</style>
