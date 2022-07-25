
>  button 按钮进行操作
---
### 1. 样式类
  - [ ]  可以传入 icon 图标 或者 图片
  - [x]  可以传入文字
  - [ ]  可以同时传入文字和 图片，默认左右排布
  - [x]  传入 `type` 类型，与 `elelment` 保持一致
  - [x]  可以传入自定义颜色（优先使用）
  --- 
### 2. 功能类
  - [x] loading...
  - [x] 点击
  - [x]  禁用

### 用法
| 说明 | 属性名 | 属性值 |  默认值 |
| :---: | :---: |  :---: |  :---: |
| 文字 | slot:dafault | 无  | 无 |
| 图片 | iconName | 无 |  无 |
| 图文方向 | direction | left,right | left |
| 类型 | type | `element button` | primary |
| 自定义颜色 | color | 任意颜色 | 无 |

```html
<t-button 
    @click="dd"
    color="#626aef"
    iconName="Edit"
>daa</t-button>
```


