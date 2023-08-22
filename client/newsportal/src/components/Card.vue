<script>
import { mapActions } from 'pinia'
import { useDetailArticleStore } from '../stores/counter'
export default {
  name: 'Card',
  props: ['data', 'isFavorite'],
  methods: {
    ...mapActions(useDetailArticleStore, ['detailArticle'])
  }
}
</script>

<template>
  <div class="card w-300">
    <figure class="px-3 pt-4 h-200 overflow-hidden">
      <img :src="data.imgUrl" class="h-200 w-full object-cover rounded-sm" alt="Article Image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ data.title }}</h2>
      <p>{{ data.content }}</p>
      <div class="card-actions justify-end">
        <button
          class="btn btn-sm bg-blue-600 hover:bg-blue-800"
          @click.prevent="detailArticle(data.id)"
          v-if="this.isFavorite === false"
        >
          Detail
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
