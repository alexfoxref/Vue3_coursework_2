<template>
  <app-resume-element :element="element">
    <template #default="{select}">
      <div
        class="avatar"
        :class="{ selected: element.selected, element: true }"
        @click="select"
      >
        <img :src="element.text" alt="avatar" />
      </div>
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

<style lang="scss" scoped>
.avatar {
  display: flex;
  justify-content: center;

  img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
}
</style>
