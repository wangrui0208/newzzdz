<template>
  <div>
    <div class="titleImg">
      <img :src="img" alt="">
    </div>
    <div class="ContentTitle">
      <span></span>
      <b>{{title}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subTitle',
  props: ['title', 'img'],
};
</script>

<style lang="scss">
.titleImg img {
  width:100%;
  height:120px;
}
.ContentTitle {
  margin:20px 0px 10px 5px;
  position: relative;
  span {
    display: inline-block;
    width: 5px;
    height:25px;
    background: #2393fd;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 5px;
  }
  b {
    margin-left: 10px;
    font-weight: normal;
    font-size: 18px;
  }
}
</style>

