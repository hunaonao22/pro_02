import {marquee} from './marquee.js'
import {tab} from './tab.js'

import './style/index.css' 
import './style/index.less'

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
import './assets/fonts/iconfont.css'


const gif =  document.createElement('img')
const png =  document.createElement('img')
gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

const fn = ()=>{
    console.log('你好')
}
console.log(fn());

marquee()
tab()

import App from './App.vue'
App()

