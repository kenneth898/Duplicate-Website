<template>

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
							<a :href="index === 0 ? '#MB_Img_Gallery' : '#footer-content'">
								<img :src="selectedIndex === index ? image.selected : image.notSelected"
									:alt="'Image ' + (index + 1)" />
							</a>
						</div>
					</div>
				</div>

				<div class="MB_Img_Gallery">
					<div class="MB_Img" id="MB_Img">
						<div class="image-grid-container">
							<div class="image-wrapper" v-for="n in 92" :key="n">
								<a v-if="n <= 12 && link_ataskasino" :href="link_ataskasino + 'en/sign-up/'"
									rel="nofollow">
									<img :src="`/images/MB_${n}_Img.webp`" :alt="altTexts[n - 1]">
								</a>
								<img v-else :src="`/images/MB_${n}_Img.webp`" :alt="altTexts[n - 1]">

								<div v-if="n <= 12">
									<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
										<p class="Play_Text">{{ $t('message.Play') }}</p>
									</a>
								</div>
								<div v-else>
									<div class="Play_Button">
										<div class="Play_Button">
											<p class="Play_Text">{{ $t('message.Play') }}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br>
				<a href="//www.dmca.com/Protection/Status.aspx?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
					title="DMCA.com Protection Status" class="dmca-badge" rel="nofollow"> <img class="DMCA-width"
						src="https://images.dmca.com/Badges/dmca_protected_sml_120h.png?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
						alt="DMCA.com Protection Status" />
				</a>
				<div class="footer-content">

					<h1>{{ $t('Main_Content.H1_Header_1') }} | {{ $t('Main_Content.H1_Header_2') }} </h1>
					<br>

					<h2>{{ $t('Main_Content.H2_1_Header') }}</h2>
					<p>{{ $t('Main_Content.H2_1_Content_1') }}</p>
					<p>{{ $t('Main_Content.H2_1_Content_2') }}</p>

					<div class="hide_content" v-if="showContent">
						<h2>{{ $t('Main_Content.H2_2_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_2_Content') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_1') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_1') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_2') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_2') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_3') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_3') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_4') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_4') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_3_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_3_Content_1') }}</p>
						<p>{{ $t('Main_Content.H2_3_Content_2') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_4_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_4_Content_1') }}</p>
						<p>{{ $t('Main_Content.H2_4_Content_2') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_5_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_5_Content_1') }}</p>
						<p>{{ $t('Main_Content.H2_5_Content_2') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_6_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_6_Content_1') }}</p>
						<p>{{ $t('Main_Content.H2_6_Content_2') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_7_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_7_Content_1') }}</p>
						<p>{{ $t('Main_Content.H2_7_Content_2') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_8_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_8_Content') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_9_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_9_Content') }}</p>
						<h3>{{ $t('Main_Content.H3_9_Header_1') }}</h3>
						<p>{{ $t('Main_Content.H3_9_Content_1') }}</p>
						<h3>{{ $t('Main_Content.H3_9_Header_2') }}</h3>
						<p>{{ $t('Main_Content.H3_9_Content_2') }}</p>
						<h3>{{ $t('Main_Content.H3_9_Header_3') }}</h3>
						<p>{{ $t('Main_Content.H3_9_Content_3') }}</p>
						<h3>{{ $t('Main_Content.H3_9_Header_4') }}</h3>
						<p>{{ $t('Main_Content.H3_9_Content_4') }}</p>
						<h3>{{ $t('Main_Content.H3_9_Header_5') }}</h3>
						<p>{{ $t('Main_Content.H3_9_Content_5') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_10_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_10_Content') }}</p>
						<h3>{{ $t('Main_Content.H3_10_Header_1') }}</h3>
						<p>{{ $t('Main_Content.H3_10_Content_1') }}</p>
						<h3>{{ $t('Main_Content.H3_10_Header_2') }}</h3>
						<p>{{ $t('Main_Content.H3_10_Content_2') }}</p>
						<h3>{{ $t('Main_Content.H3_10_Header_3') }}</h3>
						<p>{{ $t('Main_Content.H3_10_Content_3') }}</p>
						<p>{{ $t('Main_Content.H2_10_Btm_Content') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_11_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_11_Content_1') }}</p>
						<p>{{ $t('Main_Content.H2_11_Content_2') }}</p>
						<p>{{ $t('Main_Content.H2_11_Content_3') }}</p>
						<p>{{ $t('Main_Content.H2_11_Content_4') }}</p>
					</div>

					<span class="read-more" @click="toggleContent" v-if="!showContent">
						{{ $t('Main_Content.Read_More') }}</span>
					<span class="read-less" @click="toggleContent" v-else>{{ $t('Main_Content.Read_Less')
					}}</span>

					<div>
						<h2 class="FAQ_Header">{{ $t('FAQs.FAQ') }}</h2>
						<div class="accordion accordion-flush" id="accordionFlushExample">
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingOne">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseOne" aria-expanded="false"
										aria-controls="flush-collapseOne">
										{{ $t('FAQs.FAQ_1_Header') }}
									</button>
								</h3>
								<div id="flush-collapseOne" class="accordion-collapse collapse"
									aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_1_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingTwo">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseTwo" aria-expanded="false"
										aria-controls="flush-collapseTwo">
										{{ $t('FAQs.FAQ_2_Header') }}
									</button>
								</h3>
								<div id="flush-collapseTwo" class="accordion-collapse collapse"
									aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_2_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingThree">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseThree" aria-expanded="false"
										aria-controls="flush-collapseThree">
										{{ $t('FAQs.FAQ_3_Header') }}
									</button>
								</h3>
								<div id="flush-collapseThree" class="accordion-collapse collapse"
									aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_3_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingFour">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseFour" aria-expanded="false"
										aria-controls="flush-collapseFour">
										{{ $t('FAQs.FAQ_4_Header') }}
									</button>
								</h3>
								<div id="flush-collapseFour" class="accordion-collapse collapse"
									aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_4_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingFive">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseFive" aria-expanded="false"
										aria-controls="flush-collapseFive">
										{{ $t('FAQs.FAQ_5_Header') }}
									</button>
								</h3>
								<div id="flush-collapseFive" class="accordion-collapse collapse"
									aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_5_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingSix">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseSix" aria-expanded="false"
										aria-controls="flush-collapseSix">
										{{ $t('FAQs.FAQ_6_Header') }}
									</button>
								</h3>
								<div id="flush-collapseSix" class="accordion-collapse collapse"
									aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_6_Content') }}
									</div>
								</div>
							</div>
						</div>
					</div>





					<div class="footer-detail">
						<p>{{ $t('Our_Partner.Partner') }}</p>
						<div class="Atas_Sign_Up_Container">
							<a v-if="link_ataskasino" :href="link_ataskasino">{{ $t('Atas_Sign_Up.Header') }}</a> - {{
								$t('Atas_Sign_Up.Content') }}
						</div>
						<div class="Atas_Download_Container">
							{{ $t('Atas_Download.Header') }}
							-
							{{ $t('Atas_Download.Content_1') }}
							<a v-if="link_atascasinobet" :href="link_atascasinobet">{{ $t('Atas_Download.Content_2')
							}}</a>
							{{ $t('Atas_Download.Content_3') }}
						</div>
						<div class="Atas_Download_Container">
							{{ $t('thitdFooter.1') }}
							<a v-if="link_atascasinobet" :href="link_ataskasino">{{ $t('thitdFooter.2') }}</a>
							{{ $t('thitdFooter.3') }}
						</div>

						<div class="Visit_site">
							{{ $t('content.Visit_Site') }} <a href="/">{{ $t('content.Site') }}</a>
						</div>
						<div class="license">
							<p>{{ $t('content.Game_License') }}</p>
							<img src="/images/Footer-License-Img.webp" alt="Game License">
						</div>
						<div class="providers">
							<p>{{ $t('content.Providers') }}</p>
							<img src="/images/Provider-List-Img.webp" alt="Provider List">
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
import BackToTop from '@/components/BackToTop.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
	components: {
		LeftBanner,
		RightBanner,
		TopBanner,
		BackToTop,
	},
	data() {
		return {
			selectedItem: 0,
			selectedIndex: 0,
			stickyBarHeightWeb: 105,
			stickyBarHeightMobile: 75,
			altTexts: [
				"Super Ace",
				"Money Coming",
				"Super Ace Deluxe",
				"3 Coin Treasures",
				"Poseidon",
				"Fortune Monkey",
				"Money Gaming Expended Bets",
				"Jackpot Joker",
				"Forturn Gems 3",
				"Potion Wizard",
				"Egypts Glow",
				"The Pig House",
				"Ascent Charge Buffalo",
				"Devil Fire 2",
				"Zeus",
				"Party Star",
				"Dabangggg",
				"Bangla Beauty",
				"Cricket Sah 75",
				"Arena Fighter",
				"Witches Night",
				"Cricket King 18",
				"Fortune Gems 2",
				"King Arthur",
				"Aztrc Priestess",
				"Trial of Phoenix",
				"Sweet Land",
				"Devil Fire",
				"Golden Temple",
				"Golden Joker",
				"Wild Ace",
				"Legacy of Egypt",
				"Master Tiger",
				"Elf Bingo JP",
				"Sin City",
				"Wild Racer",
				"Pirate Queen",
				"Crazy Pusher",
				"World Cup",
				"Neko Fortune",
				"Jili Caishen",
				"Bonus Hunter",
				"Gold Rush",
				"Samba",
				"Mayan Empire",
				"Mega Ace",
				"Thorx",
				"Bone Fortune",
				"Happy Taxi",
				"Agent Ace",
				"Ali Baba",
				"Fortune Gems",
				"Magic Lamp",
				"Twin Wins",
				"Golden Empire",
				"Romax",
				"Medusa",
				"Super Rioh",
				"Crazy Hunter",
				"Lucky Coming",
				"Book of Gold",
				"Pharaoh Treasure",
				"Secret Treasure",
				"Boxing King",
				"Party Night",
				"Fairness Gaming",
				"7 Up-Down",
				"Dice",
				"Dragon & Tiger",
				"Golden Queen",
				"Lucky Goldbricks",
				"Charge Buffalo",
				"Dragon Treasure",
				"Golden Bank",
				"Xi Yang Yang",
				"Crazy Fa Fa Fa",
				"Feng Shen",
				"Night City",
				"Bao Goon Chin",
				"777",
				"Fortune Pig",
				"Bubble Beauty",
				"777",
				"Candy Baby",
				"Fa Fa Fa",
				"Shang Hai Beauty",
				"Jungle King",
				"War of Dragons",
				"Fortune Tree",
				"Hot Chilli",
				"God of Mantial",
				"Chin Shi Huang"
			],
			images: [
				{ notSelected: '/images/JILI_Game_Img.webp', selected: '/images/JILI_Game_Img.webp' },
				{ notSelected: '/images/BT_Game_Img.webp', selected: '/images/BT_Game_Img.webp' },
				{ notSelected: '/images/EVO888.webp', selected: '/images/EVO888.webp' },
				{ notSelected: '/images/BongoG.webp', selected: '/images/BongoG.webp' },
				{ notSelected: '/images/NS.webp', selected: '/images/NS.webp' },
				{ notSelected: '/images/PGPlay.webp', selected: '/images/PGPlay.webp' },
				{ notSelected: '/images/AW.webp', selected: '/images/AW.webp' },
				{ notSelected: '/images/Joker.webp', selected: '/images/Joker.webp' },
				{ notSelected: '/images/KAGaming.webp', selected: '/images/KAGaming.webp' },
				{ notSelected: '/images/CGGaming.webp', selected: '/images/CGGaming.webp' },
				{ notSelected: '/images/Slot.webp', selected: '/images/Slot.webp' },
				{ notSelected: '/images/LiveG.webp', selected: '/images/LiveG.webp' },
				{ notSelected: '/images/Lottery_Game_Img.webp', selected: '/images/Lottery_Game_Img.webp' },
				{ notSelected: '/images/Sport_Game_Img.webp', selected: '/images/Sport_Game_Img.webp' }
			],
			status: null,
			response: [],
			link_atascasinobet: '',
			showContent: false,
			activeAccordion: 0,
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
		},
		toggleContent() {
			this.showContent = !this.showContent; // Toggle the content visibility
		},
		setActiveAccordion(index) {
			console.log(index)
			if (this.activeAccordion === index) {
				console.log(this.activeAccordion)
				this.activeAccordion = null;
			} else {
				this.activeAccordion = index;
			}
		},
	},
	computed: {
		...mapGetters(['link_ataskasino', 'error']),
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
	background-image: url('/images/IJaya_Bg_Img.webp');
	background-size: cover;
	margin-bottom: 75px;
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
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
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
	display: flex;
	justify-content: center;
	width: calc(100% /14);
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
		width: calc(100% / 5);
		flex: 0 0 auto;
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

.Play_Text {
	display: inline-block;
	background-image: url('/images/Play_Img.webp');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 30px;
	text-align: center;
	align-content: center;
	color: green;
	font-size: 14px;
	font-weight: 700;
	margin: 0;
	text-decoration: none;
}

.image-wrapper p {
	margin-bottom: 0;
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

.hide_content {
	display: block;
	/* Ensure the content is block when shown */
}

.read-more,
.read-less {
	cursor: pointer;
	color: black;
	/* Style for read more/less links */
	text-decoration: underline;
}

.FAQ_Header {
	font-size: 23px !important;
	text-align: center;
}

.accordion {
	border-radius: 5px;
	border: 1px solid #ddd;
	/* Optional: Add a border around the accordion */
	overflow: hidden;
	/* Ensure child elements respect the border radius */
}

.accordion-button {
	font-weight: 700;
	font-size: 18px;
}

.accordion-button:focus {
	box-shadow: none;
}

.accordion-body {
	font-size: 16px;
}

.footer-detail {
	width: 90%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}

.footer-detail p {
	color: #143808;
	font-size: 16px;
	font-weight: 700;
	margin-top: 30px;
	text-transform: uppercase;
}

@media screen and (max-width: 760px) {
	.footer-detail p {
		font-size: 12px;
	}
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

.providers {
	float: left;
	width: 70%;
}

.providers img {
	width: 100%;
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
	padding: 50px 0 10px 0;
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

@keyframes blink {

	0%,
	100% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}
}

.Visit_site a {
	animation: blink 1s infinite;
	/* Adjust the duration (1s) and the repetition (infinite) as needed */
}

.Atas_Sign_Up_Container {
	margin-bottom: 16px;
}

.Atas_Sign_Up_Container a {
	font-size: 16px;
	text-decoration: none;
}

.Atas_Download_Container {
	margin-bottom: 25px;
}

.Atas_Download_Container a {
	font-size: 16px;
	text-decoration: none;
}
</style>
