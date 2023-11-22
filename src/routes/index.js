import China from '../components/china.vue'
import Guangdong from '../components/guangdong.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [

        { path: '/', redirect: '/china' },
        {
            path: '/china',
            name: 'china',
            component: China
        },
        {
            path: '/guangdong',
            name: 'guangdong',
            component: Guangdong
        },

    ]
})


export default router;