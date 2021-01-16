<template>
  <div class="container column">
    <app-sidebar
      :element="selectedElement"
      @create="createBlock"
      @updateSelected="updateSelectedElement"
    ></app-sidebar>

    <app-resume
      :message="message"
      :error="error"
      :loading="loadingElements"
      :elements="elements"
      @select="selectElement"
      @remove="removeBlock"
      @update="updateBlock"
    ></app-resume>
  </div>
  <div class="container">
    <app-loader v-if="loadingComments"></app-loader>

    <app-comments
      v-else
      :comments="comments"
      @load="loadComments"
    ></app-comments>
  </div>
</template>

<script>
import { getComments } from './services/commentsService'
import {
  getElements,
  createElement,
  removeElement,
  updateElement,
} from './services/elementsService'
import { findById, findIndexById } from './utils/utils'
import AppLoader from './components/AppLoader'
import AppSidebar from './components/AppSidebar'
import AppResume from './components/AppResume/AppResume'
import AppComments from './components/AppComments/AppComments'

export default {
  data() {
    return {
      elements: [],
      selectedElement: null,
      comments: [],
      loadingComments: false,
      loadingElements: false,
      message: null,
      error: false,
    }
  },
  mounted() {
    this.loadElements()
  },
  methods: {
    addErrorMessage(message = 'Ошибка!') {
      this.addMessage(message, true)
    },

    addMessage(message, error) {
      this.setMessage(message, error)

      setTimeout(() => {
        this.clearMessage()
      }, 3000)
    },

    setMessage(message, error) {
      this.message = message
      this.error = error ?? false
    },

    clearMessage() {
      this.setMessage(null)
    },

    updateSelectedElement(part) {
      this.selectedElement = { ...this.selectedElement, ...part }

      const idx = findIndexById(this.elements, this.selectedElement.id)

      this.elements[idx] = this.selectedElement
    },

    async createBlock(element) {
      try {
        this.loadingElements = true

        const { name } = await createElement(element)

        this.elements.push({ ...element, id: name, selected: false })
        this.addMessage('Элемент успешно создан.')
      } catch (e) {
        this.addErrorMessage(e.message)
      } finally {
        this.loadingElements = false
      }
    },

    selectElement(id) {
      this.elements = this.elements.map(el => {
        if (el.id === id) {
          el.selected = !el.selected
          if (el.selected) {
            this.selectedElement = el
          } else {
            this.selectedElement = null
          }
        } else {
          el.selected = false
        }

        return el
      })
    },

    async removeBlock(id) {
      try {
        this.loadingElements = true

        await removeElement(id)

        this.elements = this.elements.filter(({ id: i }) => i !== id)
        this.selectedElement = null
        this.addMessage('Элемент удален.')
      } catch (e) {
        this.addErrorMessage(e.message)
      } finally {
        this.loadingElements = false
      }
    },

    async loadComments() {
      try {
        this.loadingComments = true

        const data = await getComments()

        this.comments = data
      } catch (e) {
        this.addErrorMessage(e.message)
      } finally {
        this.loadingComments = false
      }
    },

    async loadElements() {
      try {
        this.loadingElements = true

        const data = await getElements()

        this.elements = data
      } catch (e) {
        this.addErrorMessage(e.message)
      } finally {
        this.loadingElements = false
      }
    },

    async updateBlock(id) {
      try {
        this.loadingElements = true

        const element = findById(this.elements, id)
        const { type, text } = element

        await updateElement(id, { type, text })

        element.selected = false
        this.selectedElement = null
        this.addMessage('Элемент обновлен.')
      } catch (e) {
        this.addErrorMessage(e.message)
      } finally {
        this.loadingElements = false
      }
    },
  },
  components: {
    AppLoader,
    AppSidebar,
    AppResume,
    AppComments,
  },
}
</script>

<style lang="scss"></style>
