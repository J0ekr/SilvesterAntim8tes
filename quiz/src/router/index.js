import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Game from '@/views/Game'
import About from '@/views/About'
import Question from '@/views/Question'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: "/Game",
            name: Game,
            component: Game,
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/question',
            name: 'Question',
            component: Question,
            children: [{
                path: '/question/:id/:points',
                name: 'quest',
            }]


        },


    ]
})