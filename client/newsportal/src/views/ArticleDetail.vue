<script>
import { mapActions, mapState } from 'pinia'
import { useDetailArticleStore, useAddFavStore } from '../stores/counter'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'ArticleDetail',
  components: {
    Navbar
  },
  computed: {
    ...mapState(useDetailArticleStore, ['detail'])
  },
  methods: {
    ...mapActions(useDetailArticleStore, ['detailArticle']),
    ...mapActions(useAddFavStore, ['addFav'])
  },
  async created() {
    await this.detailArticle(this.$route.params.id)
  }
}
</script>

<template>
  <Navbar />
  <div
    class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full"
  >
    <div class="hidden relative lg:block lg:col-span-3">
      <img class="absolute inset-0 w-full h-full object-cover object-center" :src="detail.imgUrl" />
    </div>
    <div
      class="px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white"
    >
      <h1 class="mt-5 font-bold text-lg lg:mt-7">{{ detail.title }}</h1>
      <h1 class="font-bold text-lg text-gray-600">{{ detail.content }}</h1>

      <button
        class="mt-5 bg-yellow-200 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-yellow-400"
        @click.prevent="addFav(detail.id)"
      >
        Favorite
      </button>
    </div>
  </div>
</template>

<style scoped></style>
