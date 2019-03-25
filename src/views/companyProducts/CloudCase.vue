<template>
  <div class="productCase">
    <div class="productCaseTitle">
      <hr class="hr">
      <p>云计算产品及案例</p>
    </div>
    <div class="productList">
      <ul>
        <li v-for="(item,key) in productList" :key="item.id" @click="selectProduct(key)">
          <div class="listImg">
            <img :src="item.img" alt="">
          </div>
          <span class="bigTitle" :class="selectClass[key]">{{item.title}}</span>
        </li>
      </ul>
    </div>
    <CaseDetail :indexkid="index"></CaseDetail>
  </div>
</template>

<script>
import CaseDetail from '@/views/companyProducts/CaseDetail';

export default {
  name: 'CloudCase',
  components: {
    CaseDetail,
  },
  data() {
    return {
      productList: [],
      index: 0,
      selectClass: ['show', 'hide', 'hide', 'hide', 'hide'],
    };
  },
  mounted() {
    this.$http.get('/static/data/CloudComputing.json').then((res) => {
      this.productList = res.data.productList;
    }).catch((err) => {
      /* eslint-disable */
      console.log(err);
    });
  },
   methods: {
    selectProduct(key) {
      this.index = key;
      if (key === 0) {
        this.selectClass = ['show', 'hide', 'hide', 'hide', 'hide'];
      } else if (key === 1) {
        this.selectClass = ['hide', 'show', 'hide', 'hide', 'hide'];
      } else if (key === 2) {
        this.selectClass = ['hide', 'hide', 'show', 'hide', 'hide'];
      } else if (key === 3) {
        this.selectClass = ['hide', 'hide', 'hide', 'show', 'hide'];
      } else if (key === 4) {
        this.selectClass = ['hide', 'hide', 'hide', 'hide', 'show'];
      }
    },
  },
}
</script>

<style scoped>
/* 选中时 */
.show {
  color:#000 !important;
  font-weight: 600 !important;
}
/* 未选中 */
.hide {
  color:#666 !important;
  font-weight: 100 !important;
}
/* 云服务产品及案例 */
.productCaseTitle {
  margin: 10px;
  position: relative;
  margin-top: 60px;
  height: 30px;
}
.hr {
  height: 2px;
  border: none;
  border-top: 1px solid #333;
}
.productCaseTitle p {
  position: absolute;
  font-size: 20px;
  z-index: 2;
  top: -15px;
  height: 30px;
  line-height: 30px;
  padding: 0px 6px;
  background: #fff;
  color: #666;
  left: 25%;
  text-shadow: 10px 10px 5px #b9ddf7;
}
/* 大列表 */
.productList {
  margin:30px 10px 20px 10px;
}
.productList>ul li {
  display: inline-block;
  width:20%;
  text-align: center;
}
.bigTitle {
  display: inline-block;
  font-size: 14px;
  margin:10px 0px;
  letter-spacing: 1px;
  color:#666;
}
.listImg img {
  width:80%;
}
</style>

