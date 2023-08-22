<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useLoginCustStore, useDetailArticleStore } from '../stores/counter'

export default {
  name: 'Navbar',
  components: { RouterLink },
  computed: {
    ...mapState(useLoginCustStore, ['isLoggedIn']),
    ...mapState(useDetailArticleStore, ['isFavorite'])
  },
  methods: {
    ...mapActions(useLoginCustStore, ['logout']),
    ...mapActions(useDetailArticleStore, ['butFav'])
  }
}
</script>

<template>
  <div class="flex justify-between navbar bg-base-300 sticky w-full top-0 z-30">
    <div class="flex-1">
      <RouterLink to="/">
        <a class="btn btn-ghost normal-case text-xl font-bold">News Portal</a>
      </RouterLink>
    </div>
    <RouterLink to="/register">
      <button
        class="menu menu-horizontal bg-base-200 rounded-box flex items-center space-x-2 mx-2"
        v-if="this.isLoggedIn === false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
          />
        </svg>
        <span class="text-lg">Sign up</span>
      </button>
    </RouterLink>

    <RouterLink to="/login">
      <button
        class="menu menu-horizontal bg-base-200 rounded-box flex items-center space-x-2 mx-2"
        v-if="this.isLoggedIn === false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-lg">Login</span>
      </button>
    </RouterLink>

    <RouterLink to="/favorite">
      <button
        class="menu menu-horizontal bg-base-200 rounded-box flex items-center space-x-2 mx-2"
        v-if="this.isLoggedIn === true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-lg">Favorite</span>
      </button>
    </RouterLink>

    <button
      class="menu menu-horizontal bg-base-200 rounded-box flex items-center space-x-2 mx-2"
      v-if="this.isLoggedIn === true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>

      <span class="text-lg" @click.prevent="logout">Sign Out</span>
    </button>
  </div>
</template>

<style scoped></style>
