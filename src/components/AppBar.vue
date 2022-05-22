<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Vue App</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" v-if="!isAuth"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register" v-if="!isAuth"
              >Register</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/posts" v-if="isAuth"
              >Posts</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-if="isAuth" @click.prevent="onLogout"
              >Logout</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  IS_USER_AUTHENTICATE_GETTER,
  LOGOUT_ACTION,
} from "../store/storeConstant";
export default {
  computed: {
    ...mapGetters("auth", {
      isAuth: IS_USER_AUTHENTICATE_GETTER,
    }),
  },
  methods: {
    ...mapActions("auth", {
      logout: LOGOUT_ACTION,
    }),
    onLogout() {
      this.logout();
      this.$router.replace("/login");
    },
  },
};
</script>

<style></style>
