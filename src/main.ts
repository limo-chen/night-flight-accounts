import { createApp } from 'vue'
import { App } from './App';
import { Foo } from './views/Foo';
import { Bar } from './views/Bar';
import {createRouter,createWebHashHistory} from "vue-router"//把组件改成单独导出，这样就可以减少代码体积

const routes = [
    {path:'/',component:Foo},
    {path:'/about',component:Bar},
]

const router =createRouter({
    history: createWebHashHistory(),//hash模式
    routes,//将第二步的routes放在这里
  })

const app= createApp(App) //app先创建
app.use(router) //use router
app.mount('#app')//app再挂载
