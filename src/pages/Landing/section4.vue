<template>
    <div class="section-4">
      <span id="plans"></span>
      <h1>Made for Everyone</h1>
      <div id="group-flex">
        <div class="group" id="teams">
          <div class="group-padding">
            <div class="title-flex">
              <h2 class="group-title"><span class="main teams-title">Teams</span><span class="secondary teams-title">    $5 / Month</span></h2>
            </div>
            <features text-color="white" color="white" v-bind:features="defaultFeatures"/>
            <features text-color="green" color="green" v-bind:features="teamsFeatures"/>
          </div>
        </div>
        <div class="group" id="individual">
          <div class="group-padding">
            <div class="title-flex">
              <h2 class="group-title"><span class="main">Individual</span><span class="secondary">    Free</span></h2>
            </div>
            <features text-color="black" color="black" v-bind:features="defaultFeatures"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import features from './section4/features.vue'

export default {
  name: "section4",
  components: {
    features
  },
  data: () => {
        return {
            defaultFeatures: [
              "Unlimited Connections",
              "Pinned Connections",
              "Thumbnails",
              "Custom Icons",
              "Customizable Themes"
            ],
            teamsFeatures: [
              "Custom Branding",
              "Custom Meta Data",
              "Multi-user Access"
            ]
        }
  }
};
</script>

<style lang="scss">
@import "@/assets/SCSS/root.scss";

#plans {
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
}

.section-4 {
  max-width: 60%;
  margin: auto;
  font-size: 16px;
  z-index: 2;
  position: relative;
}

h1 {
  margin: 80px 0 60px 0;
	font-size: 3.2vw;
	font-weight: 800;
  font-family: "Roboto", sans-serif;
  text-align: left;
  width: 100%;
}

.group-title {
  width: 100%;
  text-align: justify;
  margin: 0;
}

.main {
	font-size: 2.5vw;
	font-weight: 800;
  font-family: "Roboto", sans-serif;
  max-width: 100%;
  margin: 0;
}

.secondary {
	font-size: 1.5vw;
	font-weight: 400;
  font-family: "Roboto", sans-serif;
  max-width: 100%;
  margin: 0;
  white-space: pre-wrap;
}

.title-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 30px 0;
}

.teams-title {
  color: #fff;
}

#group-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.group {
  width: 26vw;
  border-radius: 15px;
}

.group-padding {
  margin: 40px;
}

#teams {
  background:#000;
}

#individual {
  background: #EFEFEF;
}
</style>
