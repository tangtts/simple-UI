import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
const resolve = (dir: string) => path.join(__dirname, dir);
export default defineConfig({
  base: "./",

  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue"],
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
    ElementPlus({
      useSource: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      apis: resolve("src/apis"),
      views: resolve("src/views"),
      store: resolve("src/store"),
      utils: resolve("src/utils"),
      types: resolve("src/types"),
    },
    extensions: [".vue", ".ts", ".js"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/sass/element.scss" as *;`,
      },
    },
  },
  // server: {
  // 	//服务器主机名
  // 	host: '',
  // 	//端口号
  // 	port: 3088,
  // 	//设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
  // 	strictPort: false,
  // 	//服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
  // 	open: false,
  // 	//自定义代理规则
  // 	proxy: {
  // 		// 选项写法
  // 		'/api': {
  // 			target: 'http://jsonplaceholder.typicode.com',
  // 			changeOrigin: true,
  // 			rewrite: path => path.replace(/^\/api/, '')
  // 		}
  // 	}
  // }
});
