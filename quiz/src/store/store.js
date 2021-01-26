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
        newTopics: {},
    },
    mutations: {
        changeTeamNumber(state, params) {
            state.Teams = params.Teams
        },
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
            state.newTopics[value.q]["q" + value.v].isClicked = true
            state.newTopics[value.q]["q" + value.v].color = "grey"
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
        resetScore(state) {
            (state.Teams).forEach(element => {
                element.score = 0;
            });
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