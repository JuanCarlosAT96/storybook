<template>
  <div>
    <input
      v-model="value"
      :placeholder="placeholder"
      @input="updateCharacterCount"
    />
    <p>Contador de letras: {{ characterCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter text",
    },
  },
  setup(props) {
    const characterCount = ref(props.value.length);

    const updateCharacterCount = () => {
      characterCount.value = props.value.length;
    };

    watch(() => props.value, updateCharacterCount);

    return {
      characterCount,
      updateCharacterCount,
    };
  },
});
</script>

<style scoped>
/* Estilos opcionales aquí */
</style>
