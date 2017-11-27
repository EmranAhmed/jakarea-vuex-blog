import axios from 'axios';

// You can seperate this on a file like: mutation-types.js
export const LOAD_POSTS='LOAD_POSTS';
export const LOAD_POST='LOAD_POST';

// Store
export default {
    strict: process.env.NODE_ENV!=='production',
    state: {
        posts: [],
        post: {},
    },
    getters: {
        getPosts(state) {
            return state.posts
        },
        getPostById(state) {
            return (id) => state.posts[id-1]? state.posts[id-1]:false
        },
        getPost(state) {
            return state.post
        }
    },
    actions: {
        fetchPosts({ commit }) {
            axios.get(`http://jsonplaceholder.typicode.com/posts`)
                .then(function (response) {
                    commit('LOAD_POSTS', response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        fetchPost({ commit }, id) {
            axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
                .then(function (response) {
                    commit('LOAD_POST', response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    },
    mutations: {
        [LOAD_POSTS](state, payload) {
            state.posts=payload;
        },
        [LOAD_POST](state, payload) {
            state.post=payload;
        }
    }
}
