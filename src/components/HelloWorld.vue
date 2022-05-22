<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- Navbar  -->
    <nav
      class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark bg-gradient"
    >
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Pricing</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">FAQ's</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="main">
      <div class="container">
        <div class="box border mt-5 p-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            dolor placeat fuga sapiente ipsa et enim? Dolor, ab error? Nihil
            inventore natus vel nemo praesentium expedita laudantium cum
            blanditiis minus?
          </p>
        </div>
        <div class="box border mt-5 p-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            dolor placeat fuga sapiente ipsa et enim? Dolor, ab error? Nihil
            inventore natus vel nemo praesentium expedita laudantium cum
            blanditiis minus?
          </p>
        </div>
        <div class="box border mt-5 p-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            dolor placeat fuga sapiente ipsa et enim? Dolor, ab error? Nihil
            inventore natus vel nemo praesentium expedita laudantium cum
            blanditiis minus?
          </p>
        </div>
        <div class="box border mt-5 p-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            dolor placeat fuga sapiente ipsa et enim? Dolor, ab error? Nihil
            inventore natus vel nemo praesentium expedita laudantium cum
            blanditiis minus?
          </p>
        </div>
        <div class="box border mt-5 p-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            dolor placeat fuga sapiente ipsa et enim? Dolor, ab error? Nihil
            inventore natus vel nemo praesentium expedita laudantium cum
            blanditiis minus?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      fullScreen: false,
    };
  },
  computed: {
    ...mapState("auth", {
      name: (state) => state.name,
    }),
  },
};
</script>
