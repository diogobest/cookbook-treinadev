import app from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#recipe',
    functional: true,
    components:{
        app
    }
});
});