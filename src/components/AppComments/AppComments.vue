<template>
  <p v-if="comments.length === 0">
    <button class="btn primary" @click="$emit('load')">
      Загрузить комментарии
    </button>
  </p>

  <div v-else class="card">
    <div class="inline">
      <h2>Комментарии</h2>
      <button class="btn" @click="isVisibleContent = !isVisibleContent">
        {{ btnTitle }}
      </button>
    </div>

    <ul v-if="isVisibleContent" class="list">
      <li class="list-item" v-for="item in comments" :key="item.id">
        <app-comments-item :item="item"></app-comments-item>
      </li>
    </ul>
  </div>
</template>

<script>
import AppCommentsItem from './AppCommentsItem'

export default {
  emits: ['load'],
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isVisibleContent: true,
    }
  },
  computed: {
    btnTitle() {
      return this.isVisibleContent ? 'Скрыть' : 'Показать'
    },
  },
  components: { AppCommentsItem },
}
</script>

<style lang="scss" scoped>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
