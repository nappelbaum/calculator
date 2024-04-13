import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import UIComponents from './components/UI'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(UIComponents)
app.mount('#app')
