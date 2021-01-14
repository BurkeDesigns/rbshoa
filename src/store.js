import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./firebaseConfig.js')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    slideshowData: [{
        src: "https://www.cruiseclub.lv/wp-content/uploads/2017/08/b1.jpg",
        type: 'img',
        text: 'Welcome to our Community!',
    }, {
        src: "https://images4.alphacoders.com/281/281576.jpg",
        type: 'img',
        text: 'Welcome to our Community!',
    }, {
        src: require("@/assets/img/club_house.jpg"),
        type: 'img',
        text: 'Welcome to our Community!',
    }],
    newsData: [{
        title: 'Heading',
        author: 'Wesley Burke1',
        timestamp: Date.now(),
        bgURL: 'https://www.dreamhost.com/blog/wp-content/uploads/2019/06/397cea7b-529f-43b7-94a6-32c7975802b1_DreamHost-linkedin-company-page-750x500.jpeg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }, {
        title: 'Heading 2',
        author: 'Shannon Mathews1',
        timestamp: Date.now(),
        bgURL: 'https://images4.alphacoders.com/281/281576.jpg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }, {
        title: 'Heading 3',
        author: 'Wesley Burke2',
        timestamp: Date.now(),
        bgURL: 'https://www.dreamhost.com/blog/wp-content/uploads/2019/06/397cea7b-529f-43b7-94a6-32c7975802b1_DreamHost-linkedin-company-page-750x500.jpeg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }, {
        title: 'Heading 4',
        author: 'Wesley Burke3',
        timestamp: Date.now(),
        bgURL: 'https://www.dreamhost.com/blog/wp-content/uploads/2019/06/397cea7b-529f-43b7-94a6-32c7975802b1_DreamHost-linkedin-company-page-750x500.jpeg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }, {
        title: 'Heading 5',
        author: 'Shannon Mathews5',
        timestamp: Date.now(),
        bgURL: 'https://images4.alphacoders.com/281/281576.jpg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }],
    newsData: [{
        title: 'Heading',
        author: 'Wesley Burke1',
        timestamp: Date.now(),
        bgURL: 'https://www.dreamhost.com/blog/wp-content/uploads/2019/06/397cea7b-529f-43b7-94a6-32c7975802b1_DreamHost-linkedin-company-page-750x500.jpeg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }, {
        title: 'Heading 2',
        author: 'Shannon Mathews1',
        timestamp: Date.now(),
        bgURL: 'https://images4.alphacoders.com/281/281576.jpg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }, {
        title: 'Heading 3',
        author: 'Wesley Burke2',
        timestamp: Date.now(),
        bgURL: 'https://www.dreamhost.com/blog/wp-content/uploads/2019/06/397cea7b-529f-43b7-94a6-32c7975802b1_DreamHost-linkedin-company-page-750x500.jpeg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }, {
        title: 'Heading 4',
        author: 'Wesley Burke3',
        timestamp: Date.now(),
        bgURL: 'https://www.dreamhost.com/blog/wp-content/uploads/2019/06/397cea7b-529f-43b7-94a6-32c7975802b1_DreamHost-linkedin-company-page-750x500.jpeg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }, {
        title: 'Heading 5',
        author: 'Shannon Mathews5',
        timestamp: Date.now(),
        bgURL: 'https://images4.alphacoders.com/281/281576.jpg',
        fullStoryURL: 'https://www.google.com',
        summary: 'Test summary example',
    }],
  },
  mutations: {
    setCurrentUser(state, val) {
        state.currentUser = val
    },
    setUserProfile(state, val) {
        state.userProfile = val
    }
  },
  actions: {
    fetchUserProfile({ commit, state }) {
        fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
            commit('setUserProfile', res.data())
        }).catch(err => {
            console.log(err)
        })
    }
  }
})
