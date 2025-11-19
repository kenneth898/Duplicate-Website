<template>
	<div>
		<PopUpCard />
	</div>

	<div class="TopBanner">
		<TopBanner />
	</div>

	<div class="main-content">
		<div class="LeftBanner col-sm-12 col-md-12 col-lg-4 col-xl-3">
			<LeftBanner />
		</div>
		<!-- Middle Blank Column -->
		<div class="Middle_Banner_Container col-sm-12 col-md-12 col-lg-4 col-xl-6">
			<div class="Middle_Inner_Container">

				<div class="site_tabs_container">
					<div class="site-tabs">
						<div v-for="(image, index) in images" :key="index" :id="'image-container-' + index"
							:class="['image-container', { selected: selectedIndex === index }]"
							@click="selectImage(index);">
							<img :src="selectedIndex === index ? image.selected : image.notSelected" :alt="image.alt">
						</div>
					</div>
				</div>

				<div class="MB_Img_Gallery">
					<div class="MB_Img" id="MB_Img">
						<div class="image-grid-container">
							<div class="image-wrapper" v-for="n in 45" :key="n">
								<a v-if="n <= 12" :href="link_output + 'winbox-signup'" rel="nofollow">
									<img class="MB_IMGs" :src="`/images/MB_${n}_Img.gif`" :alt="altTexts[n - 1]">
								</a>
								<img v-else :src="`/images/MB_${n}_Img.gif`" :alt="altTexts[n - 1]">
							</div>
						</div>
					</div>
				</div>

				<div class="footer-content">

					<a href="//www.dmca.com/Protection/Status.aspx?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
						title="DMCA.com Protection Status" class="dmca-badge" rel="nofollow"> <img class="DMCA-width"
							src="https://images.dmca.com/Badges/dmca_protected_sml_120h.png?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
							alt="DMCA.com Protection Status" />
					</a>
					<br>

					<div class="footer-detail">
						<p style="text-transform: none;">
							<a :href="link_output">
								<b style="font-size: 16px;">
									{{ $t('content.FP_Link_Word') }}
								</b>
							</a>
							|
							{{ $t('content.FP_Content') }}
						</p>

						<p style="text-transform: none;">
							<a :href="winboxofficial_link">
								<b style="font-size: 16px;">
									{{ $t('content.SP_Link_Word') }}
								</b>
							</a>
							|
							{{ $t('content.SP_F_Content') }}
						</p>

						<div class="Visit">
							<p>
								{{ $t('message.Visit') }}
								<a href="/">
									<strong>{{ $t('message.Click') }} {{ $t('message.Website') }}</strong>
								</a>
							</p>
						</div>
						<div class="license">
							<p style="font-weight: 500;">{{ $t('message.Game_Licence') }}</p>
							<img src="/images/Footer-License-Img.webp" alt="Game License">
						</div>
						<div class="game">
							{{ $t('Registered_TradeMark.Content_1') }}
						</div>
						<div class="payment">
							<p>{{ $t('message.Payment_Method') }}</p>
							<img src="/images/payment-list.webp" alt="payment-list">
						</div>
						<div class="Certidicate_Security">
							<p style="font-weight: 500;">{{ $t('message.Certidicate') }}</p>
							<img src="/images/Cert-list.webp" alt="certificate-list">
							<img src="/images/Cert-list_2.webp" alt="certificate-list-2">
						</div>
						<div class="Security">
							<p style="font-weight: 500;">{{ $t('message.Security') }}</p>
							<img src="/images/Security-list.webp" alt="Security List">
						</div>

						<div class="follow">
							<p style="font-weight: 500;">{{ $t('message.Follow_Us') }}</p>
							<a href="/"><img class="main-pulse" src="/images/facebook.webp" alt="facebook"></a>
							<a href="/"><img class="main-pulse" src="/images/telegram.webp" alt="telegram"></a>
							<a href="/"><img class="main-pulse" src="/images/instagram.webp" alt="instagram"></a>
							<a href="/"><img class="main-pulse" src="/images/youtube.webp" alt="youtube"></a>
							<a href="https://tinyurl.com/wbxseo1pWhatsapp" rel="nofollow"><img class="main-pulse"
									src="/images/whatsapp.webp" alt="whatsapp"></a>
							<a href="/"><img class="main-pulse" src="/images/mail.webp" alt="mail"></a>
						</div>
					</div>
					<div class="copyright">
						Copyright © PANAS777. All rights reserved.
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
import PopUpCard from '@/components/PopUpCard.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
	components: {
		LeftBanner,
		RightBanner,
		TopBanner,
		PopUpCard
	},
	data() {
		return {
			selectedItem: 0,
			selectedIndex: 0,
			altTexts: [
				"MEGAH5",
				"MEGAH5",
				"VPOWER",
				"MARIO",
				"POCKET GAME",
				"PUSSY888",
				"PUSSY888",
				"XE88",
				"SPADE GAMING",
				"JDB",
				"FACHAI",
				"DRAGON SOFT",
				"PLAYTECH",
				"PRAGMATIC",
				"JOKER",
				"SUNCITY",
				"ACE333",
				"KISS918",
				"MEGA888",
				"MEGA888 2",
				"LION KING",
				"EVOLUTION",
				"MICROGAMING",
				"CO9",
				"KA GAMING",
				"CREATIVE",
				"FUNKY GAMING",
				"NEXT SPIN",
				"PEGASUS",
				"LUCKY365",
				"KISS918 HTMLS",
				"UUSLOT",
				"ACEWIN",
				"RICH GAMING",
				"PLAY STAR",
				"HABANERO",
				"RICH88",
				"BTGAMING",
				"BIG POT",
				"5G GAMING",
				"ILOVEYOU",
				"LFC",
				"MONKEY KING",
				"AFB SLOT",
				"WE SLOT"
			],
			images: [
				{ notSelected: '/images/Slot_Img.webp', selected: '/images/Slot_Img.webp', alt: 'Slots' },
				{ notSelected: '/images/Evo888H5_Img.gif', selected: '/images/Evo888H5_Img.gif', alt: 'Evo888H5' },
				{ notSelected: '/images/JILI_Img.gif', selected: '/images/JILI_Img.gif', alt: 'JILI' },
				{ notSelected: '/images/Live_Img.webp', selected: '/images/Live_Img.webp', alt: 'Live' },
				{ notSelected: '/images/Sport_Img.webp', selected: '/images/Sport_Img.webp', alt: 'Sport' },
				{ notSelected: '/images/More_Img.webp', selected: '/images/More_Img.webp', alt: 'More Game' },
			],
			winboxofficial_link: '',
			stickyBarHeightWeb: 110,
			stickyBarHeightMobile: 110,
		};
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
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	methods: {
		async fetchLink() {
			try {
				const response_winbox77 = await axios.get("https://seo.mobileapplab.online/api/winbox?fields[0]=winbox77_my", {
					headers: {
						"Authorization": "Bearer " + "e2e085a70abb572e2ad3118cf0c3749024fc7342f873874a3cfc95f6520e4f561a3656113097ce0fea85186a91a42c56799bd153626b51f36c83bcf5c02e9996cc56106cb88a85ea4c4d58b4e1713dcc2c5006c666d09110e741081c80562cc29b6490fa8125037afdf61b783ebfd01e41152c0f61803009ad98eded56aa6568"
					}
				});
				this.winboxofficial_link = response_winbox77.data.data.attributes.winbox77_my;
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
		selectImage(index) {
			this.selectedIndex = index;
			this.handleRedirect(index);
		},
		handleRedirect(index) {
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
		},
	},
	mounted() {
		this.fetchLink();
		this.$store.dispatch('fetchLink_output');
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

	.RightBanner {
		order: 1;
	}

	.LeftBanner {
		order: 2;
		display: none;
	}

	.Middle_Banner_Container {
		order: 3;
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
	/* background-image: url('/images/Bg_Img.webp'); */
	background-color: black;
	background-attachment: fixed;
	background-size: cover;
	background-position: center;
}

@media (max-width: 768px) {
	.main-content {
		background-size: contain;
		background-repeat: no-repeat;
	}
}

.main-content::before {
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-image: url('/images/Bg_Img.webp');
	background-size: cover;
	background-position: center;
	z-index: -1;
	/* Ensure it stays behind other content */
}

@media (max-width: 768px) {
	.main-content::before {
		background-size: cover;
		background-repeat: no-repeat;
	}
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

.Middle_Inner_Container a {
	padding: 0;
	color: #ff0717;
}

.site_tabs_container {
	display: flex;
	justify-content: center;
}

.site-tabs {
	flex-wrap: wrap;
	margin: 10px 0;
	position: relative;
	display: flex;
	width: 100%;
	border-bottom: 1px solid white;
}

.image-container {
	width: calc(100% / 6);
	/* padding-bottom: 30px; */
	cursor: pointer;
	/* background: rgb(246, 246, 246); */
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 16px;
	padding: 4px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: black;
	text-align: center;
	font-size: 14px;
	font-weight: 700;

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
		/* width: 86px; */
		flex: 0 0 auto;
		padding-bottom: 0;
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

	.site-tabs::before {
		content: none;
	}
}

.image-grid-container {
	display: grid;
	gap: 10px;
	align-items: center;
}

@media (min-width: 1200px) {
	.image-grid-container {
		grid-template-columns: repeat(4, 1fr);
	}
}

@media (min-width: 768px) and (max-width: 1199px) {
	.image-grid-container {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (max-width: 767px) {
	.image-grid-container {
		grid-template-columns: repeat(4, 1fr);
	}
}

.MB_IMGs {
	height: 100%;
	width: auto;
	object-fit: cover;
}

.image-wrapper img {
	width: 100%;
	border-radius: 8px;
}

.image-wrapper p {
	border-radius: 30px;
	padding: 3px 0;
	margin-top: 8px;
	width: 100%;
	border: 0;
	/* background-image: linear-gradient(180deg, #a51aef 0%, #656ac8 100%); */
	background-color: black;
	background-size: 100% 100%;
	border: 0;
	text-align: center;
	color: white;
	font-size: 11px;
	margin-bottom: 10px;
}

.image-wrapper p {
	margin-bottom: 0;
}

.image_box {
	height: 90px;
}

.footer-content {
	margin-top: 30px;
	margin-bottom: 60px;
	background-color: rgba(255, 255, 255, 0.8);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 0 5px;
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
	/* color: #086cec; */
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
	font-size: 16px;
	margin-top: 30px;
	text-transform: uppercase;
}

.Visit p {
	font-size: 16px;
}

.Visit a {
	animation: blink 0.8s infinite;
}

@keyframes blink {
	50% {
		opacity: 0;
	}
}

.Visit strong {
	color: #ff0717;
}

.license {
	float: left;
	width: 30%;
}

.license img {
	width: 70%;
	margin-top: 10px;
	float: left;
	margin-right: 10px;
}

.game {
	text-align: left;
	font-size: 14px;
	float: left;
	width: 70%;
	margin-top: 80px;
	color: black;
}

.game img {
	margin-top: 10px;
	width: 100%;
}

@media screen and (max-width: 430px) {
	.game {
		font-size: 12px;
	}
}

.Certidicate_Security {
	text-align: left;
	font-size: 14px;
	float: left;
	width: 100%;
	/* margin-top: 50px; */
	color: black;
}

.Certidicate_Security img {
	margin-top: 10px;
	width: 100%;
}

.Security {
	text-align: left;
	font-size: 14px;
	float: left;
	width: 70%;
	/* margin-top: 50px; */
	color: black;
}

.Security img {
	margin-top: 10px;
	width: 100%;
}

.payment {
	font-weight: 500;
	float: left;
	width: 100%;
}

.payment img {
	width: 100%;
	display: inline-block;
	margin: 10px 0;
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

.TopBanner {
	position: sticky;
	top: 0;
	z-index: 3;
}
</style>
