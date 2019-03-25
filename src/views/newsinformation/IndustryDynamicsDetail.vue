<template>
  <div class='industryDynamics'>
    <div class='industryDynamicsTitle'>
      <h1>{{detail.title}}</h1>
      <div>{{detail.source}}</div>
      <hr />
    </div>
    <div class='industryDynamicsContent'>
      <!-- eslint-disable -->
      <div v-html='detail.webContentHeader'></div>
      <div class="industryDynamicsimgList">
        <ul>
          <li
            v-for="(item,key) in imgListOne"
            :key="item.id"
          >
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <div v-html='detail.webContentFooter'></div>
      <div class="industryDynamicsimgList">
        <ul>
          <li
            v-for="(item,key) in imgListTwo"
            :key="item.id"
          >
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <div v-html='detail.webContentMore'></div>
    </div>
     <!-- eslint-enable -->
    <hyper-link :obj="resp" :index="index" :url="url"/>
  </div>
</template>

<script>
import HyperLink from './../../components/HyperLink';

export default {
  name: 'IndustryDynamicsDetail',
  data() {
    return {
      resp: {},
      url: '/newsinformation/IndustryDynamicsDetail/',
      index: 0,
      detail: {},
      imgListOne: [],
      imgListTwo: [],
    };
  },
  components: {
    HyperLink,
  },
  mounted() {
    /* eslint-disable */
    let index = this.$route.params.index;
    // 判断字符串
    if (typeof index === "string") {
      this.index = parseInt(index);
    }
    this.$http.get('/static/data/industryDynamicsIndex.json').then((res) => {
      this.resp = res;
      this.detail = res.data[index];
      /* eslint-disable */
      this.imgListOne = this.detail.imgListOne;
      this.imgListTwo = this.detail.imgListTwo;
      console.log(res);
    }).catch((err) => {
      /* eslint-disable */
      console.log(err);
    });
  }
};
</script>

<style scoped>
.industryDynamics {
  margin: 20px 15px;
}
/* title */
.industryDynamicsTitle {
  text-align: center;
}
.industryDynamicsTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.industryDynamicsTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.industryDynamicsTitle div {
  font-size: 14px;
  margin-bottom: 15px;
}

/* content */
.industryDynamicsContent {
  margin-bottom: 30px;
}
.industryDynamicsContent img {
  width: 100%;
}
.industryDynamicsContent >>> p {
  font-size: 15px;
  color: #666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 10px 0px;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
}
.industryDynamicsContent p:nth-child(1) {
  margin-bottom: 15px;
  margin-top: 25px;
}
.industryDynamicsContent  p.imgTop {
  margin-bottom: 25px;
}
.industryDynamicsContent p.imgBottom {
  margin-top: -5px;
}

/* 隐藏key */
.hideKey {
  display: none;
}

/* 图片列表设置 */
.industryDynamicsimgList ul li {
  text-align: center;
}
.industryDynamicsimgList ul li img {
  width: 95%;
}
.industryDynamicsimgList ul li div.explain {
  text-align: center;
  font-size: 14px;
  color: #666;
  padding: 5px 0px 20px 0px;
}

/* 上一篇  下一篇 */
.Hyperlink div:nth-child(1) {
  margin-top: 20px;
  margin-bottom: 10px;
}
.Hyperlink div a {
  color: #666;
  font-size: 14px;
}
p {
  line-height: 1.8em;
}
</style>
