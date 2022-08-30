<template>
  <ul class="showActice">
    <aItem
      v-for="todoObj in itemActive"
      :key="todoObj.id"
      :todo="todoObj"
    />
  </ul>
</template>

<script>
import aItem from "./aItem";
export default {
  name: "showActice",
  props: ["itemActive", ],
  components: { aItem },
};
</script>

<style>
.showActice {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>