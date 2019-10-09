<template>
  <div id="user-profile">
    <UserInfo :user="user" />
    <IntegrationsBox :user="user" />
  </div>
</template>

<style lang="scss">
</style>

<script>
import IntegrationsBox from "./../components/UserProfile/IntegrationsBox.vue";
import UserInfo from "./../components/UserProfile/UserInfo.vue";

export default {
  name: "Profile",
  components: {
    UserInfo,
    IntegrationsBox
  },
  data() {
    return {
      user: {
        username: "eli",
        displayname: "eli",
        aliases: [],
        description: "",
        location: "",
        createdAt: Date.now() - 34000,
        avatarUrl: "https://fakeimg.pl/512/222",
        tags: [],
        integrations: [
          {
            type: "youtube",
            title: "YouTube",
            name: "Eli",
            tag: "1k subscribers",
            link: "https://youtube.com"
          }
        ]
      }
    };
  }
};
</script>