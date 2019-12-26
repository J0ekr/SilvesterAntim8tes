import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        Teams: {
            Team1: {
                name: "Team1",
                text: "",
                score: 0,
                nr: 1,
            },
            Team2: {
                name: "Team2",
                text: "",
                score: 0,
                nr: 2
            },
            Team3: {
                name: "Team3",
                text: "",
                score: 0,
                nr: 3,
            },
            Team4: {
                name: "Team4",
                text: "",
                score: 0,
                nr: 4,
            },
            Team5: {
                name: "Team5",
                text: "",
                score: 0,
                nr: 5
            },
            Team6: {
                name: "Team6",
                text: "",
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
            Technik50: {
                content: "Sport50 question.",
                isClicked: false,
            },
            Technik100: {
                content: "Sport100 question.",
                isClicked: false,
            },
            Technik200: {
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
            state.Teams[event.Team.name].score += parseInt(event.points)

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