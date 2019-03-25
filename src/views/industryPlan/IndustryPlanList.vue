<template>
  <div class="currency">
    <div class="ContentTitle">
      <ul>
        <li v-for="(item,index) in contentList" :key="index">
          <div class="muiCard">
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
  </div>
</template>

<script>
export default {
  name: 'IndustryPlanList',
  props: ['kidIndex'],
  data() {
    return {
      contentList: [],
    };
  },
  watch: {
    kidIndex() {
      this.$http.get('/static/data/industryPlan.json').then((res) => {
        if (this.kidIndex === 0) {
          this.contentList = res.data.goverment;
        } else if (this.kidIndex === 1) {
          this.contentList = res.data.Finance;
        } else if (this.kidIndex === 2) {
          this.contentList = res.data.education;
        } else if (this.kidIndex === 3) {
          this.contentList = res.data.enterprise;
        } else if (this.kidIndex === 4) {
          this.contentList = res.data.Medical;
        }
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      })
    },
  },
  mounted() {
    this.$http.get('/static/data/industryPlan.json').then((res) => {
        this.contentList = res.data.goverment
      }).catch((err) => {
        /* eslint-disable */
      })
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
  bottom: 3px;
  right: 0px;
}
.currency ul li:nth-last-child(1) .muiCard {
  height: 80px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eaeaea;
}
</style>

