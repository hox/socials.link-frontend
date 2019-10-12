<template>
  <div id="page-landing">
    <span class="title">socials.link</span>
    <span id="comingsoon">Your online business card.</span>
    <br />
    <span id="register">
      <router-link id="register_button" to="/register">Register Now!</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style lang="scss">
@import "./../assets/SCSS/root.scss";

#page-landing {
  /*position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: bouncein 0.7s;*/
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: translateY(-50px);
  img {
    height: 120px;
    width: auto;
  }

  hr {
    width: 300px;
  }

  #comingsoon {
    font-size: 30px;
    display: block;
  }

  .title {
    font-size: 80px;
    font-weight: 800;
  }

  #register {
    #register_button {
      background-color: $primary;
      padding: 15px;
      border-radius: 2px;
      font-family: "Quantico";
      font-weight: 700;
      text-decoration: none;
      color: $text;
    }
  }
}

@keyframes bouncein {
  0% {
    transform: translateX(-50%) translateY(-60%);
  }
  100% {
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>