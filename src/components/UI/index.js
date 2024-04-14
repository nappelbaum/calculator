import UDropdown from './UDropdown.vue'
import UInput from './UInput.vue'
import UProgressBar from './UProgressBar.vue'
import UButton from './UButton.vue'
import USelect from './USelect.vue'
import UArrowBtn from './UArrowBtn.vue'

const components = [
  { name: 'UDropdown', component: UDropdown },
  { name: 'UInput', component: UInput },
  { name: 'UProgressBar', component: UProgressBar },
  { name: 'UButton', component: UButton },
  { name: 'USelect', component: USelect },
  { name: 'UArrowBtn', component: UArrowBtn }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
