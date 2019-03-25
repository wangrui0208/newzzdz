<template>
  <div class="productContent">
    <ul>
      <li>
        <div v-for="(product,key) in productList.children" :key="product.id">
          <span class="hideKey">{{key}}</span>
          <div class="subTitle">{{product.subtitle}}</div>
          <div class="Content">{{product.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CaseDetail',
  props: ['indexkid'],
  data() {
    return {
      productList: [],
      getIndex: 1,
    };
  },
  watch: {
    indexkid() {
      this.getIndex = this.indexkid;
      this.$http.get('/static/data/CloudComputing.json').then((res) => {
        this.productList = res.data.productList[this.getIndex];
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      });
    },
  },
  mounted() {
    this.$http.get('/static/data/CloudComputing.json').then((res) => {
      this.productList = res.data.productList[0];
    }).catch((err) => {
      /* eslint-disable */
      console.log(err);
    });
  },
}
</script>

<style scoped>
/* 内容 */
.productContent {
  margin:0px 15px;
  margin-bottom:30px;
}
.subTitle {
  font-size:17px;
  color:#666;
  font-weight: 600;
  font-family: "微软雅黑";
  margin:10px 0px;
}
.Content {
  text-indent: 2em;
  color:#666;
  letter-spacing: 1px;
  height:15%;
  line-height: 1.8em;
  font-size: 15px;
  text-align: justify;
}
.hideKey {
  display: none;
}
</style>
