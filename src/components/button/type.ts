
 import * as ElementPlusIconsVue from '@element-plus/icons-vue'
 
console.log(ElementPlusIconsVue )

 export interface ButtonProps{
  type?:"primary" | "success" | "warning" | "danger"| "info",
  color?:string,
  icon?:string
}