import { createApp } from 'vue'

import App from './01-app/App.vue'
import appComponents from './07-shared/ui'

const app = createApp(App)

appComponents.forEach((component) => app.component(component.name, component))

app.mount('#app')