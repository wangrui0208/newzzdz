<template>
    <div class="container">
      <div class="Hyperlink">
        <div v-show="preDetail">
          <router-link :to="url+(index-1)">上一篇:{{preTitle}}</router-link>
        </div>
        <div  v-show="lastDetail">
          <router-link  :to="url+(index+1)">下一篇:{{lastTitle}}</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HyperLink',
  props: {
    obj: Object,
    index: Number,
    url: String,
  },
  data() {
    return {
      preDetail: true,
      lastDetail: true,
      preUrl: '',
      lastUrl: '',
      preTitle: '',
      lastTitle: '',
    };
  },
  watch: {
    obj(res) {
      const i1 = this.index - 1;
      if (this.index === 0) {
        this.preDetail = false;
      } else {
        this.preUrl = this.url + i1;
        const data1 = res.data[i1];
        this.preTitle = data1.title;
      }
      const i2 = this.index + 1;
      if (i2 === res.data.length) {
        this.lastDetail = false;
      } else {
        this.lastUrl = this.url + i2;
        const data2 = res.data[i2];
        this.lastTitle = data2.title;
      }
    },
  },
  methods: {},
};
</script>

<style  scoped>
  /* 上一篇  下一篇 */
  .Hyperlink div:nth-child(1) {
    margin-top:20px;
    margin-bottom:10px;
  }
  .Hyperlink div a {
    color:#666;
    font-size: 14px;
  }
</style>
