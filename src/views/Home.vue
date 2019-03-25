<template>
  <div class="mainContainer">
    <myHeader></myHeader>
    <bannerPage></bannerPage>
    <characteristicZZ></characteristicZZ>
    <companyProfile></companyProfile>
    <partialApplication></partialApplication>
    <newsInformation></newsInformation>
    <corporateCulture></corporateCulture>
    <myFooter></myFooter>
    <tabBar></tabBar>
    <br>
    <br>
  </div>
</template>

<script>
import myHeader from '@/components/Header';
import bannerPage from '@/components/Banner';
import characteristicZZ from '@/components/CharacteristicZZ';
import companyProfile from '@/components/CompanyProfile';
import partialApplication from '@/components/PartialApplication';
import corporateCulture from '@/components/CorporateCulture';
import newsInformation from '@/components/NewsInformation';
import myFooter from '@/components/Footer';
import tabBar from '@/components/Tabbar';

export default {
  name: 'MainIndex',
  components: {
    myHeader,
    bannerPage,
    characteristicZZ,
    companyProfile,
    partialApplication,
    corporateCulture,
    myFooter,
    newsInformation,
    tabBar,
  },
};
</script>

