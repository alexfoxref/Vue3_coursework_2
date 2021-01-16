<template>
  <app-resume-element :element="element">
    <template #default="{select}">
      <p :class="{ selected: element.selected, element: true }" @click="select">
        {{ element.text }}
      </p>
    </template>
  </app-resume-element>
</template>

<script>
import AppResumeElement from './AppResumeElement'

export default {
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { AppResumeElement },
}
</script>

<style lang="scss" scoped></style>
