import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import axios from 'axios'
// let q_col = "red lighten-2"
// let q50_col = "cyan lighten-1"
// let q100_col = "cyan darken-1"
// let q200_col = "cyan darken-2"
Vue.use(Vuex)
export const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            getState: (key) => Cookies.getJSON(key),
            setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
        })
    ],
    state: {
        current_video: null,
        dia_index: 1,
        videos: [],
        videos_og: [],
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
        // QuestionValues: {
        //     q: { text: "", nr: 1, color: "blue lighten-1" },
        //     q50: { text: "50", nr: 2, color: "blue lighten-3" },
        //     q100: { text: "100", nr: 3, color: "blue lighten-4" },
        //     q200: { text: "200", nr: 4, color: "blue lighten-5" }
        // },
        // Questions: {
        //     Politik: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Politik50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Politik100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Politik200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Sport: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Sport50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Sport100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Sport200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Technik: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Technik50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Technik100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Technik200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Musik: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Musik50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Musik100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Musik200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Geographie: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Geographie50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Geographie100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Geographie200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Internet: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Internet50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Internet100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Internet200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Bücher: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Bücher50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Bücher100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Bücher200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Zoologie: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Zoologie50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Zoologie100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Zoologie200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Filme: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Filme50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Filme100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Filme200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Unnützes: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Unnützes50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Unnützes100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Unnützes200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Geschichte: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Geschichte50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Geschichte100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Geschichte200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        //     Sprachen: {
        //         content: "",
        //         isClicked: true,
        //         col: q_col,
        //     },
        //     Sprachen50: {
        //         content: "",
        //         isClicked: false,
        //         col: q50_col,
        //     },
        //     Sprachen100: {
        //         content: "",
        //         isClicked: false,
        //         col: q100_col,
        //     },
        //     Sprachen200: {
        //         content: "",
        //         isClicked: false,
        //         col: q200_col,
        //     },
        // },
        newTopics: {},
        // Topics: {
        //     T1: { text: "Politik", nr: 1 },
        //     T2: { text: "Sport", nr: 2 },
        //     T3: { text: "Technik", nr: 3 },
        //     T4: { text: "Musik", nr: 4 },
        //     T5: { text: "Geographie", nr: 5 },
        //     T6: { text: "Internet", nr: 6 },
        //     T7: { text: "Bücher", nr: 7 },
        //     T8: { text: "Zoologie", nr: 8 },
        //     T9: { text: "Filme", nr: 9 },
        //     T10: { text: "Unnützes", nr: 10 },
        //     T11: { text: "Geschichte", nr: 11 },
        //     T12: { text: "Sprachen", nr: 12 },
        // },
        // AnswerContent: {
        //     T1: { q50: [], q100: [], q200: [] },
        //     T2: { q50: [], q100: [], q200: [] },
        //     T3: { q50: [], q100: [], q200: [] },
        //     T4: { q50: [], q100: [], q200: [] },
        //     T5: { q50: [], q100: [], q200: [] },
        //     T6: { q50: [], q100: [], q200: [] },
        //     T7: { q50: [], q100: [], q200: [] },
        //     T8: { q50: [], q100: [], q200: [] },
        //     T9: { q50: [], q100: [], q200: [] },
        //     T10: { q50: [], q100: [], q200: [] },
        //     T11: { q50: [], q100: [], q200: [] },
        //     T12: { q50: [], q100: [], q200: [] }
        // },
        // QuestionContent: {
        //     T1: [],
        //     T2: [],
        //     T3: [],
        //     T4: [],
        //     T5: [],
        //     T6: [],
        //     T7: [],
        //     T8: [],
        //     T9: [],
        //     T10: [],
        //     T11: [],
        //     T12: [],
        // },
        // debug: 0,
    },
    mutations: {
        changeTeamName(state, params) {
            state.Teams[params.Team].text = params.name
        },
        increaseQuizCounter(state) {
            state.QuizCounter += 1
        },
        increasediaidx(state) {
            state.dia_index += 1
        },
        decreasediaidx(state) {
            state.dia_index -= 1
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
        },
        changeQuestionIsClicked(state, value) {
            window.console.log(state.newTopics, value.q, value.v);
            state.newTopics[value.q]["q"+value.v].isClicked = true
            state.newTopics[value.q]["q"+value.v].color = "grey"
        },
        removeVideo(state) {
            var index = state.videos.indexOf(store.getters.current_video);
            if (index > -1) {
                state.videos.splice(index, 1);
            }

        },
        populateVideos(state, item) {
            state.videos_og = item.videos
            window.console.log(state.videos_og)
            state.videos = item.videos
            window.console.log(state.videos)

        },
        setCurrentVideo(state, item) {
            state.current_video = item.video
        },
        SaveQuestions(state, item) {
            state.QuestionContent = item.questions
            for (var question in item.questions) {
                if (item.questions[question].q50) {
                    state.Questions[state.Topics[question].text + 50].content = item.questions[question].q50

                }
                if (item.questions[question].q100) {
                    state.Questions[state.Topics[question].text + 100].content = item.questions[question].q100

                }
                if (item.questions[question].q200) {
                    state.Questions[state.Topics[question].text + 200].content = item.questions[question].q200

                }

            }
            // axios.post('http://leusmann.io/Antim8s/static', state.Questions)


        },
      
        AddTopic(state, item) {
            window.console.log("store: ", state, item);
            var obj = {};
            obj[item.topic.text] = item;
            obj["name"] = item.topic.text;
            state.newTopics[item.topic.text] = item;
            window.console.log("storeAfter: ", state.newTopics);
           
            
        },
        SaveAnswers(state, item) {
            state.AnswerContent = item.answers
            for (var answer in item.answers) {
                if (answer != "") {
                    if (item.answers[answer] && item.answers[answer].q50 != "") {
                        state.Questions[state.Topics[answer].text + 50].answers = item.answers[answer].q50

                    }
                    if (item.answers[answer] && item.answers[answer].q100 != "") {
                        state.Questions[state.Topics[answer].text + 100].answers = item.answers[answer].q100

                    }
                    if (item.answers[answer] && item.answers[answer].q200 != "") {
                        state.Questions[state.Topics[answer].text + 200].answers = item.answers[answer].q200

                    }
                }

            }


        },
        SaveToServer(state, item) {
            let url = 'https://leusmann.io/Antim8s/static/'
            axios.post(url, item.data)
        },
        LoadFromServer(state) {
            let data = null
            axios
                .get("https://leusmann.io/Antim8s/static/test.json")
                .then(response => (data = response)
                    .then(window.console.log(data)))
                .catch(error => window.console.log(error));
            window.console.log(state.debug)
        }

    },
    getters: {
        Teams: state => state.Teams,
        Questions: state => state.Questions,
        QuizCounter: state => state.QuizCounter,
        GameCount: state => state.GameCount,
        videos: state => state.videos,
        videos_og: state => state.videos_og,
        current_video: state => state.current_video,
        Topics: state => state.Topics,
        QuestionValues: state => state.QuestionValues,
        QuestionContent: state => state.QuestionContent,
        AnswerContent: state => state.AnswerContent,
        dia_index: state => state.dia_index,
        newTopics: state => state.newTopics,

    }
})