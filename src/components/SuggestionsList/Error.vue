<template>
  <div class="error dropdown-message">
    <div class="error__title">
      Ошибка!
    </div>
    <div class="error__message">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      required: true,
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/components/DropdownMessage.scss";

.error {
  &__title {
    font-weight: bold;
    margin-bottom: 4px;
  }
}
</style>
