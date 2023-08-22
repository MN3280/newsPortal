import { defineStore } from 'pinia'
import axios from 'axios'
import router from "../router/index"
import Swal from 'sweetalert2'
const baseUrl = "http://localhost:8000"
// const baseUrl = "https://newsportal-ch3.martiniblue.dev"


export const useRenderArticleStore = defineStore('articles', {
  state: () => ({
    articles: [],
    totalPage: 0,
    category: '',
    isFavorite: false
  }),
  actions: {
    async renderArticle(page = 1, categoryId = "") {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/customers/pub/renderPagination?page=${page}&limit=${6}&category=${categoryId}`
        })
        this.isFavorite = false
        this.totalPage = data.totalPage
        this.articles = data.data.rows
      } catch (err) {
        console.log(err)
      }
    },
    async renderSearch(title = "") {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/customers/pub/renderPagination?page=1&limit=${6}&title=${title}`
        })
        this.isFavorite = false
        this.totalPage = data.totalPage
        this.articles = data.data.rows
        if (this.totalPage === 0) {
          this.renderArticle()
          Swal.fire({
            icon: "error",
            title: `Sorry we couldn't find news with this criteria. But don't worry, you can find plenty of other news on our homepage!`,
          });
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
})


export const useRegisterCustStore = defineStore('register', {
  state: () => ({
  }),
  actions: {
    async custRegister(dataRegist) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/customers/pub/register`,
          data: dataRegist
        })
        Swal.fire({
          icon: "success",
          title: `Please login now!`,
        });
        router.push('/login')
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `Please check your input!`,
        });
      }
    }
  },
})

export const useLoginCustStore = defineStore('login', {
  state: () => ({
    isLoggedIn: localStorage.getItem("access_token") ? true : false
  }),
  actions: {
    async custLogin(dataLogin) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/customers/pub/login`,
          data: dataLogin
        })
        localStorage.setItem("access_token", data.access_token)
        this.isLoggedIn = true
        Swal.fire({
          icon: "success",
          title: `Login success!`,
        });
        router.push('/')
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `Please check your email or password!`,
        });
      }
    },
    async logout() {
      localStorage.clear()
      this.isLoggedIn = false
      router.push("/")
    },
    async handleCredentialResponse(response) {
      try {
        const token_google = response.credential;
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/customers/pub/googleLogin`,
          data: {
            token_google: token_google,
          },
        });

        localStorage.setItem("access_token", data.access_token);
        this.isLoggedIn = true
        Swal.fire({
          icon: "success",
          title: `Login success!`,
        });
        router.push("/")
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `Please check your email or password!`,
        });
      }
    },
  },
})

export const useRenderFavoriteStore = defineStore('favorite', {
  state: () => ({
    favorite: [],
    isFavorite: false
  }),
  actions: {
    async renderFavorite() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/customers/pub/favArticle`,
          headers: {
            "access_token": localStorage.getItem("access_token")
          }

        })
        this.isFavorite = true
        this.favorite = data.data
      } catch (err) {
        console.log(err)
      }
    }
  },
})

export const useRenderCategoryStore = defineStore('category', {
  state: () => ({
    category: []
  }),
  actions: {
    async renderCategory() {
      try {
        console.log("masuk sni");
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/customers/pub/categories`
        })
        this.category = data.message
      } catch (err) {
        console.log(err);
      }
    }
  }
})

export const useDetailArticleStore = defineStore('article', {
  state: () => ({
    detail: [],
    isFavorite: true
  }),
  actions: {
    async detailArticle(id) {
      try {
        // console.log(id);
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/customers/pub/articles/${id}`

        })
        this.detail = data.getOne
        this.isFavorite = false
        router.push(`/articles/${id}`)
      } catch (err) {
        console.log(err);
      }
    },
    async butfav() {
      this.isFavorite = true
    }
  }
})

export const useAddFavStore = defineStore('favorite', {
  state: () => ({
  }),
  actions: {
    async addFav(id) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/customers/pub/addFav/${id}`,
          headers: {
            "access_token": localStorage.getItem("access_token")
          }
        })
        Swal.fire({
          icon: "success",
          title: `Added to Favorite!`,
        });
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `Failed to add!`,
        });
      }
    }
  }
})


