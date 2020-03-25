<template>
  <div class="section-1">
    <div class="article">
      <div id="stats"></div>
      <br />
    <div id="parent-div">
      <span id="title">Welcome to Your<br />Online Business Card</span>
      <img src="./../../assets/IMG/macos.png" id="macos" />
      </div>
    </div>

    <div class="article" id="articlecontent">
      <div class="articlecontentlist"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section1"
};
</script>

<style lang="scss">
@import "@/assets/SCSS/root.scss";



#parent-div {
    max-width: 60%;
    margin: auto;
    font-size: 16px;
  }

.section-1 {
  order: 1;
  height: 100%;
  background-color: $background;

  .article {
    width: 100%;

    span {
      display: inline-block;
    }

    #title {
      margin-top: 140px;
      margin-bottom: 90px;
      font-size: 3.2vw;
      font-weight: 800;
      font-family: "Roboto", sans-serif;
      float: left;
      text-align: left;
      max-width: 100%;
    }

    #registerbtntext {
      font-weight: 700;
      font-family: "Roboto", sans-serif;
    }

    #registerbtn {
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      margin: 10px 10px 10px 10px;
    }

    #macos {
      width: 100%;
      border-radius: 15px;
      box-shadow: 0px 0px 30px -4px rgba(0, 0, 0, 0.75);
      pointer-events: none;
      z-index: -200;
    }
  }

  #readmore {
    position: absolute;
    bottom: 5px;

    animation: upndown 3s infinite;

    span {
      font-size: 20px;
      font-weight: 500;
      color: $text;
    }

    i {
      color: $text;
    }
  }

  #readmore:hover {
    cursor: pointer;
  }

  #articlecontent {
    width: 100%;
  }

  .articlecontentlist {
    display: flex;
    justify-content: space-between;
    padding: 0 20%;
    text-align: left;
    flex-grow: 1;

    .articlebox {
      margin: 10px;
      max-width: 300px;
      margin-bottom: 20px;
    }

    .articletitle {
      font-weight: 700;
      font-size: 20px;
    }

    span {
      display: block;
    }
  }
}
</style>
