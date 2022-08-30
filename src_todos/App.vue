<template>
  <div id="app">
    <h1 class="headTitle">TODOs</h1>
    <div class="contentPalce">
      <addItem @addTodo="addTodo" :todos="todos" />
      <showAll
        :todos="todos"
        v-show="showRecord == 'All'"
      />
      <showActice
        :itemActive="itemActive"
        v-show="showRecord == 'Active'"
      />
      <showCompleted
        :itemCompleted="itemCompleted"
        v-show="showRecord == 'Completed'"
      />
      <footerMess
        @clearAllTodo="clearAllTodo"
        :updataPage="updataPage"
        :todos="todos"
      />
    </div>
    <ul class="bottomContent">
      <li>add todos</li>
      <li>dodododod</li>
      <li>finish him</li>
    </ul>
  </div>
</template>

<script>
import addItem from "./components/addItem.vue";
import showAll from "./components/showAll.vue";
import showCompleted from "./components/showCompleted.vue";
import showActice from "./components/showActice.vue";
import footerMess from "./components/footerMess.vue";
import pubsub from "pubsub-js";//订阅通信

export default {
  name: "App",
  components: { addItem, showAll, showCompleted, showActice, footerMess },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      showRecord: "All",
    };
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除一个todo
    deleteTodo(_,id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    // 修改显示页面
    updataPage(data) {
      this.showRecord = data;
    },
  },
  computed: {
    itemCompleted() {
      return this.todos.filter((todos) => {
        return todos.done;
      });
    },
    itemActive() {
      return this.todos.filter((todos) => {
        return !todos.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);       //全局事件总线接收
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
/* // 顶部文字内填充颜色变化 */
@keyframes animate {
  0% {
    color: rgba(255, 0, 0, 0.65);
  }
  20%,
  40%,
  60%,
  80%,
  100% {
    color: rgb(255, 0, 0, 0.8);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    color: rgb(255, 0, 0);
    text-shadow: 2px 2px 3px #000000;
  }
}
#app {
  width: 60vw;
  margin-left: 50%;
  transform: translate(-50%);
  background-color: #f8f8f8;
}
.headTitle {
  -webkit-box-reflect: below -11px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  animation: animate 15s linear infinite;
  display: block;
  margin-left: 50%;
  transform: translate(-50%);
  padding-top: 2vh;
  width: 125px;
}
.contentPalce {
  width: 40vw;
  background-color: rgba(29, 54, 79, 0.2);
  margin: 6vh 0 3vh 50%;
  transform: translate(-50%);
  border-radius: 5px;
  box-shadow: 0px 1px 8px rgb(23, 59, 95);
}
.bottomContent {
  list-style: none;
  width: 125px;
  margin-left: 50%;
  padding: 0;
  transform: translate(-50%);
  text-align: center;
  font-size: 10px;
  font-weight: 100;
}
</style>