<template>
	<!-- <div>
		<PopUpCard />
	</div> -->

	<div class="topbanner">
		<TopBanner />
	</div>

	<div class="main-content">
		<div class="LeftBanner col-sm-12 col-md-12 col-lg-4 col-xl-3">
			<LeftBanner />
		</div>
		<!-- Middle Blank Column -->
		<div class="Middle_Banner_Container col-sm-12 col-md-12 col-lg-4 col-xl-6">
			<div class="Middle_Inner_Container">
				<div style="display: flex; justify-content: center;">
					<div class="site-tabs">
						<div v-for="(image, index) in images" :key="index" :id="'image-container-' + index"
							:class="['image-container', { selected: selectedIndex === index }]"
							@click="handleSelection(index)">
							<img :src="selectedIndex === index ? image.selected : image.notSelected"
								:alt="'Image ' + (index + 1)" />
						</div>
					</div>
				</div>


				<div class="MB_Img_Gallery">
					<div class="MB_Img" id="MB_Img">
						<div class="image-grid-container">
							<div class="image-wrapper" v-for="n in 34" :key="n">
								<a v-if="n <= 12" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
									<img :src="`/images/MB_${n}_Img.webp`" :alt="altTexts[n - 1]">
								</a>
								<img v-else :src="`/images/MB_${n}_Img.webp`" :alt="altTexts[n - 1]">

								<div v-if="n <= 12">
									<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
										<p>{{ $t('message.Play') }}</p>
									</a>
								</div>
								<div v-else>
									<p>{{ $t('message.Play') }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br>
				<div class="Content_Container">
					<h1>{{ $t('Btm_Content.H1_Header') }}</h1>
					<p>{{ $t('Btm_Content.H1_Content_1') }} <strong>{{ $t('Btm_Content.H1_Content_2') }}</strong> {{
						$t('Btm_Content.H1_Content_3') }} </p>
					<p>{{ $t('Btm_Content.H1_Content_4') }} <strong>{{ $t('Btm_Content.H1_Content_2') }}</strong> {{
						$t('Btm_Content.H1_Content_5') }} </p>
					<br>
					<h2>{{ $t('Btm_Content.First_H2_Header') }}</h2>
					<p>{{ $t('Btm_Content.First_H2_Content_1') }} <strong>{{ $t('Btm_Content.First_H2_Content_2')
					}}</strong> {{
								$t('Btm_Content.First_H2_Content_3') }} </p>
					<br>
					<h2>{{ $t('Btm_Content.Second_H2_Header') }}</h2>
					<p>{{ $t('Btm_Content.Second_H2_Content_1') }} <strong>{{ $t('Btm_Content.Second_H2_Content_2')
					}}</strong> {{
								$t('Btm_Content.Second_H2_Content_3') }} </p>
					<ul>
						<li>
							{{ $t('Btm_Content.Second_H2_First_Li_Header') }}
							<p>{{ $t('Btm_Content.Second_H2_First_Li_Content_1') }} <strong>{{
								$t('Btm_Content.Second_H2_First_Li_Content_2')
							}}</strong> {{
										$t('Btm_Content.Second_H2_First_Li_Content_3') }} </p>
						</li>
						<li>
							{{ $t('Btm_Content.Second_H2_Second_Li_Header') }}
							<p>{{ $t('Btm_Content.Second_H2_Second_Li_Content') }}</p>
						</li>
						<li>
							{{ $t('Btm_Content.Second_H2_Third_Li_Header') }}
							<p>{{ $t('Btm_Content.Second_H2_Third_Li_Content_1') }} <strong>{{
								$t('Btm_Content.Second_H2_Third_Li_Content_2')
							}}</strong> {{
										$t('Btm_Content.Second_H2_Third_Li_Content_3') }} </p>
						</li>
					</ul>
					<p>{{ $t('Btm_Content.Second_H2_Btm_Content_1') }} <strong>{{
						$t('Btm_Content.Second_H2_Btm_Content_2')
					}}</strong> {{
								$t('Btm_Content.Second_H2_Btm_Content_3') }} </p>
					<br>
					<h2>{{ $t('Btm_Content.Third_H2_Header') }}</h2>
					<p>{{ $t('Btm_Content.Third_H2_Content_1') }} <strong>{{
						$t('Btm_Content.Third_H2_Content_2')
					}}</strong> {{
								$t('Btm_Content.Third_H2_Content_3') }} </p>
					<ol>
						<li>
							<p>{{ $t('Btm_Content.Third_H2_First_Li_Content_1') }} <strong>{{
								$t('Btm_Content.Third_H2_First_Li_Content_2')
							}}</strong> {{
										$t('Btm_Content.Third_H2_First_Li_Content_3') }} </p>
						</li>
						<li>
							<p>{{ $t('Btm_Content.Third_H2_Second_Li_Content') }}</p>
						</li>
						<li>
							<p>{{ $t('Btm_Content.Third_H2_Third_Li_Content_1') }} <strong>{{
								$t('Btm_Content.Third_H2_Third_Li_Content_2')
							}}</strong> {{
										$t('Btm_Content.Third_H2_Third_Li_Content_3') }} </p>
						</li>
						<li>
							<p>{{ $t('Btm_Content.Third_H2_Fourth_Li_Content_1') }} <strong>{{
								$t('Btm_Content.Third_H2_Fourth_Li_Content_2')
							}}</strong> {{
										$t('Btm_Content.Third_H2_Fourth_Li_Content_3') }} </p>
						</li>
					</ol>
					<p>{{ $t('Btm_Content.Btm_Content') }}</p>


				</div>
				<a href="//www.dmca.com/Protection/Status.aspx?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
					title="DMCA.com Protection Status" class="dmca-badge" rel="nofollow"> <img class="DMCA-width"
						src="https://images.dmca.com/Badges/dmca_protected_sml_120h.png?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
						alt="DMCA.com Protection Status" />
				</a>
				<div class="footer-content">
					<p class="b-700">
						{{ $t('content.Learn_More') }}
					</p>
					<p>
						<a :href="link_atascasinobet"><strong>{{ $t('content.FP_Link_Word') }}</strong></a>
						|
						{{
							$t('content.FP_Content') }}
					</p>
					<p>
						<a :href="link_ataskasino"><strong>{{ $t('content.SP_Link_Word') }}</strong></a> |
						{{
							$t('content.SP_F_Content') }}
					</p>
					<p>
						{{ $t('thirdFooter.1') }}
						<a :href="link_ataskasino"><strong> {{ $t('thirdFooter.2') }}</strong></a>
						{{ $t('thirdFooter.3') }}
					</p>
					<div class="footer-detail">
						<div class="license">
							<p>{{ $t('content.Game_License') }}</p>

							<img src="/images/Footer-License-Img.webp" alt="Game License">

						</div>
						<div class="game">
							<strong>{{ $t('content.Game_License_Content_1') }} </strong> {{
								$t('content.Game_License_Content_2') }}
							<strong>{{ $t('content.Game_License_Content_3') }} </strong> {{
								$t('content.Game_License_Content_4') }}
							<strong>{{ $t('content.Game_License_Content_5') }} </strong> {{
								$t('content.Game_License_Content_6') }}
						</div>
						<div class="payment">
							<p>{{ $t('content.Payment_Methods') }}</p>
							<img src="/images/payment-list.webp" alt="payment-list">
						</div>
						<div class="certification">
							<p>{{ $t('content.Certificate_N_Security') }}</p>
							<img src="/images/Cert-list.webp" alt="certificate-list">
						</div>
						<div class="follow">
							<p>{{ $t('content.Follow_Us') }}</p>
							<a href="/"><img class="main-pulse" src="/images/facebook.webp" alt="facebook"></a>
							<a href="https://t.me/atas77channel" rel="nofollow"><img class="main-pulse"
									src="/images/telegram.webp" alt="telegram"></a>
							<a href="/"><img class="main-pulse" src="/images/instagram.webp" alt="instagram"></a>
							<a href="/"><img class="main-pulse" src="/images/youtube.webp" alt="youtube"></a>
							<a href="https://rebrand.ly/ATASxSEO2P" rel="nofollow"><img class="main-pulse"
									src="/images/whatsapp.webp" alt="whatsapp"></a>
							<a href="/"><img class=" main-pulse" src="/images/mail.webp" alt="mail"></a>
						</div>
					</div>
					<div class="copyright">
						{{ $t('message.copy_right', { year: new Date().getFullYear() }) }}
					</div>
				</div>
			</div>
		</div>

		<!-- Right Banner Column -->
		<div class="RightBanner col-sm-12 col-md-12 col-lg-4 col-xl-3">
			<RightBanner />
		</div>

	</div>
</template>

<script>
import { useI18n } from 'vue-i18n'; // Add this import
import LeftBanner from '/src/components/Left_Banner.vue';
import RightBanner from '/src/components/Right_Banner.vue';
import TopBanner from '/src/components/Top_Banner.vue';
// import PopUpCard from '@/components/PopUpCard.vue';
import BackToTop from '@/components/BackToTop.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
	components: {
		LeftBanner,
		RightBanner,
		TopBanner,
		// PopUpCard,
		BackToTop,
	},
	data() {
		return {
			selectedItem: 0,
			selectedIndex: 0,
			stickyBarHeightWeb: 105,
			stickyBarHeightMobile: 75,
			altTexts: [
				"Tanzania King",
				"Candy Party",
				"Legend Slot Onimaru",
				"Legend Slot Musashi",
				"Durian King",
				"Thai Lucky",
				"Color Alchemy",
				"Trade Wars",
				"Gems Rush",
				"Gods Of Olympus",
				"Beauty Contest",
				"Dragon Jewels",
				"Golden Temple",
				"LIFE",
				"Magic Box",
				"Mr Fortune",
				"Meow Meow",
				"Lucky 7",
				"Where's My Monkey",
				"Samurai Wars",
				"Happy Road",
				"Feed the Zombie",
				"Burm the Office",
				"All You Can Eat",
				"TVW",
				"Strange Encounter",
				"S.O.S",
				"On Crap",
				"Pon Pon",
				"Lullababy",
				"Talent Night",
				"Spell Craft",
				"Steam Punk 100",
				"Thai Street Food"
			],
			images: [
				{ notSelected: '/images/ClotPlayF_NotS.webp', selected: '/images/ClotPlayF_S.webp' },
				{ notSelected: '/images/ClotPlay_NotS.webp', selected: '/images/ClotPlay_S.webp' },
				{ notSelected: '/images/JILI_NotS.webp', selected: '/images/JILI_S.webp' },
				{ notSelected: '/images/BPG_NotS.webp', selected: '/images/BPG_S.webp' },
				{ notSelected: '/images/SPINIX_NotS.webp', selected: '/images/SPINIX_S.webp' },
				{ notSelected: '/images/RICHG_NotS.webp', selected: '/images/RICHG_S.webp' },
				{ notSelected: '/images/AP_NotS.webp', selected: '/images/AP_S.webp' },
				{ notSelected: '/images/Joker_NotS.webp', selected: '/images/Joker_S.webp' },
				{ notSelected: '/images/Pegasus_NotS.webp', selected: '/images/Pegasus_S.webp' },
				{ notSelected: '/images/CO9G_NotS.webp', selected: '/images/CO9G_NotS.webp' },
				{ notSelected: '/images/Slot_NotS.webp', selected: '/images/Slot_S.webp' },
				{ notSelected: '/images/Live_NotS.webp', selected: '/images/Live_S.webp' },
				{ notSelected: '/images/Lottery_NotS.webp', selected: '/images/Lottery_S.webp' },
				{ notSelected: '/images/Sports_NotS.webp', selected: '/images/Sports_S.webp' },
			],
			link_atascasinobet: '',
		};
	},
	computed: {
		gameLicenseContent() {
			return this.$t('content.Game_License_Content');
		},
		...mapGetters(['link_ataskasino', 'error']),
	},
	setup() {
		const { locale } = useI18n();
		const changeLanguage = (lang) => {
			locale.value = lang;
		};
		return {
			changeLanguage
		};
	},
	methods: {
		async fetchLink() {
			try {
				const response = await axios.get("https://seo.mobileapplab.online/api/atas?fields[0]=atascasinobet_com", {
					headers: {
						"Authorization": "Bearer " + "1c4db3188ab2e9a077928920d9cc8d3322d15f9751bc2054a5cb70008df79cf3e3a4dd005a75a1f2db40eb953292ee10ef699693e96e9d77a98439f438ee6a6e6805a8a955e992f082b9e6118a4345e1ed18438ff9789edf9ed1dd58af45ee6669a7519a1291746959ff45bc2054b7f408b5da5ea8cd04d588a2704b7e218021"
					}
				});

				// this.status = response.status;
				// console.log(this.status)
				// this.response = response;
				// console.log(this.response)
				this.link_atascasinobet = response.data.data.attributes.atascasinobet_com;
				// console.log(this.link_atascasinobet)
			} catch (error) {
				console.log(error)
			}
		},
		selectItem(event, index) {
			this.selectedItem = index;
			const clickedElementId = event.target.id;
			this.scrollToGame(clickedElementId);

			// Remove the active class from all items (assuming you have a way to select them)
			const items = document.querySelectorAll('.Top_Btn'); // Replace '.item' with your actual item selector
			items.forEach(item => {
				item.classList.remove('active');
			});

			// Add the active class to the clicked item
			event.target.classList.add('active');
		},
		scrollToGame(elementId) {
			let sectionId = '';
			if (elementId === 'Slot-Game') {
				sectionId = 'MB_Img';
			} else {
				sectionId = 'Game';
			}

			const sectionElement = document.getElementById(sectionId);
			if (sectionElement) {
				sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		},
		handleSelection(index) {
			this.selectImage(index);
			this.handleRedirect(index);
		},
		selectImage(index) {
			this.selectedIndex = index;
		},
		handleRedirect(index) {
			// Check the index to determine the redirection or scrolling
			if (index === 0) {
				this.scrollToElement('.MB_Img_Gallery');
			} else {
				this.scrollToElement('.footer-content');
			}
		},
		scrollToElement(selector) {
			const element = document.querySelector(selector);
			if (element) {
				const isMobile = window.innerWidth <= 768;
				const stickyBarHeight = isMobile ? this.stickyBarHeightMobile : this.stickyBarHeightWeb;
				const elementPosition = element.getBoundingClientRect().top + window.scrollY;
				const offsetPosition = elementPosition - stickyBarHeight;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			}
		}
	},
	mounted() {
		this.fetchLink();
		this.$store.dispatch('fetchLink_ataskasino');
	}
}
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.Mobile_Middle_Banner {
		display: flex !important;
		flex-direction: column;
		order: 1;
	}

	.Middle_Banner_Container {
		order: 2;
	}

	.main-content {
		flex-direction: column;
	}

	.MM_Small_Text_Container p {
		font-size: 18px !important;
		color: rgb(2, 47, 138);
	}
}

