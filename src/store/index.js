import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
	state: {
		link_ataskasino: null,
		error: null,
		isFetching: false
	},
	mutations: {
		SET_LINK_ATASKASINO(state, link) {
			state.link_ataskasino = link;
		},
		SET_ERROR(state, error) {
			state.error = error;
		},
		SET_FETCHING(state, isFetching) {
			state.isFetching = isFetching;
		}
	},
	actions: {
		async fetchLink_ataskasino({ commit, state }) {
			if (!state.link_ataskasino && !state.isFetching) {
				commit('SET_FETCHING', true);
				try {
					const response = await axios.get(
						'https://seo.mobileapplab.online/api/atas?fields[0]=ataskasino_com',
						{
							headers: {
								Authorization: 'Bearer 1c4db3188ab2e9a077928920d9cc8d3322d15f9751bc2054a5cb70008df79cf3e3a4dd005a75a1f2db40eb953292ee10ef699693e96e9d77a98439f438ee6a6e6805a8a955e992f082b9e6118a4345e1ed18438ff9789edf9ed1dd58af45ee6669a7519a1291746959ff45bc2054b7f408b5da5ea8cd04d588a2704b7e218021'
							}
						}
					);

					const url = response?.data?.data?.attributes?.ataskasino_com || null;

					// 域名白名单校验
					if (url && url.includes('ataskasino2.com')) {
						commit('SET_LINK_ATASKASINO', url);
					} else {
						console.warn('❗️ 不合规链接，已忽略:', url);
						commit('SET_LINK_ATASKASINO', null);
					}
				} catch (error) {
					console.error('❌ API 获取错误:', error);
					commit('SET_ERROR', error.message || error);
					commit('SET_LINK_ATASKASINO', null);
				} finally {
					commit('SET_FETCHING', false);
				}
			}
		}
	},
	getters: {
		link_ataskasino: state => state.link_ataskasino,
		error: state => state.error
	}
});

export default store;
