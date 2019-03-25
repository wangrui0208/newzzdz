<template>
  <div class='softwareProduct'>
    <div class='softwareProductTitle'>
      <img src='static/images/companyProducts/companyProductsTitle.jpg'>
    </div>
    <div class='softwareProductList'>
      <div class='ListTitle'>
        <b class="bLine"></b>
        <span>丰富的软件产品 全面的服务</span>
      </div>
      <div class='ListContent'>
        <ul>
          <li v-for="(item,key) in ImgList"
            :key="item.id"
            @click="enterSubPage(key)"
            :class="item.isCurrent?'show':'hide'"
          >
            <img :src='item.img'>
            <span class="Title">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <hr class="hrStyle">
    <div class="lineImg">
      <img src="static/images/companyProducts/line.png">
    </div>
    <software-product-detail :obj="detail"/>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */

import SoftwareProductDetail from './SoftwareProductDetail';

export default {
  name: 'softwareProduct',
  components: { SoftwareProductDetail },
  data() {
    return {
      ImgList: [],
      detail: {},
    };
  },
  methods: {
    enterSubPage(value) {
      this.detail = this.ImgList[value];
      this.notifyData(value);
    },
    notifyData(i) {
      this.ImgList.forEach((item, index) => {
        item.isCurrent = index === i;
      });
    },
  },
  mounted() {
    this.$http.get('/static/data/softwareProduct.json').then((res) => {
      this.ImgList = res.data;
      this.detail = res.data[0];
      this.notifyData(0);
      /* eslint-disable */
      console.log(res);
    }).catch((err) => {
      /* eslint-disable */
      console.log(err);
    });
  }
};
</script>

<style scoped>
/* 设置选中的样式 */
.show {
  background: #1c4ade !important;
}
/* 未选中样式 */
.hide {
  background: #1e92e4 !important;
}
/* title图片设置 */
.softwareProductTitle {
  margin-top:10px;
}
.softwareProductTitle img {
  width: 100%;
  height:120px;
}

/* 设置列表标题 */
.ListTitle {
  margin: 30px 0px 20px 10px;
  font-size: 16px;
  position: relative;
}
.ListTitle .bLine {
  display: inline-block;
  position: absolute;
  width: 8px;
  height: 30px;
  background: rgba(6, 135, 226, 0.9);
}
.ListTitle span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  /* border:1px solid red; */
  margin-left: 15px;
}
/* li列表 */
.ListContent ul {
  font-size: 0px;
  margin-bottom: 15px;
}
.ListContent ul li {
  display: inline-block;
  font-size: 15px;
  width: 46%;
  background: rgba(6, 135, 226, 0.9);
  color: #fff;
  height: 40px;
  position: relative;
  line-height: 40px;
  margin: 0px 8px;
  vertical-align: top;
  margin-bottom: 12px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px #888888;
}
/* 偶数行设置 */
.ListContent ul li:nth-of-type(even) {
  width: 42%;
}
.ListContent ul li img {
  width: 15%;
  position: absolute;
  left: 5px;
  top: 5px;
}
.ListContent ul li span.Title {
  display: inline-block;
  width: 80%;
  height: 100%;
  margin-left: 33px;
  font-weight: 500;
}
.ListContent ul li:nth-child(1) span.Title {
  margin-left: 36px;
}

.hrStyle {
  height: 2px;
  border: none;
  width: 95%;
  border-top: 2px solid #1d87e2;
}

/* 分界的img */
.lineImg {
  text-align: center;
  margin-top: -5px;
}
.lineImg img {
  width: 17%;
}
</style>

