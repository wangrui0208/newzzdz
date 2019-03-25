<template>
  <div class="companyNewsContent" :style="{display:show}">
    <SubTitle :title="subTitle" :img="imgUrl"></SubTitle>
    <div class="ContentList">
      <ul>
        <li v-for="(item,key) in NewsData" :key="item.id" @click="enterNewsData(key)">
          <div class="muiCard">
            <!--内容区-->
            <div class="muiContent">
              <img :src="item.img" >
              <span class="vForKey">{{key}}</span>
            </div>
            <div class="muiFooter">
              <h1>{{item.title}}</h1>
              <div class="date">{{item.date}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle';

export default {
  name: 'companyNewsIndex',
  data() {
    return {
      NewsData: [],
      show: '',
      subTitle: '公司新闻',
      imgUrl: 'static/images/newsInformation/newsTitle.jpg',
    };
  },
  components: {
    SubTitle,
  },
  methods: {
    enterNewsData(index) {
      this.show = 'none';
      // 1,使用name+params 参数类型不变
      // this.$router.push({
      //   name: 'NewsDetail',
      //   params: { index },
      // });
      // 2,直接path拼接参数 参数string
      this.$router.push(`/newsinformation/NewsDetail/${index}`);
    },
  },
  mounted() {
    this.$http.get('/static/data/companyNewsIndex.json').then((res) => {
      this.NewsData = res.data;
    }).catch((err) => {
      /* eslint-disable */
      console.log(err);
    });
  }
};
</script>

<style scoped>
/* 新闻列表 */
.vForKey {
  display: none;
}
/* 列表设置 */
.ContentList {
  margin:10px 0px;
}
.muiCard {
  margin:22px 10px;
  border-top:2px solid #EAEAEA;
  height:60px;
  padding-top:10px;
}
.muiCard div{
  display: inline-block;
}
/* 图片设置 */
.muiContent {
  width:30%;
}
.muiContent img{
  width:100%;
}
/* 标题设置 */
.muiFooter {
  width: 65%;
  margin-left:10px;
  height:100%;
  position: relative;
}
.muiFooter h1 {
  font-size: 14px;
  font-weight: 100;
  position: absolute;
  top: 6px;
}
.muiFooter .date {
  font-size:12px;
  color:#333;
  position: absolute;
  bottom: 3px;
  right:0px;
}
.ContentList ul li:nth-child(1) .muiFooter h1 {
  top:10px;
}
.ContentList ul li:nth-child(1) .muiFooter .date {
  bottom:-10px;
}
.ContentList {
  margin-bottom:50px;
}
.ContentList ul li:nth-last-child(1) .muiCard {
  height:80px;
  padding-bottom:20px;
  border-bottom:2px solid #EAEAEA;
}
</style>

