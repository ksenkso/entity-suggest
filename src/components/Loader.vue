<template>
  <transition
    name="fade"
    appear
  >
    <span
      v-if="shouldRender"
      class="loader__container"
    >
      <svg
        class="loader"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke-dasharray="95"
            fill="none"
            stroke-width="4"
            stroke="#90a7b9"
          />
        </g>
      </svg>
    </span>
  </transition>
</template>

<script>
import { onBeforeUnmount, ref } from 'vue';

export default {
  name: 'Loader',
  props: {
    loading: {
      type: Boolean,
    },
    delay: {
      type: Number,
      default: 100,
    },
  },
  setup (props) {
    const shouldRender = ref(false);

    let timeout;
    const delayDisplay = () => {
      timeout = setTimeout(() => {
        shouldRender.value = true;
      }, props.delay);
    };
    delayDisplay();

    onBeforeUnmount(() => {
      clearTimeout(timeout);
    });

    return {
      shouldRender
    };
  }
};
</script>
<style lang="scss" scoped>

.loader {
  animation: 2s linear infinite spin;
  width: 32px;
  height: 32px;
  margin: 0 auto;

  &__container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: opacity .1s ease-in-out;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
