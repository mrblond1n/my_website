import Vue from 'vue'
import Vuetify from 'vuetify/lib';
import { Ripple, Scroll, Touch } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  directives: {
    Ripple,
    Scroll,
    touch: Touch
  },
});