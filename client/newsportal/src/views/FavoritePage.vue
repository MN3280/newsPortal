<script>
import { mapActions, mapState } from 'pinia'
import { useRenderFavoriteStore } from '../stores/counter'
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'

export default {
  name: 'FavoritePage',
  components: { Navbar, Card },
  computed: {
    ...mapState(useRenderFavoriteStore, ['favorite', 'isFavorite'])
  },
  methods: {
    ...mapActions(useRenderFavoriteStore, ['renderFavorite'])
  },
  created() {
    this.renderFavorite()
  }
}
</script>

<template>
  <Navbar />
  <h1 class="flex justify-center font-bold text-3xl mt-10">Favorite</h1>
  <div class="flex flex-row flex-wrap container mx-auto mt-8">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-20 py-10"
    >
      <Card
        v-for="(data, index) in favorite"
        :key="data.id"
        :data="data.Article"
        :isFavorite="this.isFavorite"
      />
    </div>
  </div>
</template>

<style scoped></style>
