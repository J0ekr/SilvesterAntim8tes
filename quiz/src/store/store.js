import Vue from 'vue'
import Vuex from 'vuex'
let q_col = "red lighten-2"
let q50_col = "cyan lighten-1"
let q100_col = "cyan darken-1"
let q200_col = "cyan darken-2"
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        current_video: null,
        videos: [],
        QuizCounter: 0,
        GameCount: 0,
        Teams: {
            Team1: {
                name: "Team1",
                text: "Team 1",
                score: 0,
                nr: 1,
            },
            Team2: {
                name: "Team2",
                text: "Team 2",
                score: 0,
                nr: 2
            },
            Team3: {
                name: "Team3",
                text: "Team 3",
                score: 0,
                nr: 3,
            },
            Team4: {
                name: "Team4",
                text: "Team 4",
                score: 0,
                nr: 4,
            },
            Team5: {
                name: "Team5",
                text: "Team 5",
                score: 0,
                nr: 5
            },
        },
        Questions: {
            Politik: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Politik50: {
                content: "Politik50 question.",
                isClicked: false,
                col: q50_col,
            },
            Politik100: {
                content: "Politik100 question.",
                isClicked: false,
                col: q100_col,
            },
            Politik200: {
                content: "Politik200 question.",
                isClicked: false,
                col: q200_col,
            },
            Sport: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Sport50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Sport100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Sport200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Technik: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Technik50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Technik100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Technik200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Musik: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Musik50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Musik100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Musik200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Geographie: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Geographie50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Geographie100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Geographie200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Internet: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Internet50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Internet100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Internet200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Bücher: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Bücher50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Bücher100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Bücher200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Zoologie: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Zoologie50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Zoologie100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Zoologie200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Filme: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Filme50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Filme100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Filme200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Unnützes: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Unnützes50: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Unnützes100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Unnützes200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Geschichte: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Geschichte50: {
                content: "Wie heißt dieser 1 Dude mit dem Schnauzer?",
                isClicked: false,
                col: q50_col,
            },
            Geschichte100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Geschichte200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
            Fill3: {
                content: "",
                isClicked: true,
                col: q_col,
            },
            Fill350: {
                content: "Sport50 question.",
                isClicked: false,
                col: q50_col,
            },
            Fill3100: {
                content: "Sport100 question.",
                isClicked: false,
                col: q100_col,
            },
            Fill3200: {
                content: "Sport200 question.",
                isClicked: false,
                col: q200_col,
            },
        }
    },
    mutations: {
        changeTeamName(state, params) {
            state.Teams[params.Team].text = params.name
        },
        increaseQuizCounter(state) {
            state.QuizCounter += 1
        },
        resetQuizCounter(state) {
            state.QuizCounter = 0
        },
        increaseGameCount(state) {
            state.GameCount += 1
        },
        resetGameCount(state) {
            state.GameCount = 0
        },
        changeTeamScore(state, event) {
            state.Teams[event.Team.name].score += parseInt(event.points)

            // state.Teams[event.Team].score = event.points
        },
        changeQuestionIsClicked(state, Question) {
            state.Questions[Question].isClicked = true
            state.Questions[Question].col = "grey"
        },
        removeVideo(state) {
            window.console.log("old_videos:", state.videos, store.getters.current_video)
            var index = state.videos.indexOf(store.getters.current_video);
            if (index > -1) {
                state.videos.splice(index, 1);
            }
            window.console.log("video index:", index)
            window.console.log("new_videos:", state.videos)
        },
        populateVideos(state, item) {
            window.console.log(item.videos)

            state.videos = item.videos

        },
        setCurrentVideo(state, item) {
            state.current_video = item.video
        }
    },
    getters: {
        Teams: state => state.Teams,
        Questions: state => state.Questions,
        QuizCounter: state => state.QuizCounter,
        GameCount: state => state.GameCount,
        videos: state => state.videos,
        current_video: state => state.current_video
    }
})