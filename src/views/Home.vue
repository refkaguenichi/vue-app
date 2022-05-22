<template>
  <div class="container mt-5">
    <span class="text-muted"
      >Here is the text (in parent) that will be changed from the child
      <u class="text-danger">
        {{ text }}
      </u></span
    >
    <hello-world :displayMessage="displayMessage" :otherText="otherText" />
    <bye-world :otherText="otherText" @new-message="updateMessage($event)" />
    <router-link to="/posts">Go to posts page</router-link>
  </div>
</template>

<script>
import ByeWorld from "../components/ByeWorld.vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: { HelloWorld, ByeWorld },
  name: "Home",
  data() {
    return {
      text: "",
      otherText: "from parent to child",
    };
  },
  methods: {
    displayMessage(msg) {
      this.text = msg;
      this.otherText = msg;
    },
    updateMessage(msg) {
      this.otherText = msg;
    },
  },
};
</script>
