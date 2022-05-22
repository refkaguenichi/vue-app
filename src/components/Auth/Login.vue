<template>
  <div class="container">
    <form
      class="w-50 mt-5 mx-auto border shadow-1 rounded-1 p-5"
      @submit.prevent="onLogin"
    >
      <div class="alert alert-danger" v-if="error">
        {{ error }}
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <span class="text-danger" v-show="errors.email">{{
          errors.email
        }}</span>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
        <span class="text-danger" v-show="errors.password">{{
          errors.password
        }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import RegisterValidation from "../../services/RegisterValidation";
import {
  LOADING_SPINNER_SHOW_MUTATION,
  LOGIN_ACTION,
} from "../../store/storeConstant";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
    };
  },
  methods: {
    ...mapActions("auth", {
      login: LOGIN_ACTION,
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    async onLogin() {
      this.errors = RegisterValidation(this.email, this.password);
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
      this.showLoading(true);
      // registration
      try {
        await this.login({ email: this.email, password: this.password });
        this.$router.push("/posts");
      } catch (err) {
        //make spinner false
        this.showLoading(false);
        this.error = err;
      }
      //make spinner false
      this.showLoading(false);
      this.$router.push("/posts");
    },
  },
};
</script>

<style></style>
