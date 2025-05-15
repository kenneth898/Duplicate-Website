<template>
	<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active"></li>
			<li data-bs-target="#carouselExampleInterval" data-bs-slide-to="1"></li>
			<li data-bs-target="#carouselExampleInterval" data-bs-slide-to="2"></li>
		</ol>

		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="4000">
				<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img width="100%" src="/images/Brand_Carousel_Img_1.webp" class="d-block w-100" alt="Bonus 388">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img width="100%" src="/images/Brand_Carousel_Img_2.webp" class="d-block w-100" alt="Bonus 50">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img width="100%" src="/images/Brand_Carousel_Img_3.webp" class="d-block w-100" alt="Bonus 50">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			status: null,
			response: [],
			link_atascasinobet: '',
		}
	},
	computed: {
		...mapGetters(['link_ataskasino', 'error']),
	},
	mounted() {
		// Initialize the carousel
		const carouselElement = document.querySelector('#carouselExampleInterval');

		// Event listener for updating indicators on slide change
		carouselElement.addEventListener('slide.bs.carousel', (event) => {
			const indicators = document.querySelectorAll('.carousel-indicators li');
			indicators.forEach((indicator, index) => {
				if (index === event.to) {
					indicator.classList.add('active');
				} else {
					indicator.classList.remove('active');
				}
			});
		});
		this.$store.dispatch('fetchLink_ataskasino');
	},
};
</script>

<style>
.carousel-indicators {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.carousel-indicators li {
	width: 10px !important;
	height: 10px !important;
	border-radius: 50% !important;
	background-color: #ccc !important;
	cursor: pointer;
}

.carousel-indicators .active {
	width: 12px;
	height: 12px;
	background-color: #fff !important;
}
</style>
