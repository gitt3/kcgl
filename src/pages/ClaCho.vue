<template>
  <div>
    <div>
      <div class="topSearch" style="min-width: 1000px">
        <input
          class="searchInput"
          v-model="searchSchool"
          type="text"
          placeholder=" 请输入学校名称"
        />
        <input
          class="searchInput"
          v-model="searchCollege"
          type="text"
          placeholder=" 请输入学院名称"
        />
        <input
          class="searchInput"
          v-model="searchMajor"
          type="text"
          placeholder=" 请输入专业名称"
        />
        <input
          class="searchInput"
          v-model="searchClass"
          type="text"
          placeholder=" 请输入班级名称"
        />
        <input
          class="searchInput"
          v-model="searchCourse"
          type="text"
          placeholder=" 请输入课程名称"
        />
        <input
          class="searchInput"
          v-model="searchTeacher"
          type="text"
          placeholder=" 请输入教师名称"
        />
        <el-button
          type="primary"
          size="small"
          icon="el-icon-search"
          @click="searchMess"
          >搜索</el-button
        >
      </div>
      <div class="threeChangeButton">
        <router-link to="/AddMess">
          <el-button
            type="primary"
            size="mini"
            class="changeButton buttonAdd"
            icon="el-icon-plus"
            >添加</el-button
          >
        </router-link>
        <el-button
          type="primary"
          size="mini"
          class="changeButton buttonChange"
          icon="el-icon-edit"
          @click="sendChangMess"
          >修改</el-button
        >
        <el-button
          type="primary"
          size="mini"
          class="changeButton buttonDelete"
          icon="el-icon-delete"
          @click="deleteRow"
          >删除</el-button
        >
        <el-button type="primary" size="mini" @click="ShowAll">全部</el-button>
      </div>
      <div class="formPlace">
        <el-table
          :data="showTableData"
          style="width: 100%; min-width: 1600px; overflow: visible"
          :default-sort="{ prop: 'date', order: 'descending' }"
          @select="selectArow"
          @select-all="selectArow"
        >
          <el-table-column type="selection" />
          <el-table-column prop="num" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="term" label="学期" width="100">
          </el-table-column>
          <el-table-column prop="course" label="课程名称" width="180">
          </el-table-column>
          <el-table-column prop="college" label="学院" width="150">
          </el-table-column>
          <el-table-column prop="school" label="学校" width="180">
          </el-table-column>
          <el-table-column prop="major" label="专业" width="130">
          </el-table-column>
          <el-table-column prop="class" label="班级名称" width="150">
          </el-table-column>
          <el-table-column prop="teacher" label="教师姓名" width="130">
          </el-table-column>
          <el-table-column prop="homeWorks" label="作业表" width="180">
          </el-table-column>
          <el-table-column prop="updataPerson" label="更新者" width="130">
          </el-table-column>
          <el-table-column prop="time" label="更新时间" sortable width="180">
          </el-table-column>
        </el-table>
        <hr style="border-top: 1px dotted rgb(99, 199, 235, 0.5)" />
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import StuMana
import pubsub from 'pubsub-js'
export default {
  name: "ClaCho",
  data() {
    return {
      pageSize: 5,
      pageSizes: [5, 10, 15, 20],
      pageNow: 1,
      rowClick: "",
      columnClick: "",
      selectedRow: [],
      changeRow: [],
      searchSchool: "",
      searchCollege: "",
      searchMajor: "",
      searchClass: "",
      searchCourse: "",
      searchTeacher: "",
      searchInputNum: 0,
    };
  },
  computed: {
    total() {
      return this.$store.state.tableData.length;
    },
    showTableData() {
      return this.$store.state.tableData.slice(
        (this.pageNow - 1) * this.pageSize,
        this.pageSize * this.pageNow
      );
    },
  },
  methods: {
    formatter(row) {
      return row.address;
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pageNow = val;
      console.log('00');
    },
    // 重新排布num
    arrangeNum() {
      for (var i = 0; i < this.$store.state.wholeData.length; i++) {
        this.$store.state.wholeData[i].num = i + 1;
      }
    },
    // 选中行的记入数组selectedRow
    selectArow(selection) {
      let selecArr = [];
      let selectChgange = [];
      if (selection.length > 0) {
        for (var i = 0; i < selection.length; i++) {
          selecArr.push(selection[i].num);
        }
      }
      if (selection.length == 1) {
        selectChgange.push(selection[0]);
        this.changeRow = selectChgange;
      } else {
        this.changeRow = "";
      }
      this.selectedRow = selecArr;
      console.log(selection);
      console.log(this.selectedRow);
    },
    sendChangMess() {
      if (this.changeRow != "") {
        pubsub.publish('ChangMess',this.changeRow[0])
        sessionStorage.setItem(
          "changeMessage",
          JSON.stringify(this.changeRow[0])
        );
        sessionStorage.setItem("isChange", true);
        this.$router.push("/AddMess");
        // this.$bus.$emit("ChangMess", "我是一串数据");
      } else {
        this.$message({
          type: "warning",
          message: "请选择一个进行修改!",
        });
      }
    },
    deleteRow() {
      if (this.selectedRow.length > 0) {
        this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            // 选中数组排序
            let deleteArr = this.selectedRow.sort(function (a, b) {
              return a - b;
            });
            for (let i = 0; i < deleteArr.length; i++) {
              let number = deleteArr[i];
              console.log(number);
              for (let j = 0; j < this.$store.state.wholeData.length; j++) {
                if (this.$store.state.wholeData[j].num == number) {
                  console.log(number - 1);
                  this.$store.state.wholeData.splice(number - i - 1, 1);
                  break;
                }
              }
            }
            deleteArr = [];
            this.selectedRow = [];
            this.arrangeNum();
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          })
          .catch(() => {});
      } else {
        this.$alert("请先选择要删除的数据", "未选择数据", {
          confirmButtonText: "确定",
        });
      }
    },
    searchMess() {
      if (
        this.searchSchool != "" ||
        this.searchCollege != "" ||
        this.searchMajor != "" ||
        this.searchClass != "" ||
        this.searchCourse != "" ||
        this.searchTeacher != ""
      ) {
        if (this.searchSchool != "") {
          if (
            this.searchCollege != "" ||
            this.searchMajor != "" ||
            this.searchClass != "" ||
            this.searchCourse != "" ||
            this.searchTeacher != ""
          ) {
            this.$message({
              message: "请输入一项搜索",
              type: "warning",
            });
          } else {
            this.seachResponse(this.searchSchool, 6);
          }
        } else if (this.searchCollege != "") {
          if (
            this.searchMajor != "" ||
            this.searchClass != "" ||
            this.searchCourse != "" ||
            this.searchTeacher != ""
          ) {
            this.$message({
              message: "请输入一项搜索",
              type: "warning",
            });
          } else {
            this.seachResponse(this.searchCollege, 5);
          }
        } else if (this.searchMajor != "") {
          if (
            this.searchClass != "" ||
            this.searchCourse != "" ||
            this.searchTeacher != ""
          ) {
            this.$message({
              message: "请输入一项搜索",
              type: "warning",
            });
          } else {
            this.seachResponse(this.searchMajor, 7);
          }
        } else if (this.searchClass != "") {
          if (this.searchCourse != "" || this.searchTeacher != "") {
            this.$message({
              message: "请输入一项搜索",
              type: "warning",
            });
          } else {
            this.seachResponse(this.searchClass, 8);
          }
        } else if (this.searchCourse != "") {
          if (this.searchTeacher != "") {
            this.$message({
              message: "请输入一项搜索",
              type: "warning",
            });
          } else {
            this.seachResponse(this.searchCourse, 4);
          }
        } else if (this.searchTeacher != "") {
          this.seachResponse(this.searchTeacher, 9);
        }
      } else {
        this.$message({
          message: "请输入搜索内容",
          type: "warning",
        });
      }
    },
    seachResponse(mess, index) {
      this.searchSchool = "";
      this.searchCollege = "";
      this.searchMajor = "";
      this.searchClass = "";
      this.searchCourse = "";
      this.searchTeacher = "";
      let Allmessages = this.$store.state.wholeData;
      this.$store.state.tableData = [];
      let isResults = false;
      // 遍历全部数据，如果包含搜索内容则显示，否则显示全部以及报错
      for (let i = 0; i < Allmessages.length; i++) {
        let abc = JSON.stringify(Allmessages[i]).split('":');
        if (abc[index].includes(mess)) {
          this.$store.state.tableData.push(this.$store.state.wholeData[i]);
          isResults = true;
        }
      }
      if (!isResults) {
        this.$store.state.tableData = this.$store.state.wholeData;
        this.$message({
          message: "查无内容",
          type: "error",
        });
      }
      console.log(this.$store.state.tableData);
    },
    ShowAll() {
      this.$store.state.tableData = this.$store.state.wholeData;
    },
  },
  mounted() {
    this.arrangeNum();
    this.$store.state.tableData = this.$store.state.wholeData;
  },
};
</script>

<style lang="css" scode="true">
.searchInput {
  outline: none;
  border: 1px solid rgba(136, 136, 136, 0.4);
  height: 40px;
  width: 350px;
  border-radius: 5px;
  margin: 5px 10px;
}
.changeButton {
  background-color: transparent;
  margin: 10px 2px;
}
.buttonAdd {
  border: 1px solid blue;
  color: blue;
}
.buttonChange {
  border: 1px solid rgb(50, 255, 47);
  color: rgb(50, 255, 47);
}
.buttonDelete {
  border: 1px solid red;
  color: red;
}
.formPlace * {
  text-align: center;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow: visible;
}
.el-table--border .el-table__cell,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 1px solid rgba(3, 188, 255, 0.45);
  border-top: 1px solid rgb(99, 199, 235, 0.15);
}
.el-table_2_column_16,
.el-table_1_column_4 {
  color: rgb(0, 255, 217);
}
.is-leaf {
  color: #123;
}
</style>
