<script>
import { mapActions, mapState } from 'pinia'
import { useRegisterCustStore } from '../stores/counter'
import { RouterLink } from 'vue-router'
export default {
  name: 'SignUpForm',
  data() {
    return {
      dataRegist: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useRegisterCustStore, ['custRegister'])
  },
  components: { RouterLink }
}
</script>

<template>
  <div class="relative flex flex-wrap justify-evenly">
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
      <div
        class="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl"
        style="padding: 25px 30px; width: 360px; height: 400px"
      >
        <h1 class="text-3xl font-semibold text-center text-gray-700">Sign Up and Enjoy!</h1>
        <form class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              class="w-full input input-bordered"
              v-model="this.dataRegist.email"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              class="w-full input input-bordered"
              v-model="this.dataRegist.password"
            />
          </div>
          <div>
            <button class="btn btn-block" @click.prevent="custRegister(this.dataRegist)">
              Sign Up
            </button>
          </div>
        </form>
        <RouterLink to="/login">
          <span
            >Already have an account ?
            <a class="text-blue-600 hover:text-blue-800 hover:underline">Login</a></span
          >
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
