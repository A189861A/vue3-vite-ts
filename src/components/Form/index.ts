import Form from './Form.vue'
import Input from './Input.vue'
import Label from './Label.vue'


// 命名空间组件 使用方法一
// 使用点语法来使用挂载在一个对象上的组件
// 把Input、Label组件挂载到 Form 组件上
Form.Input = Input
Form.Label = Label
export default Form

// 命名空间组件 使用方法二
// export default {
//     // Form,
//     Input,
//     Label,
// }