<template>
  <div>
    <p>
      <strong>{{ item.email }}</strong>
    </p>
    <small>{{ item.body }}</small>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        email: '',
        body: '',
      }),
    },
  },
}
</script>

<style lang="scss" scoped></style>
