import type{ App } from 'vue';
import Message from "./src/index.tsx"

(Message as any).install =function(app:App){
  app.use(Message)
}
export default Message
