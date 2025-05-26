<template>
	<div v-if="showAd" class="modal fade show d-block" id="adModal" tabindex="-1" :aria-hidden="!showAd"
		aria-labelledby="adModalLabel" @click.self="closeModal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content position-relative">
				<div class="modal-body p-0 text-center">
					<div class="Top_Content">
						<b style="color: #ff0000;">
							{{ $t('PopUp.1_Line') }}
						</b>
						<br>
						<div>
							<b style="color: #ff9900;">{{ $t('PopUp.2_Line') }}</b>
							<b style="color: #ff0000;"> G66 Group Partnership </b>
							<b style="color: #ff9900;">{{ $t('PopUp.3_Line') }}</b>
						</div>
						<b style="color: #ff9900;">{{ $t('PopUp.4_Line') }}</b>

						<br>

						<b style="color: #ff9900;">{{ $t('PopUp.5_Line') }}</b>
						<b style="color: #ff0000;"> G66 Group Partnership </b>
						<br><br>
						<img src="/images/Popup_Img.webp" alt="notice">
						<button type="button" class="OK_button" @click="closeModal">
							OK
						</button>
					</div>

					<button type="button" class="btn-close position-absolute top-0 end-0" @click="closeModal"
						aria-label="Close"></button>
				</div>
			</div>
		</div>

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
	background: #C8D8EF;
	border: 1px solid #fff;
	padding: 20px 16px;
}

.modal-body img {
	width: 100%;
	height: auto;
}

.Top_Content {
	text-align: center;
}

.Top_Content b,
span {
	font-size: 16px;
}

@media screen and (max-width: 430px) {
	.img-fluid {
		max-width: 75%;
	}
}

.OK_button {
	border-left-color: rgb(53, 179, 242);
	border-right-color: rgb(53, 179, 242);
	background-color: #35B3F2;
	border: 0;
	color: white;
	margin: .3125em;
	padding: .625em 2em;
	font-weight: 500;
	border-radius: .25em;
	margin-top: 30px;
}
</style>
