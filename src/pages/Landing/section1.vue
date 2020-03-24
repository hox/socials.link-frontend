<template>
    <div class="section-1">
      <div class="article">
        <span id="title">Welcome to your online business card</span>
        <div id="stats">

        </div>
        <br />
        <div class="articleimagegroup" id="imagecontainer">
          <img src="./../../assets/IMG/macos.svg" id="macos" />
        </div>
      </div>

      <div class="article" id="articlecontent">
        <div class="articlecontentlist">
          <!-- <div class="articlebox">
            <span class="articletitle">
              Easy to setup
            </span>
            <span class="articlebody">
              All it takes is minutes to setup your own page!
            </span>
          </div> -->
          <!-- <div class="articlebox">
            <span class="articletitle">Customization</span>
            <span class="articlebody">
              As soon as you create an account, you are greeted with different
              themes to chose from and how your webpage looks!
            </span>
          </div>
          <div class="articlebox">
            <span class="articletitle">Tailored for you</span>
            <span class="articlebody">
              Every connection you add, all gets put on one single page for easy
              sharing across devices and audiences.
            </span>
          </div>
          <div class="articlebox">
            <span class="articletitle">Completely free!</span>
            <span class="articlebody">
              Yes! Everything Socials Link has to offer is completely free with
              no plans or subscriptions!
            </span>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div class="section">
        <div>
            <div class="curve" ></div>
        </div>
        <div id="section-2">
            <span id="about" />
        </div>
    </div> -->
</template>

<script>
export default {
  name: "Section 1"
};
</script>

<style lang="scss" scoped>
@import "./../../assets/SCSS/root.scss";

.section-1 {
  order: 1;
  height: 100%;
  background-color: $background;

  /*
  *  The code blow is used for centering on the Y-axis without the use of position absolute. Good job eli!
  *  In case some idiot is reading this code, the Y-axis is the vertical one.
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* End of block */

  .article {
    width: 100%;

    span {
      display: inline-block;
    }

    #title {
      margin-top: 75px;
      margin-bottom: 25px;
      font-size: 3.75em;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      max-width: 90%;
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

    #articleimagegroup {
        position: relative;
        z-index: 120;
    }

    img {
      max-height: 50vh;
      width: auto;
      max-width: 90%;
      border-radius: 15px;
      //   margin: 50px 10px 50px 10px;
      -webkit-box-shadow: 0px 0px 30px -4px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 30px -4px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 30px -4px rgba(0, 0, 0, 0.75);
      // border: 1px solid $background;
      pointer-events: none;
      z-index: 120;
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

  @media (max-width: 951px) {
    #ios {
      display: none;
    }
  }
  
  @media (max-height: 745px) {
   #macos {
       display: none;
    } 
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
