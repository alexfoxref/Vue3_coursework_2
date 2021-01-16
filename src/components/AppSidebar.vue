<template>
  <form class="card card-w30" @submit.prevent="create">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" :value="currentType" @change="changeType">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea
        id="value"
        rows="3"
        :value="currentText"
        @input="changeText"
      ></textarea>
    </div>

    <button class="btn primary" :disabled="disabled">Добавить</button>
  </form>
</template>

<script>
import { config } from '../config'

export default {
  emits: {
    create(obj) {
      if (obj.type && obj.text?.length >= config.minLengthText) {
        return true
      }

      console.warn('Fields "type" and "text" are required for emits "create"')
      return false
    },
    updateSelected(obj) {
      if (obj.type || obj.text?.length >= config.minLengthText) {
        return true
      }

      console.warn(
        'Fields "type" or "text" are required for emits "updateSelected"'
      )
      return false
    },
  },
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      type: this.element?.title ?? 'title',
      text: this.element?.text ?? '',
    }
  },
  methods: {
    clear() {
      this.type = 'title'
      this.text = ''
    },
    create() {
      this.$emit('create', { type: this.type, text: this.text })
      this.clear()
    },
    changeType(event) {
      this.type = event.target.value
      if (this.element) {
        this.$emit('updateSelected', { type: this.type })
        this.clear()
      }
    },
    changeText(event) {
      this.text = event.target.value
      if (this.element) {
        this.$emit('updateSelected', { text: this.text })
        this.clear()
      }
    },
  },
  computed: {
    disabled() {
      return this.currentText.length < config.minLengthText || this.element
    },
    currentType() {
      return this.element?.type ?? this.type
    },
    currentText() {
      return this.element?.text ?? this.text
    },
  },
}
</script>

<style lang="scss" scoped></style>
