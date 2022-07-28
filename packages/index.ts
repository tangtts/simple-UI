import TButton from "./button/index";
import TMessage from "./Message/index";

import { App } from "vue";

const components = [TButton,TMessage];
function install(app: App) {
  components.forEach(c => {
    app.use(c);
  });
}
export default install;
