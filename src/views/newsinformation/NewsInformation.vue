<template>
  <div class="newsInformation">
    <AHeader :isShow='isShow' :titleList="titleList" @getIndex="newIndex"></AHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '@/components/Footer';
import AHeader from '@/components/AHeader';

export default {
  name: 'newsInformation',
  data() {
    return {
      isShow: [true, false],
      titleList: '',
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    newIndex(index) {
      if (index === 0) {
        this.$router.push({
          path: '/mainIndex',
        });
      } else if (index === 1) {
        this.$router.push({
          path: '/newsinformation/NewsInformationIndex',
        });
      } else if (index === 2) {
        this.$router.push({
          path: '/newsinformation/industryDynamicsIndex',
        });
      } else if (index === 3) {
        this.$router.push({
          path: '/newsinformation/videoPlaybackIndex',
        });
      }
    },
    getData() {
      this.$http.get('/static/data/newsinformation.json').then((res) => {
        this.titleList = res.data.title;
        this.imgUrl = res.data.TopImg;
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      });
    },
  },
  components: {
    AHeader,
    myFooter,
  },
};
</script>

<style scoped>
.companyNewsTitle {
  margin: 10px 0px;
}
.companyNewsTitle img {
  width: 100%;
}
</style>

