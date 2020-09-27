import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCJakPuSm8DeSDL6ARivv_xngV4Znxaln0",
    authDomain: "vue-calendar-8c04b.firebaseapp.com",
    databaseURL: "https://vue-calendar-8c04b.firebaseio.com",
    projectId: "vue-calendar-8c04b",
    storageBucket: "vue-calendar-8c04b.appspot.com",
    messagingSenderId: "126086895212",
    appId: "1:126086895212:web:e21268570e8dd0fbabea49"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
