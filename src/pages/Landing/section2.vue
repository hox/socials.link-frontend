<template>
  <div class="section-2">
    <div>
      <div id="curve"></div>
    </div>
    <div id="in-section2">
      <span id="about" />
      
      <div id="parent-div">
        <div class="section2-title">Easily Link to<br>Dozens of Providers</div>
          <div class="providerContainer">
            <img class="logo" src="@/assets/logos/TikTok.png" data-aos="fade-up" data-aos-delay="50">
            <img class="logo" src="@/assets/logos/YouTube.png" data-aos="fade-up" data-aos-delay="100">
            <img class="logo" src="@/assets/logos/Instagram.png" data-aos="fade-up" data-aos-delay="150">
            <img class="logo" src="@/assets/logos/Twitter.svg" data-aos="fade-up" data-aos-delay="200">
            <img class="logo" src="@/assets/logos/Twitch.svg" data-aos="fade-up" data-aos-delay="250">
          </div>
          <div class="providerContainer">
            <img class="logo" src="@/assets/logos/Discord.svg" data-aos="fade-up" data-aos-delay="300">
            <img class="logo" src="@/assets/logos/Facebook.png" data-aos="fade-up" data-aos-delay="350">
            <img class="logo" src="@/assets/logos/Patreon.png" data-aos="fade-up" data-aos-delay="400">
            <img class="logo" src="@/assets/logos/Spotify.png" data-aos="fade-up" data-aos-delay="450">
            <img class="logo" src="@/assets/logos/GitHub.png" data-aos="fade-up" data-aos-delay="500">
          </div>
          <!-- <div class="signup-input" data-aos="fade-in" data-aos-delay="550">
              <form>
                <label id="username-label">soci.al/</label>
                <input type="text" id="username" placeholder="username">
              </form>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section2"
};
</script>

<style lang="scss">
@import "@/assets/SCSS/root.scss";

.logo {
  height: 60px;
//   width: 60px;
pointer-events: none;
}

#parent-div {
  max-width: 60%;
  margin: auto;
  font-size: 16px;
}

.providerContainer {
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  margin-top: 6px;
}


.signup-input {
  width: 400px;
  margin: auto;
  border-radius: 25px;
  // border: 1px solid black;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  background-color: #DEDEDE;
}

#username-label {
  font-size: 24px;
  text-align: right;
	white-space: nowrap;
}

#username {
  height: 50px;
  width: 300px;
  border: none;
  outline:0;
  background: 0;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
  fdont-size: 24px;
  padding: 0;
}

#curve {
  background: url(../../assets/IMG/curve.svg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 1200px;
  width: 100%;
  z-index: 1;
  position: absolute;
  margin-top: -33%;
  transition: margin-top 100ms;
}

.section-2 {
  width: 100%;
  min-width: 100%;
}

#in-section2 {
  z-index: 160;
  position: relative;
}

.section2-title {
  margin: 0 0 110px 0;
  font-size: 3.2vw;
  font-weight: 800;
  font-family: "Roboto", serif;
  max-width: 100%;
  text-align: right;
}
</style>
