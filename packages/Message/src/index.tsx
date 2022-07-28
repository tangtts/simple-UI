
import type {IMeesageOption} from "./type.ts"
import messageBox from './messageBox.vue';
import { createVNode, render, VNode } from "vue";
let instances:VNode[]= []
let id= 0;
const Message = (options:IMeesageOption)=>{
  if(typeof options == "string"){
    options ={
      message:options
    }
  }
  
  
  options.id= id++;

  let offset  = options.offset || 20;
  instances.forEach(vm => {
    offset +=  vm.el!.offsetHeight + 20
  });
  let userClose = options.onClose;

  function updateVerticalTop(instance:VNode) {
    let removeTop = instance.el!.offsetHeight;

    let index = 0

    for (; index < instances.length; index++) {
      if (instances[index].props!.id === instance.props!.id) {
        break
      }
    }
    instances.splice(index, 1)
    console.log(instances)
    for (; index < instances.length; index++) {
      if (instances[index].props.offset === instance.props!.offset) {
        ;[instances[index].props.offset, removeTop] = [
          removeTop,
          instances[index].props.offset,
        ]
      }
    }
    console.log(instances)
  }
  let opt = {
    ...options,
    offset,
    onClose:()=>{
      // 把对应的 id 删除掉，其余的 往前移动
      updateVerticalTop(vm)
      // instances.find(vm=>{
      //   vm.props.id == 
      // })
      // instances = instances.filter(v=>v!=vm)
      
      userClose?.()
    }
  }
  
  const div = document.createElement("div")

 const vm =  createVNode(messageBox,opt)
 
 // 也就是 @Destroy 的缩写
 vm.props!.onDestroy=function(){
   render(null,div)
 }
  render(vm,div)
  document.body.appendChild(div.firstChild!)

  instances.push(vm)

}

export default Message