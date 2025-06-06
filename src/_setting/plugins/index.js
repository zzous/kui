import vuetify from '@/_setting/vuetify/vuetify.js'
import { createPinia } from 'pinia'
import VueUniversalModal from 'vue-universal-modal'
import dayjs from 'dayjs'

export const registerPlugins = (app) => {
    app.use(createPinia())
    app.use(vuetify)
    app.use(VueUniversalModal, { teleportTarget: '#modals' })
    
    // 전역 객체 설정
    app.provide('dayJS', dayjs)
    app.config.globalProperties.$dayjs = dayjs
} 