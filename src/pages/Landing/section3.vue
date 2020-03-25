<template>
	<div class="section-3">
			<div id="testimonies">
				<div class="testimony-box">
					<img class="testimony-image" src="./../../assets/IMG/twomad.png">
					<span class="testimony-name">Twomad</span>
					<span class="testimony-desc">"Whatever the man himself has to say..."</span>
				</div>
				<div v-for="(item, i) in this.testimonies" v-bind:key="i" class="testimony-box">
					
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
			testimonies: [
				{
					"image":"url",
					"name": "name",
					"testimony": "good"
				},
				{
					"image":"url",
					"name": "name",
					"testimony": "good"
				}
			]
		}
  }
};
</script>

<style lang="scss">
@import "@/assets/SCSS/root.scss";

.section-3 {
	max-width: 60%;
	margin: auto;
	font-size: 16px;
}

#testimonies {
	margin-top: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.testimony-box {
	width: 250px;
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
}

.testimony-image {
	border-radius: 64px;
	width: 96px;
	margin-top: 50px;
}

.testimony-name {
	margin-top: 24px;
	display: block;
	font-family: "Roboto", sans-serif;
	font-weight: 600;
}

.testimony-desc {
	margin: 0 auto;
	margin-top: 64px;
	display: block;
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	max-width: 85%;
}
</style>
