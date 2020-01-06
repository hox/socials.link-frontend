<template>
  <div style="height: 100%;">
    <div class="section-1">
      <div class="article">
        <span id="title">socials.link</span>
        <span id="slogan">Your online business card.</span>
      </div>
    </div>
    <div class="section-2">
      <span>sec 2</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style lang="scss" scoped>
@import "./../assets/SCSS/root.scss";

.section-1 {
  order: 1;
  height: 100%;
  background-color: $background;

  // The code blow is used for centering on the Y-axis without the use of position absolute. Good job eli!
  // In case some idiot is reading this code, the Y-axis is the vertical one.
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  // END OF CODE

  .article {
    span {
      display: block;
    }

    #title {
      font-size: 60px;
    }

    #slogan {
      font-size: 20px;
    }
  }
}

.section-2 {
  background-color: blue;
  height: 30vh;
}
</style>
