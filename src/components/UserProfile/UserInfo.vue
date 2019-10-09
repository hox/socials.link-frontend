<template>
  <div id="user-profile-info">
    <div class="desktop"></div>
    <div class="mobile">
      <img :src="user.avatarUrl" />
      <span id="display-name">{{user.displayname}}</span>
      <hr />
    </div>
  </div>
</template>

<style lang="scss">
#user-profile-info {
  margin-top: 50px;

  .mobile {
    text-align: center;

    img {
      height: 200px;
      width: auto;
      border-radius: 50%;
    }

    #display-name {
      font-size: 30px;
      display: block;
    }
  }
}
</style>

<script>
export default {
  name: "UserInfo",
  props: {
    user: Object
  }
};
</script>