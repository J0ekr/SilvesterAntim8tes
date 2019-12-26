import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            q_col: "red",
            q50_col: "blue",
            q100_col: "blue",
            q200_col: "blue"
        }

    }
});