<template>
  <li class="aItem">
    <input
      :id="todo.id"
      type="checkBox"
      :checked="todo.done"
      @change="changeDone(todo.id)"
      class="checkItem"
    />
    <label :for="todo.id"></label>
    <div class="itemContent" :style="hasFinish">{{ todo.title }}</div>
    <div class="x" @click="deleteItem(todo.id)">x</div>
  </li>
</template>

<script>
import pubsub from "pubsub-js";//订阅通信
export default {
  name: "aItem",
  props: ["todo"],
  methods: {
    changeDone(id) {
      this.$bus.$emit('checkTodo',id);//全局事件总线发送
    },
    deleteItem(id) {
      pubsub.publish('deleteTodo',id)//信息发布
      // this.deleteTodo(id);
    },
  },
  computed: {
    hasFinish() {
      if (this.todo.done) return "color:#888;text-decoration:line-through";
      else return "text-decoration:none";
    },
  },
};
</script>

<style>
.aItem {
  min-height: 40px;
  line-height: 40px;
  position: relative;
  background-color: #f8f8f8;
  word-break: break-word;
  border-bottom: 1px solid rgba(136, 136, 136, 0.265);
}
.aItem:hover .x {
  color: #888;
}
.itemContent {
  padding: 0 40px;
}
.checkItem,
.x {
  position: absolute;
  top: 0;
}
.x {
  font-weight: 600;
  color: white;
  right: 8px;
  cursor: pointer;
}
.checkItem {
  left: 0;
  top: 12px;
  border: none;
  background-color: #123;
  display: none;
}
.checkItem + label {
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid #888;
  position: absolute;
  top: 8px;
  left: 8px;
}
.checkItem:checked + label {
  border: 2px solid rgb(48, 213, 161);
}
.checkItem:checked + label:before {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  content: "\2713";
  text-align: center;
  line-height: 20px;
  font-size: 20px;
  color: rgb(48, 213, 161);
  background-color: #fff;
}
</style>