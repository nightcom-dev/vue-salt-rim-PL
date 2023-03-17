import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import ToastPlugin from 'vue-toast-notification';
import InstantSearch from 'vue-instantsearch/vue3/es';
import router from './router'
import mitt from 'mitt'
import dialog from './components/Dialog/plugin';
import './assets/main.css'

import en from './locales/en.json';
import hr from './locales/hr.json';

const emitter = mitt()
const app = createApp(App)
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        hr
    }
})

app.config.globalProperties.app_version = '{{VERSION}}';
app.config.globalProperties.$eventBus = emitter;

app.use(router)
app.use(dialog)
app.use(InstantSearch)
app.use(i18n)
app.use(ToastPlugin, {
    position: 'top',
    type: 'default',
    duration: 4000,
});

app.mount('#app')
