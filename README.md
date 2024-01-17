# vue3-vite-ts

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 编译器宏
- 编译器宏（compiler macros） 有：defineProps、defineEmits、withDefaults、defineExpose 等。
- 编译器宏只能在 <script setup>  块中使用，不需要被导入，并且会在处理 <script setup> 块时被一同编译掉。
- 编译器宏必须在 <script setup>  的顶层使用，不可以在 <script setup>  的局部变量中引用。
- 不要定义和 props 的属性同名的顶层变量，因为编译器宏会覆盖这些变量。

# defineExpose
- 在 Vue3 中，默认不会暴露任何在 <script setup>  中声明的绑定，即不能通过模板 ref  获取到组件实例声明的绑定。
- Vue3 提供了 defineExpose 编译器宏，可以显式地暴露需要暴露的组件中声明的变量和方法。


# 辅助函数
- 在 <script setup> 中常用的辅助函数hooks api，主要有：useAttrs、useSlots、useCssModule
- 模板中使用 $attrs 来访问 attrs 数据，与 Vue2 相比，Vue3 的 $attrs 还包含了 class 和 style 属性。
- 在 <script setup> 中使用 useAttrs 函数获取 attrs 数据
- 在模板中使用 $slots 来访问 slots 数据。
- 在 <script setup> 中使用 useSlots 函数获取 slots 插槽数据。
- 在 <script setup> 中使用 useCssModule 函数获取 css module 数据。


# useCssModule
- 在 Vue3 中，也是支持 CSS Modules 的，在 <style>  上增加 module 属性，即<style module> 。
- <style module> 代码块会被编译为 CSS Modules 并且将生成的 CSS 类作为 $style 对象的键暴露给组件，可以直接在模板中使用 $style。
- 对于如 <style module="content"> 具名 CSS Modules，编译后生成的 CSS 类作为 content 对象的键暴露给组件，即module 属性值什么，就暴露什么对象。





