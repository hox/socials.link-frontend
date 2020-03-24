<template>
    <div class="section-2">
        <div>
            <div class="curve" ></div>
        </div>
        <div id="in-section2">
            <span id="about" />
            <span data-v-1352a988="" id="title" style="
    margin-top: 75px;
    margin-bottom: 25px;
    font-size: 3.75em;
    font-weight: 200;
    font-family: &quot;Roboto&quot;, sans-serif;
    max-width: 90%;
    color: #F5F5F5;
">have other stuff here and maybe change text features</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Section 2"
};
</script>

<style lang="scss" scoped>
@import "./../../assets/SCSS/root.scss";

.curve {
    background: url(../../assets/IMG/curve.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    width: 100%;
    left: -900px;
    margin-top: -24%;
    right: 0;
}

.section-2 {
  z-index: 150;
  position: relative;
}
</style>
