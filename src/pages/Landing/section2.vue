<template>
  <div class="section-2">
    <div>
      <div class="curve" id="curve"></div>
    </div>
    <div id="in-section2">
      <span id="about" />
    </div>
  </div>
</template>

<script>
export default {
  name: "section2"
};
</script>

<style lang="scss">
@import "./../../assets/SCSS/root.scss";

.curve {
  background: url(../../assets/IMG/curve.svg);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 1000px;
  width: 100%;
  margin-top: -34%;
  transition: margin-top 100ms;
}

.section-2 {
  z-index: 150;
  position: relative;
}
</style>