@media screen and (max-width: 431px) {
	.MM_Small_Text_Container p {
		font-size: 16px !important;
	}
}

.main-content {
	display: flex;
	width: 100%;
	background-image: url('/images/Starbucks88_BG_Img.webp');
	background-attachment: fixed;
	background-size: cover;
	background-position: top;
}

.Mobile_Middle_Banner {
	width: 100%;
	background: rgba(0, 0, 0, .3);
	padding: 0 15px 30px;
}

.Mobile_Middle_Banner img {
	width: 100%;
	margin-bottom: 15px;
}

.MM_Login_Register_Btn_Container img {
	width: 50%;
	padding: 0 1px;

}

.MM_Small_Text_Container {
	width: 50%;
}

.RB_Cash_Btn_Container {
	width: 50%;
}

.MM_Small_Text_Container p {
	font-size: 12px;
}

.MM_Small_Btn_Container {
	display: flex;
	flex-wrap: wrap;
}

.MM_Small_Btn_Container img {
	width: 50%;
	margin-bottom: 2px
}

.Middle_Banner_Container {
	padding: 0px 15px 30px;
}

.MB_Img_Gallery {
	margin: 10px 0px;
}

.MB_Img {
	display: flex;
	flex-wrap: wrap;

}

.MB_Img img {
	/* padding: 0 15px 30px; */
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 12px;
	border: 1px solid #fff;
}

