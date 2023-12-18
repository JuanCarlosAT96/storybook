<template>
  <button
    @click="handleClick"
    :class="{ 'primary-button': primary, 'secondary-button': !primary }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    primary: Boolean,
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("click");
    };

    return {
      handleClick,
    };
  },
});
</script>

<style scoped>
.primary-button {
  background-color: #3498db;
  color: #ffffff;
}

.secondary-button {
  background-color: #ecf0f1;
  color: #333333;
}
</style>
