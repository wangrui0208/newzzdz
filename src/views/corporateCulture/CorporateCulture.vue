<template>
  <div class="corporateCulture">
    <myHeader></myHeader>
    <SubTitle :title="subTitle" :img="imgUrl"></SubTitle>
    <div class="currency">
      <ul>
        <li v-for="(item,key) in corporateCulture" :key="item.id">
          <div class="muiCard">
            <!--内容区-->
            <div class="muiContent">
              <img :src="item.img">
              <span class="hideKey">{{key}}</span>
            </div>
            <div class="muiFooter">
              <h1>{{item.title}}</h1>
              <div class="date">{{item.date}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="number">
      <span class="numberLeft">&lt;</span>
      <span>1</span>
      <span class="numberRight">></span>
    </div>
    <div class="bottomImg">
      <ul>
        <li v-for="(itemImg,key) in bottomImg" :key="itemImg.id">
          <span class="hideKey">{{key}}</span>
          <img :src="itemImg.img" alt="">
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/Header';
import myFooter from '@/components/Footer';
import SubTitle from '@/components/SubTitle';

export default {
  name: 'corporateCulture',
  components: {
    myHeader,
    myFooter,
    SubTitle,
  },
  data() {
    return {
      corporateCulture: [],
      bottomImg: [],
      subTitle: '企业文化、员工风采',
      imgUrl: 'static/images/corporateCulture/corporateCultureTitle.jpg',
    };
  },
  mounted() {
    this.$http.get('/static/data/corporateCulture.json').then((res) => {
      this.corporateCulture = res.data.corporateCulture;
      this.bottomImg = res.data.bottomImg;
    }).catch((err) => {
      /* eslint-disable */
      console.log(err)
    })
  },
};
</script>

<style scoped>
/* 公司新闻title */
.ContentTitle {
  margin: 20px 10px;
  height: 30px;
  line-height: 35px;
  position: relative;
}
.currency {
  margin: 10px 0px;
}
.muiCard {
  margin: 22px 10px;
  border-top: 2px solid #eaeaea;
  height: 60px;
  padding-top: 10px;
}
.muiCard div {
  display: inline-block;
}
/* 图片设置 */
.muiContent {
  width: 30%;
}
.muiContent img {
  width: 100%;
}
/* 标题设置 */
.muiFooter {
  width: 65%;
  margin-left: 10px;
  height: 100%;
  position: relative;
}
.muiFooter h1 {
  font-size: 14px;
  font-weight: 100;
  position: absolute;
  top: 6px;
  line-height: 1.8em;
  letter-spacing: 1px;
}
.muiFooter .date {
  font-size: 12px;
  color: #333;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.currency ul li:nth-child(1) .muiFooter h1 {
  top: -5px;
}
.currency ul li:nth-child(5) .muiFooter h1 {
  top:-6px;
}
.currency ul li:nth-child(5) .muiFooter .date {
  bottom:-5px;
}
.currency {
  margin-bottom: 40px;
}
.currency ul li:nth-last-child(1) .muiCard {
  height: 80px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eaeaea;
}
.hideKey {
  display:none;
}
.number {
  margin:0px 50px 55px 0px;
  float: right;
}
.number .numberLeft,.numberRight {
  display: inline-block;
  width:20px;
  height:25px;
  border:1px solid #2E7EB3;
  text-align: center;
  line-height: 25px;
}
.number span:nth-child(2) {
  display: inline-block;
  width:20px;
  height:25px;
  text-align: center;
  line-height: 25px;
  background: #2E7EB3;
  color:#fff;
  font-weight: 600;
}
/* 底部图片设置 */
.bottomImg {
  margin-top:122px;
  margin-bottom:-4px;
  text-align: center;
}
.bottomImg ul li {
  display: inline-block;
  width:23%;
  margin-left:5px;
}
.bottomImg ul li:nth-child(1) {
  margin-left:0px;
}
.bottomImg ul li img {
  width:100%;
}
</style>

