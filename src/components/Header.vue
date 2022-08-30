<template>
  <div class="navContent">
    <div class="navBox">
    <ul class="topNav">
      <li>课程管理系统</li>
      <li>
        <ul>
          <li><i class="iconfont avat">&#xebac;</i>admin</li>
          <li><i class="iconfont">&#xe652;</i> 修改密码</li>
          <li><i class="iconfont">&#xe655;</i> 退出</li>
        </ul>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="css" scoped="true">
*{
  margin: 0;
  padding: 0;
}
.navContent{
  height: 40px;
}
.navBox{
  width: 100%;
  background-color: rgb(56, 59, 61);
  color: aliceblue;
  top: 0;
  line-height: 40px;
  padding:0 20px;
  box-sizing: border-box;
  position:fixed;
}
.navContent ul {
  display: flex;
  justify-content: space-between;
}
.navContent li {
  list-style: none;
}
.navContent .iconfont {
  font-size: 15px;
  font-weight: bold;
}
.navContent .avat {
  font-size: 20px;
}
.navContent .topNav ul {
  width: 250px;
}
</style>
