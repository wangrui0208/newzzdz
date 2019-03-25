<template>
  <div class='cloudComputing'>
    <div class='cloudComputingTitle'>
      <img src='static/images/companyProducts/cloudComputingTitle.jpg'>
    </div>
    <div class='cloudComputingCenter'>
      <div class='CenterTitle'>
        云计算中心
      </div>
      <div class="CenterP" v-html="data.content1"></div>
      <div class="imgList">
        <ul>
          <li v-for="(item,key) in imgList" :key="item.id">
            <img :src="item.img" alt="">
            <span class="hideKey">{{key}}</span>
            <p class="imgBottom">{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="CenterP" v-html="data.content2"></div>
    </div>
    <div class="qualificationHonor">
      <div class="subtitle">
        <div>资质荣誉</div>
        <div>
          <img src="static/images/companyProducts/cloudComputingTitleBottom.png">
        </div>
      </div>
      <div class="honorList">
        <ul>
          <li v-for="(item,key) in honorList" :key="item.id">
            <span class="hideKey">{{key}}</span>
            <img src="static/images/companyProducts/cloudComputingLi.jpg">
            <span class="item">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="operationConcept">
      <div class="subtitle">
        <div>运营理念</div>
        <div>
          <img src="static/images/companyProducts/cloudComputingTitleBottom.png">
        </div>
      </div>
      <div class="CenterP" v-html="data.content3"></div>
    </div>
    <CloudCase></CloudCase>
  </div>
</template>

<script>
import CloudCase from '@/views/companyProducts/CloudCase';

export default {
  name: 'cloudComputing',
  components: {
    CloudCase,
  },
  data() {
    return {
      imgList: [],
      honorList: [],
      data: {},
    };
  },
  mounted() {
    this.$http.get('/static/data/CloudComputing.json').then((res) => {
      this.imgList = res.data.imgList;
      this.honorList = res.data.honorList;
      this.data = res.data;
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
.cloudComputing {
  margin-top: 10px;
}
.cloudComputing .cloudComputingTitle img {
  width: 100%;
  height: 150px;
}
/* 云计算中心 */
.CenterTitle {
  text-align: center;
  margin: 30px 0px;
  font-size: 30px;
  color: #0888e3;
  font-weight: 500;
  font-family: "微软雅黑";
}
/* 云计算中心的p段落 */
.CenterP {
  padding: 0px 15px 20px 15px;
  height: 30%;
  line-height: 2.0em;
  text-indent: 2em;
  letter-spacing: 1px;
  color: #666;
  margin: 10px 0px;
  font-size: 15px;
  text-align: justify;
}
/* 云计算中心img */
.imgList {
  text-align: center;
  margin: 10px;
}
.imgList ul li {
  display: inline-block;
  width: 48%;
  border-bottom: 1px solid #d6d7d7;
  margin-bottom: 20px;
  margin-right: 8px;
}
.imgList ul li:nth-of-type(even) {
  margin-right: 0px;
}
.imgList ul li img {
  width: 45%;
}
.imgList ul li p {
  color: #7286ff;
  font-size: 16px;
  margin: 15px 0px;
}
/* 隐藏key */
.hideKey {
  display: none;
}
/* 资质荣誉 */
.subtitle {
  margin: 30px 10px;
}
.subtitle div:nth-child(1) {
  font-size: 22px;
  margin-left: 20px;
}
.honorList {
  margin: 20px 20px;
}
.honorList ul li {
  margin-bottom: 20px;
  height: 10%;
  line-height: 1.8em;
}
.honorList ul li span.item {
  margin-left: 10px;
  font-size: 15px;
}
</style>

