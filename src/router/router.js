import Vue from 'vue';
import Router from 'vue-router';
import MainIndex from '@/views/Home';
import position from '@/views/Position';
import contactUs from '@/views/ContactUs';
import personalCenter from '@/views/PersonalCenter';
import EnterZZ from '@/views/enterzz/EnterZZ';
import NewsInformation from '@/views/newsinformation/NewsInformation';
import companyNewsIndex from '@/views/newsinformation/CompanyNewsIndex';
import NewsDetail from '@/views/newsinformation/NewsDetail';
import industryDynamicsIndex from '@/views/newsinformation/IndustryDynamicsIndex';
import IndustryDynamicsDetail from '@/views/newsinformation/IndustryDynamicsDetail';
import videoPlaybackIndex from '@/views/newsinformation/VideoPlaybackIndex';
import videoPlaybackDetail from '@/views/newsinformation/VideoPlaybackDetail';
import companyProducts from '@/views/companyProducts/CompanyProducts';
import cloudComputing from '@/views/companyProducts/CloudComputing';
import softwareProduct from '@/views/companyProducts/SoftwareProduct';
import industryPlan from '@/views/industryPlan/IndustryPlan';
import industryPlanIndex from '@/views/industryPlan/IndustryPlanIndex';
import industryPlanTwoIndex from '@/views/industryPlan/IndustryPlanTwoIndex';
import corporateCulture from '@/views/corporateCulture/CorporateCulture';
import partyBuilding from '@/views/partyBuilding/PartyBuilding';
import talentRecruitment from '@/views/talentRecruitment/TalentRecruitment';

Vue.use(Router);

export default new Router({
  // 路由模式：hash(默认)，history模式
  // mode: 'history',
  // 修改路由高亮样式，默认值为'router-link-active'
  // linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: '/mainIndex',
  },
  {
    path: '/mainIndex',
    name: 'mainIndex',
    component: MainIndex,
    meta: {
      index: 'mainIndex',
    },
  },
  {
    path: '/contactUs',
    component: contactUs,
    name: 'contactUs',
    meta: {
      index: 'contactUs',
    },
  },
  {
    path: '/position',
    name: 'position',
    component: position,
    meta: {
      index: 'position',
    },
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: personalCenter,
    meta: {
      index: 'personalCenter',
    },
  },
  {
    path: '/partyBuilding',
    component: partyBuilding,
    name: 'partyBuilding',
  },
  {
    path: '/corporateCulture',
    component: corporateCulture,
  },
  {
    path: '/industryPlan',
    component: industryPlan,
    children: [{
      path: '/',
      component: industryPlanIndex,
    },
    {
      path: '/industryPlan/industryPlanIndex',
      component: industryPlanIndex,
    },
    {
      path: '/industryPlan/industryPlanTwoIndex',
      name: 'industryPlanTwoIndex',
      component: industryPlanTwoIndex,
    }],
  },
  {
    path: '/enterZZ',
    name: 'enterZZ',
    component: EnterZZ,
    meta: {
      index: 'enterZZ',
    },
  },
  {
    path: '/newsinformation',
    component: NewsInformation,
    children: [{
      path: '/',
      component: companyNewsIndex,
    },
    {
      path: '/newsinformation/NewsInformationIndex',
      component: companyNewsIndex,
    },
    {
      path: '/newsinformation/NewsDetail/:index',
      name: 'NewsDetail',
      component: NewsDetail,
    },
    {
      path: '/newsinformation/industryDynamicsIndex',
      component: industryDynamicsIndex,
    },
    {
      path: '/newsinformation/IndustryDynamicsDetail/:index',
      component: IndustryDynamicsDetail,
    },
    {
      path: '/newsinformation/videoPlaybackIndex',
      component: videoPlaybackIndex,
    },
    {
      path: '/newsinformation/videoPlaybackDetail/:index',
      component: videoPlaybackDetail,
    },
    ],
  },
  {
    path: '/companyProducts',
    component: companyProducts,
    children: [{
      path: '/',
      component: softwareProduct,
    },
    {
      path: '/companyProducts/softwareProduct',
      component: softwareProduct,
    },
    {
      path: '/companyProducts/cloudComputing',
      component: cloudComputing,
    }],
  },
  {
    path: '/talentRecruitment',
    component: talentRecruitment,
  }],
  /* eslint-disable*/
  scrollBehavior(to, from, savedPosition) { // 页面切换时滚到顶部
    return {x: 0, y: 0};
  },
});
