<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
    />

    <!-- Top Header -->
    <div class="top-header py-4">
      <div class="container">
        <h1>Web Zone</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.msg = window.location.href;
  },
};
</script>

<style></style>
