<template>
  <ul class="showCompleted">
    <aItem
      v-for="todoObj in itemCompleted"
      :key="todoObj.id"
      :todo="todoObj"
    />
  </ul>
</template>

<script>
import aItem from "./aItem";
export default {
  name: "showCompleted",
  props: ["itemCompleted"],
  components: { aItem },
};
</script>

<style>
.showCompleted {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>