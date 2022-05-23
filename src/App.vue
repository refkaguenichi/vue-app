<template>
  <AppBar />
  <span class="text-info">{{ $t("message.hello") }}</span>
  <span class="text-info ps-2">{{ $t("message.greeting") }}</span>
  <Loader v-if="showLoading" />
  <router-view />
</template>
<script>
import { mapState } from "vuex";
import AppBar from "./components/AppBar.vue";
import { AUTO_LOGIN_ACTION } from "./store/storeConstant";
import { defineAsyncComponent } from "vue";
const Loader = defineAsyncComponent(() =>
  import(/* webpackChunkName: "Loader" */ "./components/Loader.vue")
);
export default {
  components: {
    AppBar,
    Loader,
  },
  computed: {
    ...mapState({
      showLoading: (state) => state.showLoading,
      autoLogout: (state) => state.auth.autoLogout,
    }),
  },
  watch: {
    autoLogout(curValue, oldValue) {
      if (curValue && curValue != oldValue) {
        this.$router.replace("/login");
      }
    },
  },
  created() {
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
  },
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
