<template>
  <div class="footer">
    <div class="inner-content">
      <div id="footer-flex">
      <div class="footer-column">
        <span class="column-title">
          Service
        </span>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
      </div>
      <div class="footer-column">
        <span class="column-title">
          Resources
        </span>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Status</a>
        </li>
        <li>
          <a href="#">Branding</a>
        </li>
      </div>
    </div>
    <a href="#">
      <img src="@/assets/IMG/standard_logo.png" id="stand_logo">
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-section"
};
</script>

<style lang="scss">
@import "@/assets/SCSS/root.scss";

.footer-column {
  text-align: left;
  width: 40%;
}

.footer {
  width: 100%;
  height: 180px;
  margin: auto;
  z-index: 3;
  position: relative;
  background: #EFEFEF;
  margin-top: 160px;
}

.inner-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  padding-top: 32px;
}

#footer-flex {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}

.column-title {
  font-weight: 700;
}

a {
  text-decoration: none;
  color: #717273;
  transition: 0.2s;
}

a:hover {
  color: $text;
}

li {
  list-style-type: none;
}

#stand_logo {
  height: 35px;
  width: auto;
  pointer-events: none;
}
</style>
