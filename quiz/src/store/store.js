import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        mycol: "blue",
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
            Politik: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Politik50: {
                content: "Politik50 question.",
                isClicked: false,
                col: "blue",
            },
            Politik100: {
                content: "Politik100 question.",
                isClicked: false,
                col: "blue",
            },
            Politik200: {
                content: "Politik200 question.",
                isClicked: false,
                col: "blue",
            },
            Sport: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Sport50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Sport100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Sport200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Technik: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Technik50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Technik100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Technik200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Musik: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Musik50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Musik100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Musik200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Geographie: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Geographie50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Geographie100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Geographie200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Internet: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Internet50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Internet100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Internet200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Bücher: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Bücher50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Bücher100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Bücher200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Zoologie: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Zoologie50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Zoologie100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Zoologie200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Filme: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Filme50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Filme100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Filme200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Unnützes: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Unnützes50: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Unnützes100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Unnützes200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Geschichte: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Geschichte50: {
                content: "Wie heißt dieser 1 Dude mit dem Schnauzer?",
                isClicked: false,
                col: "blue",
            },
            Geschichte100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Geschichte200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
            },
            Fill3: {
                content: "",
                isClicked: true,
                col: "red",
            },
            Fill350: {
                content: "Sport50 question.",
                isClicked: false,
                col: "blue",
            },
            Fill3100: {
                content: "Sport100 question.",
                isClicked: false,
                col: "blue",
            },
            Fill3200: {
                content: "Sport200 question.",
                isClicked: false,
                col: "blue",
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
            state.Questions[Question].isClicked = true
            state.Questions[Question].col = "grey"
        },
    },
    getters: {
        Teams: state => state.Teams,
        Questions: state => state.Questions,
    }
})