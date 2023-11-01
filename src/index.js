import $ from 'jquery'
// import $ from 'jquery' 会报错，因为这种语法属于ES6模块化的语法，所以利用webpack来转换成有兼容性的代码

// 引入css文件,不用在html文件里面引入
import './css/index.css'
import './css/index.less'
import './css/index.scss'





// $(funtion(){}) 是jquery的入口函数
$(function(){
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'lightblue')

})

class Person {
        static info = 'aaa'
}
console.log(Person.info);


// ------------------------------下面是vue的基本使用
//1.导入Vue构造函数
// 老版本写法--import vue from 'vue'
import {createApp} from 'vue'
//2.导入APP根组件
import App from './components/App.vue'
createApp(App).mount('#app')
// 下面这个是老版写法
// const vm = new Vue({
//     //3.指定vm 实例要控制的页面区域
//     el:'#app',
//     //4.通过 render 函数,把指定的组件渲染到el 区域中, h(这里面就放需要渲染的组件)
//     render: h => h(App)
// })