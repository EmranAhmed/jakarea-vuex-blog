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
		load_blog_posts: function () {
	       axios.get(`http://jsonplaceholder.typicode.com/posts`).then((response) => {
	        this.state.posts = response.data
	      }, (err) => {
	        console.log(err)
	      })
	    }
	},
	actions: {

	}
})
