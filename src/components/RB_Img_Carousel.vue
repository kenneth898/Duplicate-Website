<template>
	<div style="margin-bottom: 16px;" id="RB_carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#RB_carouselExampleIndicators" data-bs-slide-to="0"
				class="button active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#RB_carouselExampleIndicators" data-bs-slide-to="1" class="button"
				aria-label="Slide 2"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
				<img src="/images/welcome bonus.webp" class="d-block w-100" alt="Welcome Bonus">
				<!-- </a> -->
			</div>
			<div class="carousel-item">
				<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
				<img src="/images/Daily_bonus.webp" class="d-block w-100" alt="50% Daily Bonus">
				<!-- </a> -->
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
			// Manage current slide index
			currentIndex: 0,

		};
	},
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	mounted() {
		// Fetch dynamic link from Vuex store
		this.$store.dispatch('fetchLink_output');
	},
};
</script>

<style>
.carousel-indicators {
	margin-bottom: 2px;
}

.carousel-indicators .button {
	width: 10px;
	/* Custom width */
	height: 10px;
	/* Custom height */
	border-radius: 50%;
	/* Make them round if you want circular indicators */
	background-color: #ccc;
	/* Default color */
	border: none;
	/* Remove any border */
	transition: background-color 0.3s ease;
	/* Add smooth transitions */

}

.carousel-indicators .button.active {
	background-color: white;
	/* Active indicator color */
}

.carousel-indicators .button:hover {
	background-color: #666;
	/* Hover effect */
}
</style>
