import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        Teams: {
            Team1: {
                name: "Team 1",
                score: 0,
                nr: 1,
            },
            Team2: {
                name: "Team 2",
                score: 0,
                nr: 2
            },
            Team3: {
                name: "Team 3",
                score: 0,
                nr: 3,
            },
            Team4: {
                name: "Team 4",
                score: 0,
                nr: 4,
            },
            Team5: {
                name: "Team 5",
                score: 0,
                nr: 5
            },
            Team6: {
                name: "Team 6",
                score: 0,
                nr: 6
            },
        },
        Questions: {
            Politik50: {
                content: "Politik50 question.",
                isClicked: false,
            },
            Politik100: {
                content: "Politik100 question.",
                isClicked: false,
            },
            Politik200: {
                content: "Politik200 question.",
                isClicked: false,
            },
            Sport50: {
                content: "Sport50 question.",
                isClicked: false,
            },
            Sport100: {
                content: "Sport100 question.",
                isClicked: false,
            },
            Sport200: {
                content: "Sport200 question.",
                isClicked: false,
            },
        }

    },
    mutations: {
        changeTeamName(state, Team, name) {
            state.Teams[Team].name = name
        },
        changeTeamScore(state, event) {
            state.Teams["Team1"].score += event.points
            window.console.log("Team:", event.Team)
            window.console.log("score:", event.points)

            // state.Teams[event.Team].score = event.points
        },
        changeQuestionIsClicked(state, Question) {
            window.console.log("Question:", state.Questions[Question])
            state.Questions[Question].isClicked = true
        }
    },
    getters: {
        Teams: state => state.Teams,
        Questions: state => state.Questions,
    }
})