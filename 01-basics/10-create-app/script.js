import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'App',

  setup() {
    const date = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })

    return {
      date,
    }
  },

  template: `<div> Сегодня {{ date }}</div>`,
})

const app = createApp(App)
app.mount('#app')
