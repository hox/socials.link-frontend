<template>
  <div id="app">
    <div class="navbarcontainer">
      <div class="navbar" id="navbar">
        <div class="navbar-left">
          <a href="/" id="navbar-title">socials.link</a>
          <img src="./assets/IMG/standard_logo.png" id="logo" />
        </div>
        <div class="navbar-right">
          <a href="/#plans" class="navbar-content-button" id="plans-button">Plans</a>
          <a href="/#about" class="navbar-content-button" id="about-button">About Us</a>
          <a href="/#features" class="navbar-content-button" id="features-button">Features</a>
          <span class="vl" />
          <a
            href="/login"
            :class="{
              'navbar-content-button': true
            }"
            >Login</a
          >
					<a
            href="/signup"
            :class="{
              'navbar-content-button': true
            }"
            >Signup</a
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// import utils from "./assets/JS/main.js";
import log from "./assets/JS/logger.js";
import AOS from "aos";

log("log", "Route", window.location.pathname);

export default {
  name: "App",
  created: function() {
    window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
        document.getElementById("navbar").classList.remove("navbar-bold");
      } else {
        document.getElementById("navbar").classList.add("navbar-bold");
      }
      //The ScrollY range where the parallax animation occurs
      const range = 1000;
      //The maximum the wave moves relative to the % of the parent div
      const maxAdjustment = 7;
      let adjustment;
      if (window.scrollY > range) {
        adjustment = maxAdjustment;
      } else {
        adjustment = window.scrollY / (range / maxAdjustment);
      }
      document.getElementById("curve").style.marginTop = `${-33 - adjustment}%`;
    });
  },
  destroyed: function() {
    window.removeEventListener("scroll", () => {});
  },
  mounted: function(){
    AOS.init()
  }
};
</script>

<style lang="scss">
@import "@/assets/SCSS/root.scss";

.navbar-bold {
  border-radius: 0 0 5px 5px !important;
  margin-top: 0px !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);
  background: #fafafa !important;
}

.navbarcontainer {
  width: 100%;
}

.navbar {
  display: inline-block;
  width: 70%;
  padding: 14px 0;
  order: 0;
  transition: 0.2s;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 7px;
  padding-bottom: 15px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
	z-index: 1000;

  a {
    text-decoration: none;
  }

  .vl {
    border-left: 2px solid $darkbackground;
    border-radius: 15%;
    max-width: 3px;
    height: 40px;
    margin: 0 5px;
  }

  #navbar-title {
    font-weight: 800;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    color: #1e1b18;
  }

  #logo {
    display: none;
    width: 18px;
    margin-top: 2px;
  }

  .navbar-left {
    float: left;
    padding-left: 12px;
  }

  .navbar-right {
    float: right;
    padding-right: 12px;
  }

  @media (max-width: 735px) {
    #navbar-title {
      display: none;
    }

    #logo {
      display: flex;
    }

    #plans-button {
      display: none;
    }

    #features-button {
      display: none;
    }
  }

  .navbar-content-button {
    padding: 10px;
    transition: 0.2s;
    text-decoration: none;
    color: #1e1b18;
  }

  .navbar-content-button:hover {
    cursor: pointer;
  }
}

@media (max-width: 735px) {
  .navbar {
    width: 90%;
  }
}
</style>
