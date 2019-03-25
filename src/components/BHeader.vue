<template>
  <div>
    <div class="industryPlanTwoIndexList">
      <ul>
        <li
          v-for="(item,key) in titleList"
          :key="item.id"
          @click="enter(key)"
          :class="addClass[key]"
        >
          <span class="hideKey">{{key}}</span>
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BHeader',
  props: ['titleList'],
  data() {
    return {
      addClass: ['clickClass', 'NoClickClass', 'NoClickClass', 'NoClickClass'],
    };
  },
  methods: {
    enter(index) {
      this.$emit('getIndex', index);
      this.addClass = ['NoClickClass', 'NoClickClass', 'NoClickClass', 'NoClickClass'];
      this.addClass[index] = 'clickClass';
    },
  },
};
</script>

<style scoped>
/* 点击title变换颜色 */
.clickClass {
  color: #1b77e6;
}
.NoClickClass {
  color: #000;
}
/* title设置 */
.industryPlanTwoIndexList {
  font-size: 0px;
}
.industryPlanTwoIndexList ul li {
  font-size: 16px;
  display: inline-block;
  width: 20%;
  text-align: center;
  height: 55px;
  /* border:1px solid red; */
  line-height: 55px;
  background: #f3f0f0;
  box-sizing: border-box;
  border-left: 2px solid #fff;
  letter-spacing: 2px;
}
.industryPlanTwoIndexList ul li:nth-child(1) {
  border-left: none;
}
.hideKey {
  display: none;
}
</style>

