<template>
  <div class="addItem">
    <div class="v" :style="hasItem">v</div>
    <input
      type="text"
      class="addAItem"
      v-model="title"
      placeholder="What to do this night?"
      @focus="focusInput"
      @blur="focusBlur"
      @keyup.enter="CreatAItem"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "addItem",
  props: [ "todos"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    focusInput() {
      this.$el.style.border = "1px solid red";
    },
    focusBlur() {
      this.$el.style.border = "1px solid transparent";
    },
    CreatAItem() {
      if (!this.title.trim()) return alert("输入不能为空");
      const todoObj = { id: nanoid(), title: this.title, done: false };
      this.$emit('addTodo',todoObj);
      this.title = "";
    },
  },
  computed: {
    hasItem() {
      if (this.todos.length > 0) return "color:#888";
      else return "color:transparent";
    },
  },
};
</script>

<style>
.addItem {
  width: 100%;
  background-color: #fff;
  border: none;
  position: relative;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid transparent;
}
.v {
  color: #888;
  width: 8%;
  line-height: 45px;
  text-align: center;
  position: absolute;
  left: 0;
}
.addAItem {
  border: none;
  outline: none;
  position: absolute;
  left: 8%;
  height: 48px;
  padding: 0;
  margin: 0;
  width: 80%;
}
</style>