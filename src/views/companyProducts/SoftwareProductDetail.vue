<template>
  <div class="softwareProductOne">
    <div class="OneTitle">
      <span class="OneNumber">01</span>
      <img src="static/images/companyProducts/OneTitle.png">
      <span class="Title">{{obj.title}}</span>
    </div>
    <hr class="hrStyle">
    <div class="productOverview">
      <div class="subHeading">
        <div class="leftImg">
          <img src="static/images/companyProducts/left.png">
        </div>
        <div class="centerTitle">
          产品概述
        </div>
        <div class="rightImg">
          <img src="static/images/companyProducts/right.png">
        </div>
      </div>
      <div class="overviewContent">
        <div
          class="ContentP"
          v-html="obj.ContentP"
        ></div>
        <div class="ContentImg">
          <img
            src="obj.ContentImg"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="brandAdvantage">
      <div class="subHeading">
        <div class="leftImg">
          <img src="static/images/companyProducts/left.png">
        </div>
        <div class="centerTitle">
          品牌优势
        </div>
        <div class="rightImg">
          <img src="static/images/companyProducts/right.png">
        </div>
      </div>
      <div class="brandContent">
        <div
          class="ContentP brandPOne"
          v-html="obj.brandPOne"
        ></div>
        <div
          class="ContentImg brandPImgOne"
          v-html="obj.brandPImgOne"
        >
        </div>
        <div
          class="ContentP brandPTwo"
          v-html="obj.brandPTwo"
        ></div>
        <div
          class="ContentImg brandPImgTwo"
          v-html="obj.branchPImgTwo"
        >
        </div>
      </div>
    </div>
    <div class="successfulCase">
      <div class="subHeading">
        <div class="leftImg">
          <img src="static/images/companyProducts/left.png">
        </div>
        <div class="centerTitle">成功案例</div>
        <div class="rightImg">
          <img src="static/images/companyProducts/right.png">
        </div>
      </div>
      <div class="caseContent">
        <div
          class="ContentP caseP"
          v-html="obj.caseP"
        ></div>
        <div
          class="ContentImg caseImg"
          v-html="obj.caseImg"
        ></div>
        <div
          class="ContentP caseTwoP"
          v-html="obj.caseTwoP"
        ></div>
        <div
          class="ContentImg caseImg"
          v-html="obj.caseImg2"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softwareProductOne',
  props: { obj: Object },
};
</script>

<style lang="scss" scoped>
.softwareProductOne {
  margin-top: 5px;
}
/* title的设置 */
.OneTitle {
  position: relative;
  margin-left: 15px;
}
/* 数字01设置 */
.OneNumber {
  font-size: 20px;
  color: #1d87e2;
  position: absolute;
  top: 10px;
  font-family: "Microsoft yahei";
}

/* title 的img设置 */
.OneTitle img {
  width: 22%;
  margin-left: 15px;
}
/* title的title设置 */
.OneTitle .Title {
  font-size: 22px;
  color: #1d87e2;
  position: absolute;
  top: 10px;
  right: 45px;
}
.hrStyle {
  height: 2px;
  border: none;
  width: 95%;
  border-top: 1px solid #1d87e2;
  margin-top: -7px;
}

/* 分标题设置 */
.subHeading {
  text-align: center;
  margin-top: 40px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 30px;
  font-family: 微软雅黑;
  position: relative;
}
.subHeading div {
  display: inline-block;
}
.subHeading div.leftImg {
  position: absolute;
  left: 12%;
}
.subHeading div.rightImg {
  position: absolute;
  right: 12%;
}
.subHeading div.centerTitle {
  font-size: 18px;
}

/* 段落p设置 */
.ContentP {
  text-indent: 2em;
  margin: 10px;
  color: #666;
  font-size: 14px;
  height: 165px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 25px;
}
.ContentImg {
  text-align: center;
}

/* 牌品优势 */
.brandPOne {
  height: 140px;
}
.brandPTwo {
  height: 28%;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* 图片1设置 */
.brandPImgOne {
  display: inline-block;
}
.brandPImgOne img {
  width: 45%;
}
.brandPImgOne img:nth-child(1) {
  margin-right: 10px;
}

/* 图片2设置 */
.brandPImgTwo {
  margin-bottom: 30px;
}

.brandPImgTwo div {
  display: inline-block;
  width: 46%;
}
.brandPImgTwo div:nth-child(1) {
  width: 90%;
}
.brandPImgTwo div img {
  width: 60%;
}
.brandPImgTwo div:nth-child(1) img {
  width: 90%;
}

.brandPImgTwo div:nth-child(1) > p {
  margin-top: -5px;
}
.brandPImgTwo div > p {
  margin-top: 15px;
}

/* 成功案例 */
.successfulCase {
  margin-bottom: 30px;
}
.caseP {
  height: 100%;
  line-height: 1.8em;
  margin-bottom: 25px;
}
.caseTwoP {
  height: 100%;
  line-height: 24px;
  margin-bottom: 25px;
}
.caseImg img {
  width: 90%;
  margin-bottom: 15px;
}
.caseP b,
.caseTwoP b {
  color: #000;
}
</style>
