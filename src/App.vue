<template>
  <div id="app">
    <Header />
    <SideNav />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: { Header,SideNav },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style>
</style>