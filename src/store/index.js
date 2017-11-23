import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		posts : []
	},
	getters :{

	},
	mutations: {
		load_blog_posts: function(state, payload) {
            state.posts = payload;
						console.log(state.posts);
        }
	},
	actions: {
        posts({ commit }) {
					axios.get(`http://jsonplaceholder.typicode.com/posts`)
						.then(function (response) {
							commit('load_blog_posts', response.data);
						})
						.catch(function (error) {
							console.log(error);
						});
        }
    },
})
