import axios from 'axios';

const posts = {
    namespaced: true,
    state: {
        posts: [],
        forms: []
    },
    actions: {
        loadPosts ({commit}) {
            //console.log('load posts');
            axios
                .get('http://localhost:3000/data')
                .then(res => {
                    //console.log(res.data)
                    let posts = res.data
                    commit('SET_POSTS', posts)
                })
                .catch(error => console.error(error))
        },
        loadForms ({commit}) {
            axios
                .get('http://localhost:3000/form')
                .then(res => {
                    //console.log(res.data)
                    let forms = res.data
                    commit('SET_FORMS', forms)
                })
                .catch(error => console.error(error))
        }, 
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        SET_FORMS(state, forms) {
            state.forms = forms
        }
    }
}

export default posts;