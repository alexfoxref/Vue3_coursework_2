<template>
  <app-resume-element :element="element">
    <template #default="{select}">
      <h3
        :class="{ selected: element.selected, element: true }"
        @click="select"
      >
        {{ element.text }}
      </h3>
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
