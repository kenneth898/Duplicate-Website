<template>
	<div v-if="showAd" class="modal fade show d-block" id="adModal" tabindex="-1" :aria-hidden="!showAd"
		aria-labelledby="adModalLabel" @click.self="closeModal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content position-relative">
				<div class="modal-body p-0 text-center">
					<a :href="link_output + 'winbox-signup'" rel="nofollow">
						<img src="/images/Popup_Img.webp" class="img-fluid" alt="notice">
					</a>
				</div>
			</div>
		</div>
		<button type="button" class="btn-close position-absolute top-0 end-0 m-3" @click="closeModal"
			aria-label="Close"></button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			showAd: true
		};
	},
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	methods: {
		closeModal() {
			this.showAd = false;
			document.body.style.overflow = 'auto';
		}
	},
	mounted() {
		document.body.style.overflow = 'hidden';
		this.$store.dispatch('fetchLink_output');
		this.$nextTick(() => {
			document.querySelector('#adModal .btn-close').focus(); // Set focus on close button when modal opens
		});
	}
};
</script>

<style scoped>
#adModal .btn-close {
	z-index: 1055;
	color: white;
	/* Make the close button icon white */
	background-color: white;
	/* Ensure the button background is white */
	opacity: 1;
	/* Make sure the button is fully opaque */
}

.adModal .btn-close:hover {
	color: white;
	/* Keep the icon white on hover */
	background-color: white;
	/* Keep the background white on hover */
	opacity: 1;
	/* Ensure it remains opaque */
}

.modal-content {
	background: transparent;
	border: none;
}

.modal-body img {
	width: 100%;
	height: auto;
}

@media screen and (max-width: 430px) {
	.img-fluid {
		max-width: 75%;
	}
}
</style>