@media screen and (max-width: 576px) {
	.MB_Img img {
		width: 33%;
	}
}

.Middle_Inner_Container a {
	padding: 0;
	color: green;
}

.google-map-link {
	font-style: italic;
	color: #f0d843 !important;
	font-weight: bolder;
	font-size: 12px;
	overflow-wrap: anywhere;
}

.map-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 20px 0;
}

.platform {
	color: #f0d843 !important;
}

.site-tabs {
	flex-wrap: wrap;
	margin: 10px 0;
	position: relative;
	display: flex;
}

.image-container {
	width: calc(100% / 14);
	cursor: pointer;
}

.image-container img {
	width: 100%;
}

@media (max-width: 768px) {
	.site-tabs {
		flex-wrap: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	.image-container {
		width: 86px;
		/* Fixed width for mobile view */
		flex: 0 0 auto;
		/* Prevent shrinking */
	}

	.site-tabs::-webkit-scrollbar {
		display: none;
		/* Hide scrollbar on WebKit browsers */
	}

	.site-tabs {
		-ms-overflow-style: none;
		/* Hide scrollbar on IE and Edge */
		scrollbar-width: none;
		/* Hide scrollbar on Firefox */
	}
}

.image-grid-container {
	display: grid;
	gap: 10px;
}

@media (min-width: 1200px) {
	.image-grid-container {
		grid-template-columns: repeat(6, 1fr);
	}
}

@media (min-width: 768px) and (max-width: 1199px) {
	.image-grid-container {
		grid-template-columns: repeat(4, 1fr);
	}
}

@media (max-width: 767px) {
	.image-grid-container {
		grid-template-columns: repeat(3, 1fr);
	}
}

.image-wrapper img {
	width: 100%;
}

.image-wrapper p {
	border-radius: 30px;
	padding: 3px 0;
	margin-top: 8px;
	width: 100%;
	border: 0;
	background-color: #4ba614;
	background-image: linear-gradient(to bottom, #746526, #C3B32A);
	box-shadow: 0 1px 3px rgb(0, 0, 0, 0.5);
	text-align: center;
	color: white;
	font-size: 11px;
	margin-bottom: 10px;
}

.image-wrapper p {
	margin-bottom: 0;
}

.footer-content {
	margin-top: 30px;
	margin-bottom: 60px;
}

.footer-content h1,
h2,
h3,
li,
p {
	color: black;
}

.footer-content h1 {
	font-size: 25px;
	font-weight: 700;
}

.footer-content h2 {
	font-size: 23px;
	font-weight: 700;
}

.footer-content h3 {
	font-size: 18px;
	font-weight: 700;
}

.footer-content p,
li {
	font-size: 16px;
}

.footer-content a {
	font-size: 16px;
	font-weight: 700;
}


.footer-content strong {
	font-weight: 700;
	color: green;
}

.image-wrapper a {
	text-decoration: none;
}

.DMCA-width {
	width: 150px;
}

.b-700 {
	font-weight: 700;
}

.footer-detail {
	width: 90%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}

.footer-detail p {
	color: black;
	font-size: 12px;
	margin-top: 30px;
	text-transform: uppercase;
}

.license {
	float: left;
	width: 30%;
}

.license img {
	width: 80%;
	margin-top: 10px;
	float: left;
	margin-right: 10px;
}

.game {
	text-align: left;
	font-size: 14px;
	float: left;
	width: 70%;
	margin-top: 50px;
	color: black;
}

@media screen and (max-width: 430px) {
	.game {
		font-size: 8px;
	}
}

.payment {
	float: left;
	width: 100%;
}

.payment img {
	width: 100%;
	display: inline-block;
	margin-bottom: 10px;
}

.certification {
	float: left;
	width: 100%;
}

.certification img {
	width: 100%;
	display: inline-block;
	margin-bottom: 10px;
}

.follow {
	float: left;
	width: 100%;
}

.follow a img {
	width: 32px;
	height: 32px;
	float: left;
	margin-right: 10px;
	margin-top: 10px;
}

@keyframes pulse {
	0% {
		transform: scale(0.8);
	}

	100% {
		transform: scale(1);
	}
}

.main-pulse {
	animation: pulse 1s infinite ease-in-out alternate;
}

.payment P,
.certification p,
.follow p {
	margin-bottom: 0;
}

.copyright {
	text-align: center;
	font-size: 12px;
	padding: 50px 0;
	color: black;
}

body {
	position: relative;
}

.topbanner {
	position: sticky;
	top: 0;
	z-index: 1;
}

.Content_Container h1 {
	font-size: 25px;
}

.Content_Container h2 {
	font-size: 23px;
}

.Content_Container h3 {
	font-size: 18px;
}

.Content_Container p {
	font-size: 16px;
}

.Content_Container strong {
	color: green;
}
</style>
