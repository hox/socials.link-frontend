<template>
  <div class="container">
      <section1></section1>
      <section2></section2>
      <!-- <section3></section3> -->
      <section4></section4>
      <footer-section></footer-section>
  </div>
</template>

<script>
import section1 from './Landing/section1.vue'
import section2 from './Landing/section2.vue'
import section3 from './Landing/section3.vue'
import section4 from './Landing/section4.vue'
import footerSection from './Landing/footerSection.vue'

export default {
  name: "Landing",
  components: {
      section1,
      section2,
      section3,
      section4,
      footerSection
  }
};
</script>

<style lang="scss">
.container {
  // margin: 0 auto;
  // width: 100%;
}
</style>