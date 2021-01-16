<template>
  <slot :select="onSelect"></slot>

  <div v-if="element.selected">
    <button
      v-if="element.selected"
      class="btn"
      @click="$emit('update')"
      :disabled="disabledUpdate"
    >
      Сохранить изменения
    </button>
    <button class="btn danger" @click="$emit('remove')">
      Удалить элемент
    </button>
  </div>
</template>

<script>
import { config } from '../../config'
export default {
  emits: ['select', 'remove', 'update'],
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    disabledUpdate() {
      return this.element.text.length < config.minLengthText
    },
  },
  methods: {
    onSelect() {
      this.$emit('select')
    },
  },
}
</script>

<style lang="scss" scoped>
.selected {
  border: 2px solid #ccc;
  border-radius: 3px;
}

.element {
  cursor: pointer;
}
</style>
