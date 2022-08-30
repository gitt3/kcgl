<template>
  <div>
    <div class="0">code</div>
    {{value}}
  </div>
</template>

<script>
export default {
  name: "Code",
  data() {
    return {
      value:'12',
    };
  },
  computed: {},
  methods: {
    created () {
      var aData = new Date();
      console.log(aData); //Wed Aug 21 2019 10:00:58 GMT+0800 (中国标准时间)
      var month=(aData.getMonth() + 1)>9?(aData.getMonth() + 1):('0'+(aData.getMonth()+1));
      var second=aData.getSeconds()>9?aData.getSeconds():('0'+aData.getSeconds());
      this.value =
        aData.getFullYear() +
        "-" +
        month +
        "-" +
        aData.getDate()+
        " "+
        aData.getHours()+ ":"+
        aData.getMinutes()+ ":"+
        second;
    },
  },
  mounted() {
    this.created();
  },
};
</script>

<style lang="css">
</style>
