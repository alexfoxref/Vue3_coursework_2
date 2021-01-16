<template>
  <div :class="{ message: true, error }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    error: Boolean,
    default: () => false,
  },
}
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  border-left: 10px solid blue;
  background: rgb(224, 233, 255);

  &.error {
    background: rgb(255, 224, 224);
    border-left-color: red;
  }
}
</style>
