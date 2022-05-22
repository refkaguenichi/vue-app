<template>
  <div class="container mt-2 border p-2">
    <h1>Hello world component</h1>
    <form @submit.prevent="displayMessage(msg)">
      <input
        type="text"
        class="form-control w-50 mx-auto mb-4"
        :value="msg"
        @input="
          displayMessage(msg);
          msg = $event.target.value;
        "
      />
      <button class="btn btn-primary mx-auto mb-5">Change message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    displayMessage: Function,
    otherText: String,
  },
  data() {
    return {
      msg: "hey from child!",
    };
  },
  methods: {
    changeMessage(e) {
      this.msg = e.target.value;
    },
  },
};
</script>
