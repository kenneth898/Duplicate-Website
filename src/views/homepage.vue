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
				<div style="display: flex; justify-content: center;">
					<div class="site-tabs">
						<div v-for="(image, index) in images" :key="index" :id="'image-container-' + index"
							:class="['image-container', { selected: selectedIndex === index }]"
							@click="selectImage(index); handleRedirect(index)">
							<img :src="selectedIndex === index ? image.selected : image.notSelected" :alt="image.alt">
						</div>
					</div>
				</div>

				<div class="MB_Img_Gallery">
					<div class="MB_Img" id="MB_Img">
						<div class="image-grid-container">
							<div class="image-wrapper" v-for="n in 35" :key="n">
								<a v-if="n <= 12" :href="link_winbox + 'winbox-register'" rel="nofollow">
									<img :src="`/images/MB_${n}_Img.webp`" :alt="altTexts[n - 1]">
								</a>
								<img v-else :src="`/images/MB_${n}_Img.webp`" :alt="altTexts[n - 1]">

								<div v-if="n <= 12">
									<a :href="link_winbox + 'winbox-register'" rel="nofollow">
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

				<div class="footer-content">
					<h1>{{ $t('Main_Content.H1_Header') }}</h1>
					<p> {{ $t('Main_Content.H1_Content_1') }}
						<strong>{{ $t('Main_Content.H1_Content_2') }} </strong>
						{{ $t('Main_Content.H1_Content_3') }}
						<strong>{{ $t('Main_Content.H1_Content_4') }} </strong>
						{{ $t('Main_Content.H1_Content_5') }}
					</p>
					<p>
						{{ $t('Main_Content.H1_Content_6') }}
						<strong>{{ $t('Main_Content.H1_Content_2') }} </strong>
						{{ $t('Main_Content.H1_Content_7') }}
					</p>
					<br>
					<h2>{{ $t('Main_Content.H2_1_Header') }}</h2>
					<p> {{ $t('Main_Content.H2_1_Content_1') }}
						<strong>{{ $t('Main_Content.H2_1_Content_2') }}</strong>
						{{ $t('Main_Content.H2_1_Content_3') }}
					</p>
					<br>
					<h2>{{ $t('Main_Content.H2_2_Header') }}</h2>
					<p> <strong>{{ $t('Main_Content.H2_2_Content_1') }}</strong>
						{{ $t('Main_Content.H2_2_Content_2') }}</p>
					<ul>
						<li>
							<strong>{{ $t('Main_Content.H2_2_Li_1_Header') }}</strong>
							<p>
								{{ $t('Main_Content.H2_2_Li_1_Content_1') }}
								<strong>{{ $t('Main_Content.H2_2_Li_1_Content_2') }}</strong>
								{{ $t('Main_Content.H2_2_Li_1_Content_3') }}
							</p>
						</li>
						<li>
							<strong>{{ $t('Main_Content.H2_2_Li_2_Header') }}</strong>
							<p>
								{{ $t('Main_Content.H2_2_Li_2_Content_1') }}
								<strong>{{ $t('Main_Content.H2_2_Li_2_Content_2') }}</strong>
								{{ $t('Main_Content.H2_2_Li_2_Content_3') }}
							</p>
						</li>
						<li>
							<strong>{{ $t('Main_Content.H2_2_Li_3_Header') }}</strong>
							<p>
								{{ $t('Main_Content.H2_2_Li_3_Content') }}
							</p>
						</li>
					</ul>
					<p>
						{{ $t('Main_Content.H2_2_Middle_Content_1') }}
						<strong>{{ $t('Main_Content.H2_2_Middle_Content_2') }}</strong>
						{{ $t('Main_Content.H2_2_Middle_Content_3') }}
					</p>
					<ul>
						<li>
							<strong>{{ $t('Main_Content.H2_2_Li_4_Header') }}</strong>
							<p>
								{{ $t('Main_Content.H2_2_Li_4_Content') }}
							</p>
						</li>
						<li>
							<strong>{{ $t('Main_Content.H2_2_Li_5_Header') }}</strong>
							<p>
								{{ $t('Main_Content.H2_2_Li_5_Content') }}
							</p>
						</li>
						<li>
							<strong>{{ $t('Main_Content.H2_2_Li_6_Header') }}</strong>
							<p>
								{{ $t('Main_Content.H2_2_Li_6_Content') }}
							</p>
						</li>
					</ul>
					<p>
						{{ $t('Main_Content.H2_2_Btm_Content_1') }}
						<strong>{{ $t('Main_Content.H2_2_Btm_Content_2') }}</strong>
						{{ $t('Main_Content.H2_2_Btm_Content_3') }}
					</p>
					<br>
					<h2>{{ $t('Main_Content.H3_Header') }}</h2>
					<p>{{ $t('Main_Content.H3_Content_1') }}</p>
					<p>
						{{ $t('Main_Content.H3_Content_2') }}
						<strong>{{ $t('Main_Content.H3_Content_3') }}</strong>
						{{ $t('Main_Content.H3_Content_4') }}
					</p>

					<br>
					<a href="//www.dmca.com/Protection/Status.aspx?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
						title="DMCA.com Protection Status" class="dmca-badge" rel="nofollow"> <img class="DMCA-width"
							src="https://images.dmca.com/Badges/dmca_protected_sml_120h.png?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
							alt="DMCA.com Protection Status" />
					</a>
					<br>
					<br>
					<p class="b-700">
						{{ $t('Main_Content.Btm_Header') }}
					</p>
					<p>
						{{ $t('Main_Content.Btm_Content_1') }} |
						<a :href="link_winbox"><strong>{{ $t('Main_Content.Btm_Content_2') }}</strong></a> |
						{{ $t('Main_Content.Btm_Content_3') }}
					</p>
					<p>
						{{ $t('Main_Content.Btm_Content_4') }}
						|
						<a :href="winbox77_link">
							<strong>
								{{ $t('Main_Content.Btm_Content_5') }}
							</strong>
						</a>
						|
						{{ $t('Main_Content.Btm_Content_6', { year: new Date().getFullYear() }) }}
					</p>
					<div class="footer-detail">
						<div class="Visit">
							<p>
								{{ $t('message.Visit') }}
								<a href="/">
									<strong>{{ $t('message.Click') }} {{ $t('message.Website') }}</strong>
								</a>
							</p>
						</div>
						<div class="license">
							<p>{{ $t('message.Game_Licence') }}</p>
							<img src="/images/Footer-License-Img.webp" alt="Game License">
						</div>
						<div class="game">
							<strong>{{ $t('Registered_TradeMark.Content_1') }}</strong>
							{{ $t('Registered_TradeMark.Content_2') }}
							<strong>{{ $t('Registered_TradeMark.Content_3') }}</strong>
							{{ $t('Registered_TradeMark.Content_4') }}
							<strong>{{ $t('Registered_TradeMark.Content_5') }}</strong>
							{{ $t('Registered_TradeMark.Content_6') }}
						</div>
						<div class="payment">
							<p>{{ $t('message.Payment_Method') }}</p>
							<img src="/images/payment-list.webp" alt="payment-list">
						</div>
						<div class="certification">
							<p>{{ $t('message.Certidicate_Security') }}</p>
							<img src="/images/Cert-list.webp" alt="certificate-list">
						</div>
						<div class="follow">
							<p>{{ $t('message.Follow_Us') }}</p>
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
import PopUpCard from '@/components/PopUpCard.vue';
import BackToTop from '@/components/BackToTop.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
	components: {
		LeftBanner,
		RightBanner,
		TopBanner,
		PopUpCard,
		BackToTop,
	},
	data() {
		return {
			selectedItem: 0,
			selectedIndex: 0,
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
				"Thai Street Food",
				"Madness Buffalo"
			],
			images: [
				{ notSelected: '/images/CPF_NotS.webp', selected: '/images/CPF_S.webp', alt: 'Clot Play Free' },
				{ notSelected: '/images/CP_NotS.webp', selected: '/images/CP_S.webp', alt: 'Clot Play' },
				{ notSelected: '/images/JILI_NotS.webp', selected: '/images/JILI_S.webp', alt: 'JILI' },
				{ notSelected: '/images/BT_NotS.webp', selected: '/images/BT_S.webp', alt: 'BT Gaming' },
				{ notSelected: '/images/BP_NotS.webp', selected: '/images/BP_S.webp', alt: 'BP Gaming' },
				{ notSelected: '/images/Rich_NotS.webp', selected: '/images/Rich_S.webp', alt: 'Rich Gaming' },
				{ notSelected: '/images/NS_NotS.webp', selected: '/images/NS_S.webp', alt: 'Next Spin' },
				{ notSelected: '/images/PP_NotS.webp', selected: '/images/PP_S.webp', alt: 'Pragmatic Play' },
				{ notSelected: '/images/AW_NotS.webp', selected: '/images/AW_S.webp', alt: 'Ace Win' },
				{ notSelected: '/images/Joker_NotS.webp', selected: '/images/Joker_S.webp', alt: 'Joker' },
				{ notSelected: '/images/KA_NotS.webp', selected: '/images/KA_S.webp', alt: 'KA Gaming' },
				{ notSelected: '/images/Slot_NotS.webp', selected: '/images/Slot_S.webp', alt: 'Slot' },
				{ notSelected: '/images/Live_NotS.webp', selected: '/images/Live_S.webp', alt: 'Live' },
				{ notSelected: '/images/Sports_NotS.webp', selected: '/images/Sports_S.webp', alt: 'Sports' },
			],
			winbox77_link: '',
			stickyBarHeightWeb: 105,
			stickyBarHeightMobile: 75,
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
		...mapGetters(['link_winbox', 'error']),
	},
	methods: {
		async fetchLink() {
			try {
				const response_winbox77 = await axios.get("https://seo.mobileapplab.online/api/winbox?fields[0]=winbox77_my", {
					headers: {
						"Authorization": "Bearer " + "e2e085a70abb572e2ad3118cf0c3749024fc7342f873874a3cfc95f6520e4f561a3656113097ce0fea85186a91a42c56799bd153626b51f36c83bcf5c02e9996cc56106cb88a85ea4c4d58b4e1713dcc2c5006c666d09110e741081c80562cc29b6490fa8125037afdf61b783ebfd01e41152c0f61803009ad98eded56aa6568"
					}
				});
				this.winbox77_link = response_winbox77.data.data.attributes.winbox77_my;
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
		this.$store.dispatch('fetchLink_winbox');
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
	background-image: url('/images/Bg_Img.webp');
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
	color: #07a6fb;
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

.running-sentence {
	white-space: nowrap;
	/* position: absolute; */
	width: max-content;
	animation: scroll 72s linear infinite;
}

@keyframes scroll {
	0% {
		transform: translateX(75%);
	}

	100% {
		transform: translateX(-100%);
	}
}

.site-tabs {
	flex-wrap: wrap;
	margin: 10px 0;
	position: relative;
	display: flex;
}

.site-tabs::before {
	content: "";
	border-bottom: 1px solid #fff;
	position: absolute;
	width: 100%;
	bottom: 1px;
}

.image-container {
	width: calc(100% / 14);
	padding-bottom: 30px;
	cursor: pointer;
}

.image-container.selected {
	border-bottom: 5px solid #FFF;
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

	.image-container.selected {
		border-bottom: 0;
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
	color: white;
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
	color: #07a6fb;
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
	color: #fff;
	font-size: 12px;
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
	color: #07a6fb;
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
	color: #fff;
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
	color: #fff;
}

.TopBanner {
	position: sticky;
	top: 0;
	z-index: 1;
}
</style>
