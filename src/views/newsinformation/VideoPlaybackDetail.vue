<template>
  <div class='videoPlayback'>
    <div class='videoPlaybackTitle'>
      <h1>{{detail.title}}</h1>
      <div>{{detail.source}}</div>
      <hr />
    </div>
    <div class='videoPlaybackContent'>
      <!-- eslint-disable -->
      <video  :src="videoSrc" class="myVideo" controls  :poster="videoImg">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <div v-html="detail.content"></div>
    <!-- eslint-enable -->
    <hyper-link :obj="resp" :index="index" :url="url"/>
  </div>
</template>

<script>
import HyperLink from './../../components/HyperLink';

export default {
  name: 'videoPlaybackDetail',
  components: {
    HyperLink,
  },
  data() {
    return {
      resp: {},
      url: '/newsinformation/videoPlaybackDetail/',
      index: 0,
      detail: {},
      videoSrc: '',
      videoImg: '',
    };
  },
  mounted() {
    /* eslint-disable */
    let index = this.$route.params.index;
    // 判断字符串
    if (typeof index === "string") {
      this.index = parseInt(index);
    }
    this.$http.get('/static/data/videoPlaybackIndex.json').then((res) => {
      this.resp = res;
      this.detail = res.data[index];
      /* eslint-disable */
      this.imgListOne = this.detail.videoSrc;
      this.imgListTwo = this.detail.videoImg;
      console.log(res);
    }).catch((err) => {
      /* eslint-disable */
      console.log(err);
    });
  }
};
</script>

<style scoped>
.videoPlayback {
  margin: 20px 15px;
}
/* title */
.videoPlaybackTitle {
  text-align: center;
}
.videoPlaybackTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.videoPlaybackTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.videoPlaybackTitle div {
  font-size: 14px;
  margin-bottom: 15px;
}

/* content */
.videoPlaybackContent {
  text-align: center;
  position: relative;
  width:100%;
}
.myVideo {
  width:100%;
  height:200px;
  object-fit: fill;
  margin-top:15px;
}
.videoPlayback >>> p.imgBottom {
  font-size:15px;
  color:#666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin:15px 0px 30px 0px;
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
