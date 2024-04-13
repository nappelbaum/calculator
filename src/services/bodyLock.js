import { watch } from 'vue'

export default function bodyLock(open) {
  watch(open, (val) => {
    setTimeout(() => {
      val ? document.body.classList.add('lock') : document.body.classList.remove('lock')
    }, 50)
  })
}
