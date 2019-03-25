<template>
  <div class="industryDynamicsIndexContent" :style="{display:show}">
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
  name: '',
  data() {
    return {
      NewsData: [],
      show: '',
      subTitle: '行业动态',
      imgUrl: 'static/images/newsInformation/newsTitle.jpg',
    };
  },
  components: {
    SubTitle,
  },
  methods: {
    enterNewsData(index) {
      this.$router.push(`/newsinformation/IndustryDynamicsDetail/${index}`);
    },
  },
  mounted() {
    this.$http.get('/static/data/industryDynamicsIndex.json').then((res) => {
      this.NewsData = res.data;
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
  height:70px;
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
  font-size: 12px;
  color:#333;
  position: absolute;
  bottom: -5px;
  right:0px;
}
.ContentList ul li:nth-last-child(1) .muiCard {
  padding-bottom:20px;
  border-bottom:2px solid #EAEAEA;
  margin-bottom:50px;
}

</style>

