<template>
  <div id="app">
    <div class="navbar">
      <div class="desktop">
        <div class="navbar-left">
          <a href="/" id="navbar-title">socials.link</a>
        </div>
        <div class="navbar-right">
          <a
            href="/about"
            :class="{'navbar-link-active': (window.location.pathname == '/about'), 'navbar-content-button': true}"
          >About Us</a>
          <a
            href="/terms"
            :class="{'navbar-link-active': (window.location.pathname == '/terms'), 'navbar-content-button': true}"
          >Terms / Privacy Policy</a>
          <span class="vl" />
          <a
            href="/register"
            :class="{'navbar-link-active': (window.location.pathname == '/register'), 'navbar-content-button': true}"
          >Register</a>
          <a
            href="/login"
            :class="{'navbar-link-active': (window.location.pathname == '/login'), 'navbar-content-button': true}"
          >Login</a>
        </div>
      </div>
      <div class="mobile"></div>
    </div>
    <router-view />
    <div class="footer" id="footer">
      <div class="footer-section footer-left">
        <span class="footer-title">Links</span>
        <hr />
        <span class="footer-bio">
          &bull;
          <a href="/login?type=register">Create an Account</a>
          <br />&bull;
          <a href="/login?type=login">Login</a>
          <br />&bull;
          <a href="/contact">Contact Us</a>
          <br />&bull;
          <a href="/contact">Request Verification</a>
        </span>
      </div>
      <div class="footer-section footer-center">
        <span class="footer-title">Legal</span>
        <hr />
        <span class="footer-bio">
          &bull;
          <a href="/tos">Terms Of Service</a>
          <br />&bull;
          <a href="/privacy_policy">Privacy Policy</a>
          <br />
          <br />Here at Socials Link we strive to keep your information safe and provide a great service at the same time.
        </span>
      </div>
      <div class="footer-section footer-right">
        <span class="footer-title">About Us</span>
        <hr />
        <span class="footer-bio">
          Socials Link was made with ❤ by
          <a href="/team">The Socials Link Team</a>.
          <br />
          <br />&bull;
          <a href="https://twitter.com/SocialsLink" target="_blank">Our Twitter</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import utils from "./assets/JS/main.js";
import log from "./assets/JS/logger.js";

log("log", "Route", window.location.pathname);

export default {
  name: "App",
  data() {
    return {
      window: window
    };
  },
  created() {
    /*window.addEventListener("load", () => {
      if (document.body.scrollHeight < window.innerHeight)
        document.getElementById("footer").classList = "footer-fixed footer";
      else
        document.getElementById("footer").classList = "footer-relative footer";
    });*/
  }
};
</script>

<style lang="scss">
@import "./assets/SCSS/root.scss";

router-view {
  order: 1;
}
</style>
