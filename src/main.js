import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { registerPlugins } from '@/_setting/plugins'
import { registerComponents } from '@/_setting/components'
import { registerGlobals } from '@/_setting/globals'

const app = createApp(App)
// 전역 객체 등록
registerGlobals()
// 플러그인 등록
registerPlugins(app)
// 라우터 등록
app.use(router)
// 전역 컴포넌트 등록
registerComponents(app)
app.mount('#app')

