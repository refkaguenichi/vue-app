<template>
  <div class="container">
    <form
      class="w-50 mt-5 mx-auto border shadow-1 rounded-1 p-5"
      @submit.prevent="register"
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
          v-model.trim="password"
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
import {
  LOADING_SPINNER_SHOW_MUTATION,
  SIGNUP_ACTION,
} from "../../store/storeConstant";
import RegisterValidation from "../../services/RegisterValidation";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
    };
  },
  beforeRouteEnter(_, _1, next) {
    next((vm) => {
      console.log("Before enter route", vm.$store.state.auth);
    });
  },
  beforeRouteLeave() {
    console.log("Leave route", this.$store);
  },
  methods: {
    ...mapActions("auth", {
      signup: SIGNUP_ACTION,
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    async register() {
      this.errors = RegisterValidation(this.email, this.password);
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
      //make spinner true
      this.showLoading(true);
      // registration
      await this.signup({ email: this.email, password: this.password }).catch(
        (err) => {
          //make spinner false
          this.showLoading(false);
          this.error = err;
        }
      );
      //make spinner false
      this.showLoading(false);
    },
  },
};
</script>

<style></style>
