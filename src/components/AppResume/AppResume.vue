<template>
  <div class="card card-w70">
    <app-loader v-if="loading"></app-loader>
    <div v-else>
      <app-message v-if="message" :error="error">{{ message }}</app-message>

      <h3 v-if="elements.length === 0">
        Добавьте первый блок, чтобы увидеть результат
      </h3>

      <div v-else>
        <component
          v-for="element in elements"
          :key="element.id"
          :is="elementName(element)"
          :element="element"
          @select="$emit('select', element.id)"
          @remove="$emit('remove', element.id)"
          @update="$emit('update', element.id)"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import AppMessage from '../AppMessage'
import AppLoader from '../AppLoader'
import AppResumeTitle from './AppResumeTitle'
import AppResumeSubtitle from './AppResumeSubtitle'
import AppResumeText from './AppResumeText'
import AppResumeAvatar from './AppResumeAvatar'

export default {
  emits: {
    select(id) {
      if (!id) {
        console.warn('"id" is required for emits "select"')
        return false
      }

      return true
    },
    remove(id) {
      if (!id) {
        console.warn('"id" is required for emits "remove"')
        return false
      }

      return true
    },
    update(id) {
      if (!id) {
        console.warn('"id" is required for emits "update"')
        return false
      }

      return true
    },
  },
  props: {
    elements: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    message: {
      type: String,
      default: () => '',
    },
    error: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    elementName(element) {
      return `app-resume-${element.type}`
    },
  },
  components: {
    AppMessage,
    AppLoader,
    AppResumeTitle,
    AppResumeSubtitle,
    AppResumeText,
    AppResumeAvatar,
  },
}
</script>

<style lang="scss" scoped></style>
