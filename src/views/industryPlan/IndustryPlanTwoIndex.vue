<template>
  <div class="industryPlanTwoIndex">
    <BHeader :titleList="titleList" @getIndex="newIndex"></BHeader>
    <SubTitle :title="subTitle" :img="imgUrl"></SubTitle>
    <IndustryPlanList :kidIndex="index"></IndustryPlanList>
    <div class="number">
      <span class="numberLeft">&lt;</span>
      <span>1</span>
      <span class="numberRight">></span>
    </div>
  </div>
</template>

<script>
import BHeader from '@/components/BHeader';
import IndustryPlanList from '@/views/industryPlan/IndustryPlanList';
import SubTitle from '@/components/SubTitle';

export default {
  name: 'industryPlanTwoIndex',
  data() {
    return {
      titleList: [],
      index: 0,
      select: [],
      number: '',
      subTitle: '政府行业方案',
      imgUrl: 'static/images/industryPlan/industryPlanGovernment.jpg',
    };
  },
  mounted() {
    this.$http.get('/static/data/industryPlan.json').then((res) => {
      this.titleList = res.data.titleList;
    }).catch((err) => {
      /* eslint-disable */ 
      console.log(err)
    })
  },
  components: {
    BHeader,
    IndustryPlanList,
    SubTitle,
  },
  methods: {
    newIndex(index) {
      this.index = index;
      if (index === 0) {
        this.subTitle = '政府行业方案';
        this.imgUrl = 'static/images/industryPlan/industryPlanGovernment.jpg';
      } else if (index === 1) {
        this.subTitle = '金融行业方案';
        this.imgUrl = 'static/images/industryPlan/industryPlanFinance.jpg';
      } else if (index === 2) {
        this.subTitle = '教育行业方案';
        this.imgUrl = 'static/images/industryPlan/industryPlaneducation.jpg';
      } else if (index === 3) {
        this.subTitle = '企业行业方案';
        this.imgUrl = 'static/images/industryPlan/industryPlanenterprise.jpg';
      } else if (index === 4) {
        this.subTitle = '医疗行业方案';
        this.imgUrl = 'static/images/industryPlan/industryPlanMedical.jpg';
      }
    },
  },
};
</script>

<style scoped>
.number {
  margin:20px 50px 45px 0px;
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
</style>
