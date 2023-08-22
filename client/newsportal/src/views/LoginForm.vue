<script>
import { mapActions } from 'pinia'
import { useLoginCustStore } from '../stores/counter'
export default {
  name: 'LoginForm',
  data() {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useLoginCustStore, ['custLogin', 'handleCredentialResponse']),
    callback(response) {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      console.log('Handle the response', response)
      this.handleCredentialResponse(response)
    }
  }
}
</script>

<template>
  <div class="relative flex flex-wrap justify-evenly">
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
      <div
        class="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl"
        style="
          padding-top: 25px;
          padding-left: 30px;
          padding-right: 30px;
          padding-bottom: 25px;
          width: 450px;
          height: 500px;
        "
      >
        <h1 class="text-3xl font-semibold text-center text-gray-700">Log in to your account</h1>
        <form class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              class="w-full input input-bordered"
              v-model="this.dataLogin.email"
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
              v-model="this.dataLogin.password"
            />
          </div>
          <div>
            <button class="btn btn-block" @click.prevent="custLogin(this.dataLogin)">Log In</button>
          </div>
        </form>
        <div class="flex items-center w-full my-4">
          <hr class="w-full" />
          <p class="px-3">OR</p>
          <hr class="w-full" />
        </div>
        <div class="flex items-center justify-center my-6 space-y-2 w-full">
          <GoogleLogin :callback="callback" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
