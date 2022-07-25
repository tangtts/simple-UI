import TButton from "./button/index";

import { App } from "vue";

const components = [TButton];
function install(app: App) {
  components.forEach(c => {
    app.use(c);
  });
}
export default install;
