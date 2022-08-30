<template>
  <div class="todo-footer" v-show="total">
    <div>
      <span>{{ total - doneTotal }} items left</span>
    </div>
    <div class="threeButton">
      <button class="btn Al" @click="changePage('All')">
        <router-link to="/showAll">All </router-link>
      </button>
      <button class="btn Ac" @click="changePage('Active')">
        <router-link to="/showActice"> Active </router-link>
      </button>
      <button class="btn com" @click="changePage('Completed')">
        <router-link to="/showCompleted"> Completed</router-link>
      </button>
    </div>
    <button class="btn-danger" @click="clearAll">clear Completed</button>
  </div>
</template>

<script>
export default {
  name: "footerMess",
  props: ["todos", "updataPage"],
  computed: {
    //总数
    total() {
      return this.todos.length;
    },
    //已完成数
    doneTotal() {
      //此处使用reduce方法做条件统计
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
  },
  methods: {
    //清空所有已完成
    clearAll() {
      this.$emit('clearAllTodo');
    },
    changePage(data) {
      let obj1 = this._vnode.children[1].children;
      let obj2 = { ...obj1 };
      for (let i = 0; i < 3; i++) {
        obj2[i].elm.style.border = "2px solid rgba(255, 0, 0,0)";
      }
      event.target.parentNode.style.border = "2px solid rgba(255, 0, 0)";
      this.updataPage(data);
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
}

.todo-footer .btn-danger {
  width: 110px;
  height: 25px;
  font-size: 11px;
  margin-top: 10px;
  background-color: rgb(250, 250, 250);
  border: none;
}
.threeButton .btn {
  height: 25px;
  width: 70px;
  border: 2px solid transparent;
  box-sizing: border-box;
  margin: 0 5px;
  padding: 0;
}
.btn a{
  display: block;
  width: 100%;
  height: 100%;
  line-height: 25px;
  color: #888;
  text-decoration: none;
  background-color: #fff;
}
.btn:hover {
  border: 2px solid rgba(255, 0, 0, 0.3);
}
</style>