import { App } from 'vue'
import TButton from './src/index.vue'
 
// 让组件可以通过 app.use() 的形式使用
export default {
  install(app: App) {
    app.component(TButton.name, TButton)
  }
}