<template>
  <div class="partyBuildingTwoIndex">
    <SubTitle :title="subTitle" :img="imgUrl"></SubTitle>
    <div class="currency">
      <ul>
        <li v-for="(item,index) in contentList" :key="index">
          <div class="muiCard">
            <!--内容区-->
            <div class="muiContent">
              <img :src="item.img">
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
      <span class="figure">1</span>
      <span class="numberRight">></span>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle';

export default {
  name: 'partyBuildingTwoIndex',
  props: ['indexkid'],
  data() {
    return {
      contentList: [],
      subTitle: '',
      imgUrl: '',
    };
  },
  watch: {
    indexkid() {
      this.getIndex = this.indexkid;
      this.$http.get('/static/data/partyBuilding.json').then((res) => {
        this.subTitle = res.data.subTitle[this.getIndex];
        if (this.getIndex === 0) {
          this.contentList = res.data.Survey;
        } else if (this.getIndex === 1) {
          this.contentList = res.data.dynamic;
        } else if (this.getIndex === 2) {
          this.contentList = res.data.Elegance;
        } else if (this.getIndex === 3) {
          this.contentList = res.data.Communication;
        }
      }).catch((err) => {
        /* eslint-disable */
        console.log(err)
      });
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get('/static/data/partyBuilding.json').then((res) => {
        /* eslint-disable */
        const data = res.data;
        this.contentList = data.Survey;
        this.imgUrl = data.imgTitle;
        this.subTitle = data.subTitle[0];
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      });
    },
  },
  components: {
    SubTitle,
  },
};
</script>

<style scoped>
.currency {
  margin: 10px 0px;
}
.muiCard {
  margin: 22px 10px;
  border-top: 2px solid #eaeaea;
  height: 75px;
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
  top: 0px;
  line-height: 1.8em;
  letter-spacing: 1px;
}
.muiFooter .date {
  font-size: 12px;
  color: #333;
  position: absolute;
  bottom: 3px;
  right: 0px;
}
.currency ul li .date {
  bottom:-10px;
}
.currency {
  margin-bottom: 50px;
}
.currency ul li:nth-last-child(1) .muiCard {
  height: 80px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eaeaea;
}

.number {
  margin: 20px 50px 45px 0px;
  float: right;
}
.number .numberLeft,
.numberRight {
  display: inline-block;
  width: 20px;
  height: 25px;
  border: 1px solid #2e7eb3;
  text-align: center;
  line-height: 25px;
}
.number span.figure {
  display: inline-block;
  width: 20px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #2e7eb3;
  color: #fff;
  font-weight: 600;
}
</style>
