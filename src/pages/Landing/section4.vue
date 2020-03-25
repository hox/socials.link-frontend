<template>
    <div class="section-4">
      <span id="plans"></span>
      <div class="section4-title">Made for Everyone</div>
      <div id="group-flex">
        <div class="group" id="teams">
          <div class="group-padding">
              <h2><span class="main teams-title">Teams</span><br><span class="secondary teams-title">$5 / Month</span></h2>
            <features text-color="white" color="white" v-bind:features="defaultFeatures"/>
            <features text-color="green" color="green" v-bind:features="teamsFeatures" id="team-features"/>
          </div>
        </div>
        <div class="group" id="individual">
          <div class="group-padding">
              <h2><span class="main">Individual</span><br><span class="secondary">Free</span></h2>
            <features text-color="black" color="black" v-bind:features="defaultFeatures" id="free-features"/>
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

.section4-title {
  margin: 80px 0 60px 0;
	font-size: 82px;
	font-weight: 800;
  font-family: "Roboto", sans-serif;
  text-align: left;
  width: 100%;
}

h2 {
  width: 100%;
  text-align: left;
}

.main {
	font-size: 50px;
	font-weight: 800;
  font-family: "Roboto", sans-serif;
  margin: 0;
}

.secondary {
	font-size: 25px;
	font-weight: 400;
  font-family: "Roboto", sans-serif;
  margin: 0;
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

@media (max-width: 1200px) {
  .section-4 {
    max-width: 80%;
  }

  #teams {
    margin: 0 0 30px 0;
  }

  .section4-title {
    font-size: 50px;
  }

  #group-flex {
    flex-direction: column;
  }

  .group {
    width: 100%;
  }

  .main {
    font-size: 40px;
  }

  .secondary {
    font-size: 18px;
  }
}

</style>
