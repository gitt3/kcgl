<template>
  <div class="mainShowPlace">
    <div class="tacNav">
      <el-row class="tac">
        <el-col>
          <el-menu
            class="el-menu-vertical-demo"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <router-link to="/StuMana">
                  <div class="Submenu">
                    <div>学生管理</div>
                    <div><i class="el-icon-caret-right"></i></div>
                  </div>
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <router-link to="/ClaCho">
                  <div class="Submenu">
                    <div>课程编排</div>
                    <div><i class="el-icon-caret-right"></i></div>
                  </div>
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <router-link to="/MyQue">
                  <div class="Submenu">
                    <div>我的题库</div>
                    <div><i class="el-icon-caret-right"></i></div>
                  </div>
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <router-link to="/MyWor">
                  <div class="Submenu">
                    <div>我的作业表</div>
                    <div><i class="el-icon-caret-right"></i></div>
                  </div>
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <router-link to="/CorWor">
                  <div class="Submenu">
                    <div>批改作业</div>
                    <div><i class="el-icon-caret-right"></i></div>
                  </div>
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <router-link to="/AllSco">
                  <div class="Submenu">
                    <div>综合评分</div>
                    <div><i class="el-icon-caret-right"></i></div>
                  </div>
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <router-link to="/TesMana">
                  <div class="Submenu">
                    <div>测验管理</div>
                    <div><i class="el-icon-caret-right"></i></div>
                  </div>
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <router-link to="/Code">
                  <div class="Submenu">
                    <div>代码检测</div>
                    <div><i class="el-icon-caret-right"></i></div>
                  </div>
                </router-link>
              </template>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="rightShowPlace">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="css">
.mainShowPlace {
  display: flex;
  height: 100vh;
}
.rightShowPlace {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
.tac {
  width: 200px;
}
.el-submenu {
  padding: 0;
  margin: 0;
}
.el-icon-arrow-down {
  display: none;
}
a{
  text-decoration: none;
  color:white;
}
.el-menu-vertical-demo{
  position:fixed;
  z-index: 10;
  top: 42px;
  height: 100vh;
  width: 200px;
  background-color: #123;
}
.el-submenu__title{
  margin: 0;
  margin-left: 0px;
  padding: 0;
}
.el-submenu__title:hover{
  background-color: orangered;
}
.Submenu{
  display: flex;
  justify-content: space-between;
}
</style>
