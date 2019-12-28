import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Game from '@/views/Game'
import Quiz from '@/views/Quiz'
import Settings from '@/views/Settings'
import Question from '@/views/Question'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Quiz',
            name: Quiz,
            component: Quiz,
            children: [{
                path: 'question',
                name: 'Question',
                component: Question,
                children: [{
                    path: ':id/:points',
                    name: 'quest',
                }]


            }, ]
        },
        {
            path: '/Game',
            name: 'Game',
            component: Game
        },
        {
            path: '/Settings',
            name: 'Settings',
            component: Settings
        },



    ]
})