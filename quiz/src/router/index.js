import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Game from '@/views/Game'
import Upload from '@/views/Upload'
import Quiz from '@/views/Quiz'
import Diashow from '@/views/Diashow'
import Settings from '@/views/Settings'
import Question from '@/views/Question'
import Picture from '@/views/Picture'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/Antim8s/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Antim8s/Quiz/',
            name: "Quiz",
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
            path: '/Antim8s/Game',
            name: 'Game',
            component: Game,
            children: [{
                path: 'Picture',
                name: "Picture",
                component: Picture,
                children: [{
                    path: ':points',
                    name: 'pic'

                }]
            }]
        },
        {
            path: '/Antim8s/Settings/',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/Antim8s/Upload/',
            name: 'Upload',
            component: Upload,
        },
        {
            path: '/Antim8s/Diashow/',
            name: 'Diashow',
            component: Diashow
        },




    ]
})