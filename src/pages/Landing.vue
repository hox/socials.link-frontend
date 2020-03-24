<template>
  <div>
    <section1></section1>
    <section2></section2>
  </div>
</template>

<script>
import section1 from './Landing/section1.vue'
import section2 from './Landing/section2.vue'

export default {
  name: "Landing",
  components: {
      section1,
      section2
  }
};
</script>