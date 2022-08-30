<template>
  <div>
    <div class="formBox">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="学校" prop="school">
          <el-select v-model="ruleForm.school" placeholder="请选择学校">
            <el-option label="长江大学工程技术学院1" value="长江大学工程技术学院1 "></el-option>
            <el-option label="长江大学工程技术学院2" value="长江大学工程技术学院2 "></el-option>
            <el-option label="长江大学工程技术学院3" value="长江大学工程技术学院3 "></el-option>
            <el-option label="长江大学工程技术学院4" value="长江大学工程技术学院4 "></el-option>
            <el-option label="长江大学工程技术学院5" value="长江大学工程技术学院5 "></el-option>
            <el-option label="长江大学工程技术学院6" value="长江大学工程技术学院6 "></el-option>
            <el-option label="长江大学工程技术学院7" value="长江大学工程技术学院7"></el-option>
            <el-option label="长江大学工程技术学院8" value="长江大学工程技术学院8 "></el-option>
            <el-option label="长江大学工程技术学院9" value="长江大学工程技术学院9 "></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学院" prop="college">
          <el-select
            v-model="ruleForm.college"
            multiple
            placeholder="请选择学院"
          >
            <el-option label="学院1" value="学院1 "></el-option>
            <el-option label="学院2" value="学院2 "></el-option>
            <el-option label="学院3" value="学院3 "></el-option>
            <el-option label="学院4" value="学院4 "></el-option>
            <el-option label="学院5" value="学院5 "></el-option>
            <el-option label="学院6" value="学院6 "></el-option>
            <el-option label="学院7" value="学院7"></el-option>
            <el-option label="学院8" value="学院8 "></el-option>
            <el-option label="学院9" value="学院9 "></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-select v-model="ruleForm.major" multiple placeholder="请选择专业">
            <el-option label="专业1" value="专业1 "></el-option>
            <el-option label="专业2" value="专业2 "></el-option>
            <el-option label="专业3" value="专业3 "></el-option>
            <el-option label="专业4" value="专业4 "></el-option>
            <el-option label="专业5" value="专业5 "></el-option>
            <el-option label="专业6" value="专业6 "></el-option>
            <el-option label="专业7" value="专业7"></el-option>
            <el-option label="专业8" value="专业8 "></el-option>
            <el-option label="专业9" value="专业9 "></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="class">
          <el-button size="small" type="primary" plain @click="showClassForm"
            >选择</el-button
          >
          {{ allClass }}
        </el-form-item>
        <el-form-item label="课程" prop="course">
          <el-select
            v-model="ruleForm.course"
            v-bind:placeholder="ruleForm.course"
          >
            <el-option label="课程1" value="课程1 "></el-option>
            <el-option label="课程2" value="课程2 "></el-option>
            <el-option label="课程3" value="课程3 "></el-option>
            <el-option label="课程4" value="课程4 "></el-option>
            <el-option label="课程5" value="课程5 "></el-option>
            <el-option label="课程6" value="课程6 "></el-option>
            <el-option label="课程7" value="课程7"></el-option>
            <el-option label="课程8" value="课程8 "></el-option>
            <el-option label="课程9" value="课程9 "></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教师" prop="teacher">
          <el-select
            v-model="ruleForm.teacher"
            multiple
            placeholder="请选择教师"
          >
            <el-option label="教师1" value="教师1 "></el-option>
            <el-option label="教师2" value="教师2 "></el-option>
            <el-option label="教师3" value="教师3 "></el-option>
            <el-option label="教师4" value="教师4 "></el-option>
            <el-option label="教师5" value="教师5 "></el-option>
            <el-option label="教师6" value="教师6 "></el-option>
            <el-option label="教师7" value="教师7"></el-option>
            <el-option label="教师8" value="教师8 "></el-option>
            <el-option label="教师9" value="教师9 "></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作业表" prop="homeWorks">
          <el-button
            size="small"
            type="primary"
            plain
            @click="showHomeWorksShow"
            >选择</el-button
          >
          {{ allHomeWorks }}
        </el-form-item>
        <el-form-item label="所属学期" prop="term1">
          <el-select
            class="term-select"
            v-model="ruleForm.term1"
            placeholder="请选择年份"
          >
            <el-option label="2022" value="2022"></el-option>
            <el-option label="2021" value="2021"></el-option>
            <el-option label="2020" value="2020"></el-option>
            <el-option label="2019" value="2019"></el-option>
            <el-option label="2018" value="2018"></el-option>
            <el-option label="2017" value="2017"></el-option>
            <el-option label="2016" value="2016"></el-option>
            <el-option label="2015" value="2015"></el-option>
            <el-option label="2014" value="2014"></el-option>
            <el-option label="2013" value="2013"></el-option>
            <el-option label="2012" value="2012"></el-option>
          </el-select>
          <el-select
            class="term-select"
            v-model="ruleForm.term2"
            placeholder="请选择学期"
          >
            <el-option label="春季" value="春季"></el-option>
            <el-option label="秋季" value="秋季"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="submit-btn"
            @click="submitForm('ruleForm')"
            >确定</el-button
          >
          <router-link to="/ClaCho" tag="span">
            <el-button @click="returnCla">返回</el-button></router-link
          >
        </el-form-item>
      </el-form>
    </div>
    <div v-show="hideForm.classShow || hideForm.homeWorksShow" class="hideForm">
      <div
        v-show="hideForm.classShow"
        class="clssShowBox"
        style="text-align: center"
      >
        <h4>选择班级</h4>
        <el-table
          ref="multipleTable"
          :data="classData"
          align="center"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          @select="loadClass"
          @select-all="loadClass"
        >
          <el-table-column type="selection" width="45"></el-table-column>
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column
            prop="className"
            class="className"
            label="班级"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="grade"
            width="80"
            label="年级"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
        <div>
          <el-button type="primary" class="submit-btn" @click="submitClass"
            >确定</el-button
          >
          <el-button @click="toggleSelection()">取消</el-button>
        </div>
      </div>
      <div
        v-show="hideForm.homeWorksShow"
        class="clssShowBox homeWorksShowBox"
        style="text-align: center"
      >
        <h4>选择作业表</h4>
        <el-table
          ref="multipleTable"
          :data="homeWorkForm"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          @select="loadHomeWork"
          @select-all="loadHomeWork"
        >
          <el-table-column type="selection" width="45"></el-table-column>
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column
            prop="letMeTired"
            width="280"
            label="作业表"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
        <div>
          <el-button type="primary" class="submit-btn" @click="submitClassHome"
            >确定</el-button
          >
          <el-button @click="toggleSelection()">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "AddMess",
  data() {
    return {
      hideForm: {
        classShow: false,
        homeWorksShow: false,
      },
      ruleForm: {
        num: "",
        name: "神秘人",
        term: "2021秋季",
        course: "",
        college: [],
        school: "",
        major: [],
        class: [],
        teacher: [],
        homeWorks: [],
        updataPerson: "神秘管理员",
        term1: "",
        term2: "",
        time: "",
      },
      rules: {
        school: [{ required: true, message: "请选择校区", trigger: "change" }],
        college: [{ required: true, message: "请选择学院", trigger: "change" }],
        major: [{ required: true, message: "请选择专业", trigger: "change" }],
        class: [{ required: true, message: "请选择班级", trigger: "change" }],
        course: [{ required: true, message: "请选择课程", trigger: "change" }],
        teacher: [{ required: true, message: "请选择教师", trigger: "change" }],
        homeWorks: [
          { required: true, message: "请选择作业表", trigger: "change" },
        ],
        term1: [{ required: false, message: "请选择学年", trigger: "change" }],
        term2: [{ required: false, message: "请选择学期", trigger: "change" }],
      },
      classData: [
        {
          className: "计算机科学与技术3班",
          grade: "2020",
        },
        {
          className: "软件工程2班",
          grade: "2021",
        },
        {
          className: "网络工程2班",
          grade: "2022",
        },
        {
          className: "专业1班级2",
          grade: "2023",
        },
        {
          className: "专业3班级4",
          grade: "2023",
        },
        {
          className: "信息安全5班",
          grade: "2023",
        },
      ],
      homeWorkForm: [
        { letMeTired: "管理员给你送来的作业表1 " },
        { letMeTired: "管理员给你送来的作业表2 " },
        { letMeTired: "管理员给你送来的作业表3 " },
        { letMeTired: "管理员给你送来的作业表4 " },
        { letMeTired: "管理员给你送来的作业表5 " },
        { letMeTired: "管理员给你送来的作业表6 " },
        { letMeTired: "管理员给你送来的作业表7" },
        { letMeTired: "管理员给你送来的作业表8 " },
        { letMeTired: "管理员给你送来的作业表9 " },
      ],
      multipleSelection: [],
    };
  },
  computed: {
    // 班级数组转字符串
    allClass() {
      return this.ruleForm.class.join(",");
    },
    // 作业数组转字符串
    allHomeWorks() {
      return this.ruleForm.homeWorks.join(",");
    },
  },
  methods: {
    // 添加信息确认提交
    submitForm(formName) {
      if (sessionStorage.getItem("isChange") == "true") {
        this.changeVueX();
        this.$router.push("/ClaCho");
      } else {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: "添加成功",
              type: "success",
            });
            this.ruleForm.term = this.ruleForm.term1.concat(
              this.ruleForm.term2
            );
            var aData = new Date();
            var month =
              aData.getMonth() + 1 > 9
                ? aData.getMonth() + 1
                : "0" + (aData.getMonth() + 1);
            var second =
              aData.getSeconds() > 9
                ? aData.getSeconds()
                : "0" + aData.getSeconds();
            this.ruleForm.time =
              aData.getFullYear() +
              "-" +
              month +
              "-" +
              aData.getDate() +
              " " +
              aData.getHours() +
              ":" +
              aData.getMinutes() +
              ":" +
              second;
            this.upDataVueX();
            this.$router.push("/ClaCho");
          } else {
            return false;
          }
        });
      }
    },
    // 将数据传到VueX
    upDataVueX() {
      this.$store.commit("ADD_PERSON", this.ruleForm);
    },
    changeVueX() {
      this.$store.commit("Change_PERSON", this.ruleForm);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showClassForm() {
      this.hideForm.classShow = true;
    },
    showHomeWorksShow() {
      this.hideForm.homeWorksShow = true;
    },
    toggleSelection() {
      this.hideForm.classShow = false;
      this.hideForm.homeWorksShow = false;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 选中将班级传入class
    loadClass(selection) {
      let aClass = [];
      for (let i in selection) {
        aClass[i] = selection[i].className.concat(selection[i].grade);
      }
      this.ruleForm.class = aClass;
    },
    // 选中将班级传入homeworks
    loadHomeWork(selection) {
      let aWorks = [];
      for (let i in selection) {
        aWorks[i] = selection[i].letMeTired;
      }
      this.ruleForm.homeWorks = aWorks;
    },
    submitClass() {
      if (this.ruleForm.class.length > 0) {
        this.hideForm.classShow = false;
        this.hideForm.homeWorksShow = false;
      } else {
        this.$message({
          message: "请选择班级",
          type: "success",
        });
      }
    },
    submitClassHome() {
      if (this.ruleForm.homeWorks.length > 0) {
        this.hideForm.classShow = false;
        this.hideForm.homeWorksShow = false;
      } else {
        this.$message({
          message: "请选择作业表",
          type: "warning",
        });
      }
    },
    returnCla() {
      sessionStorage.removeItem("changeMessage");
      sessionStorage.removeItem("isChange");
      sessionStorage.setItem("isChange", false);
    },
    ChangMessage() {
      let data = JSON.parse(sessionStorage.getItem("changeMessage"));
      this.ruleForm = data;
    },
  },
  mounted() {
    // 第一次挂载不执行以下函数||之后每次挂载都会重复n次以下函数；若取消订阅或解除绑定则完全不执行
    // this.$bus.$on('ChangMess',this.ChangMessage)
    // alert('00')
    this.pubId = pubsub.subscribe("ChangMess", (data1,data2) =>{
      console.log(data1);
      console.log(data2);
    });
    console.log(this.pubId);
    // 判断是否要修改
    // if (sessionStorage.getItem("isChange") == "true") {
    //   this.ChangMessage();
    // }
  },
  beforeDestroy() {
    // this.$bus.$off("ChangMess");
    // pubsub.unsubscribe(this.pubId)
  },
};
</script>

<style lang="css" scoped>
.formBox {
  width: 700px;
  /* height: 700px; */
  padding: 30px;
  box-sizing: border-box;
  margin-top: 50px;
  margin-left: 50%;
  transform: translate(-50%);
  background-color: rgb(255, 253, 253);
  box-shadow: 0 0 15px 0 rgb(248, 211, 211);
}
.el-select {
  width: 500px;
}
.term-select {
  width: 200px;
}
.submit-btn {
  background-color: orangered;
  border: none;
  margin: 20px 50px 0 120px;
}
.className {
  color: #123;
}
.hideForm {
  background-color: rgba(0, 0, 0, 0.178);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.clssShowBox {
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px rgba(54, 54, 54, 0.575);
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 100px;
  padding: 20px;
}
</style>
