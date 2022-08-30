<template>
  <ul class="showAll">
    <aItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
    />
  </ul>
</template>

<script>
import aItem from "./aItem";

export default {
  name: "showAll",
  props: ["todos"],
  components: { aItem },
};
</script>

<style>
.showAll {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>