<template>
	<div class="section-3">
			<div id="testimonials">
				<div class="testimonial-box">
					<img class="testimonial-image" src="./../../assets/IMG/twomad.png">
					<span class="testimonial-name">Twomad</span>
					<span class="testimonial-desc">"Whatever the man himself has to say..."</span>
				</div>
				<div v-for="(item, i) in this.testimonials" v-bind:key="i" class="testimonial-box">
					
				</div>
			</div>
  </div>
</template>

<script>
export default {
  name: "section3",
  data: () => {
		return {
			offSet: 0,
			testimonials: [
				{
					"image":"url",
					"name": "name",
					"testimonial": "good"
				},
				{
					"image":"url",
					"name": "name",
					"testimonial": "good"
				}
			]
		}
  }
};
</script>

<style lang="scss">
@import "@/assets/SCSS/root.scss";

.section-3 {
	max-width: 50%;
	margin: auto;
	font-size: 16px;
}

#testimonials {
	margin-top: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.testimonial-box {
	width: 325px;
	height: 350px;
	margin: 0 20px 0 0;
	border-radius: 15px;
	background: rgb(235, 235, 235);
	// box-shadow: 1px 1px 16px #111213;
	// margin-right: 60px;
	// margin-left: 60px;
	text-align: center;
	position: relative;
	// TODO: Fix these z-index numbers
  z-index: 155;
  transition: 0.2s;
}

.testimonial-box:hover {
  transform: translate(-4px,-4px);
  box-shadow: 2px 2px 1px $text;
}

@media (max-width: 900px) {
  .section-3 {
    max-width: 80%;
  }

  #testimonials {
    display: block;
    margin-top: 0;
  }

  .testimonial-box {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .testimonial-box:hover {
    transform: translate(0px,0px);
    box-shadow: 0px 0px 0px rgba(0,0,0,0);
  }
}

.testimonial-image {
	border-radius: 64px;
	width: 96px;
	margin-top: 50px;
}

.testimonial-name {
	margin-top: 24px;
	display: block;
	font-family: "Roboto", sans-serif;
	font-weight: 600;
}

.testimonial-desc {
	margin: 0 auto;
	margin-top: 42px;
	display: block;
	font-family: "Roboto Slab", serif;
	font-weight: 400;
	max-width: 85%;
}

.testimonial-quote {
  font-size: 20px;
  font-family: "Times New Roman", sans-serif;
}
</style>
