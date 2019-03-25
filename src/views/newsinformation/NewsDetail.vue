<template>
  <div class='NewsTwo'>
    <div class='NewsTwoTitle'>
      <h1>{{detail.title}}</h1>
      <div>{{detail.source}}</div>
      <hr />
    </div>
    <div class='NewsTwoContent'>
      <!-- eslint-disable -->
      <p>{{detail.webContentHeader}}</p>
      <div class="NewsTwoimgList">
        <ul>
          <li v-for="(item,key) in imgList" :key="item.id">
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p>{{detail.webContentFooter}}</p>

      <!-- eslint-enable -->
    </div>
    <hyper-link :obj="resp" :index="index" :url="url"/>
  </div>
</template>

<script>
import HyperLink from './../../components/HyperLink';

export default {
  name: 'NewsDetail',
  components: {
    HyperLink,
  },
  data() {
    return {
      preDetail: true,
      lastDetail: true,
      url: '/newsinformation/NewsDetail/',
      index: 0,
      resp: {},
      detail: {},
      imgList: [],
    };
  },
  mounted() {
    /* eslint-disable */
    let index = this.$route.params.index;
    // 判断字符串
    if (typeof index === "string") {
      this.index = parseInt(index);
    }
    this.$http.get('/static/data/companyNewsIndex.json').then((res) => {
      this.resp = res;
      this.detail = res.data[index];
      /* eslint-disable */
      this.imgList = this.detail.imgList;
    });
  },
};
</script>

<style scoped>

.NewsTwo {
  margin: 20px 15px;
}
.blue{
  color: blue;
}
/* title */
.NewsTwoTitle {
  text-align: center;
}
.NewsTwoTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.NewsTwoTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.NewsTwoTitle div {
  font-size: 14px;
  margin-bottom: 15px;
}

/* content */
.NewsTwoContent {
  margin-bottom: 30px;
}
.NewsTwoContent img {
  width: 100%;
}
.NewsTwoContent p {
  font-size: 15px;
  color: #666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 10px 0px;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
}
.NewsTwoContent p:nth-child(1) {
  margin-bottom: 15px;
  margin-top:25px;
}
.NewsTwoContent p.imgTop {
  margin-bottom: 25px;
}
.NewsTwoContent p.imgBottom {
  margin-top: -5px;
}

/* 隐藏key */
.hideKey {
  display:none
}

/* 图片列表设置 */
.NewsTwoimgList ul li {
  text-align: center;
}
.NewsTwoimgList ul li img {
  width:90%;
}
.NewsTwoimgList ul li div.explain {
  text-align: center;
  font-size:14px;
  color:#666;
  padding:5px 0px 30px 0px;
}

/* 上一篇  下一篇 */
.Hyperlink div:nth-child(1) {
  margin-top:20px;
  margin-bottom:10px;
}
.Hyperlink div a {
  color:#666;
  font-size: 14px;
}

p {
  line-height: 1.8em;
}
</style>
