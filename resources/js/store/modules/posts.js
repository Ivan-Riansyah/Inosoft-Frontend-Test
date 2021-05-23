import axios from 'axios';

const posts = {
    namespaced: true,
    state: {
        posts: []
    },
    actions: {
        loadPosts ({commit}) {
            //console.log('load posts');
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    //console.log(res.data)
                    let posts = res.data
                    commit('SET_POSTS', posts)
                })
                .catch(error => console.error(error))
        }
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        }
    }
}

export default posts;