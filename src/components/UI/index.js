import UDropdown from './UDropdown.vue'
import UInput from './UInput.vue'
import UProgressBar from './UProgressBar.vue'
import UButton from './UButton.vue'
import USelect from './USelect.vue'

const components = [
  { name: 'UDropdown', component: UDropdown },
  { name: 'UInput', component: UInput },
  { name: 'UProgressBar', component: UProgressBar },
  { name: 'UButton', component: UButton },
  { name: 'USelect', component: USelect }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
