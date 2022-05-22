<template>
  <div class="container mt-2 border p-2">
    <h1>Bye world component</h1>
    <span class="m-2 text-muted"
      >Message from parent<u class="text-info ms-2">{{ otherText }}</u></span
    >
    <br />
    <button class="btn btn-primary mx-auto mt-2" @click="changeMessage">
      Change message
    </button>
  </div>
</template>

<script>
export default {
  props: {
    otherText: String,
  },
  data() {
    return {
      txt: "value from bye world",
    };
  },
  methods: {
    changeMessage() {
      this.$emit("new-message", this.txt);
    },
  },
};
</script>

<style></style>
