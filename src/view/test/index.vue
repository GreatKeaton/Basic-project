<template>
  <div class="hello">
    <input type="button" @click="save" value="发表评价" :disabled="isDisable">

    <ul class="jgg">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDisable: false
    }
  },
  methods: {
    save: function () {
      this.isDisable = true
      setTimeout(() => {
        this.isDisable = false
        console.log(this.isDisable)
      }, 3000)
    }
  }
}
</script>

<style lang='less' scoped>
// @import '../../../static/css/common';
.jgg{
  list-style: none;
  width: 150px;
  display: flex;

  li{
    width: 50px;
    height: 50px;
  }
}
</style>
