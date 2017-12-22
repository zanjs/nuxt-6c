<template>
  <div class="charector-wrap fast">
	<div :style="charectorImg" class="charector"></div>
  </div>
</template>

<script>

import ChatIMG from '../assets/img/charector.png'

export default {
  data () {
    return {
      charectorImg: {
        backgroundImage: 'url(' + ChatIMG + ')'
      }
    }
  }
}
</script>

<style lang="scss">
.charector-wrap{
    position: relative;
    width: 180px;
    height: 300px;
    left: 50%;
    margin-left: -90px;
}
[class^=run-],.btn-paused{
    display: block;color: #000;
    text-align: center;
    padding: 5px;
    margin-bottom: 5px; 
    margin-left: 50px;
    text-decoration: none;
    width: 50px;
    border: 1px solid #ccc; 
    float: left;
}
.charector{
    position: absolute;
    width: 180px; /*no*/
    height:300px; /*no*/
    background-repeat: no-repeat;
    background-position: 0 0;
    animation-iteration-count: infinite;/* 动画无限播放 */
    animation-timing-function:step-start;/* 马上跳到动画每一结束桢的状态 */
}
/* 跑步动画名称 */
@keyframes person-xfast{/* 超快 */
    0% {background-position: 0 0;}
    14.3% {background-position: -180px 0;/*no*/}
    28.6% {background-position: -360px 0;/*no*/}
    42.9% {background-position: -540px 0;/*no*/}
    57.2% {background-position: -720px 0;/*no*/}
    71.5% {background-position: -900px 0;/*no*/}
    85.8% {background-position: -1080px 0;/*no*/}
    100% {background-position: 0 0;}
}
@keyframes person-fast{/* 快 */
    0% {background-position: 0 0;}
    14.3% {background-position: -180px 0;/*no*/}
    28.6% {background-position: -360px 0;/*no*/}
    42.9% {background-position: -540px 0;/*no*/}
    57.2% {background-position: -720px 0;/*no*/}
    71.5% {background-position: -900px 0;/*no*/}
    85.8% {background-position: -1080px 0;/*no*/}
    100% {background-position: 0 0;}
}
@keyframes person-normal{/* 正常 */
    0% {background-position: 0 0;}
    14.3% {background-position: -180px 0;/*no*/}
    28.6% {background-position: -360px 0;/*no*/}
    42.9% {background-position: -540px 0;/*no*/}
    57.2% {background-position: -720px 0;/*no*/}
    71.5% {background-position: -900px 0;/*no*/}
    85.8% {background-position: -1080px 0;/*no*/}
    100% {background-position: 0 0;}
}
@keyframes person-slow{/* 慢 */
    0% {background-position: 0 0;}
    14.3% {background-position: -180px 0;/*no*/}
    28.6% {background-position: -360px 0;/*no*/}
    42.9% {background-position: -540px 0;/*no*/}
    57.2% {background-position: -720px 0;/*no*/}
    71.5% {background-position: -900px 0;/*no*/}
    85.8% {background-position: -1080px 0;/*no*/}
    100% {background-position: 0 0;}
}
/* 跑步动作频率控制 */
.xfast {
  .charector{/* 超快 */
    animation-name: person-xfast;
    animation-duration: 500ms;
  }
}
.fast {
    cursor: pointer;
    .charector{/* 快 */
        animation-name: person-fast;
        animation-duration: 850ms;
    }
    &:hover{
        .charector{
            animation-duration: 450ms;
        }
    }
}
.normal .charector{/* 正常 */
    animation-name: person-normal;
    animation-duration: 800ms;
}
.slow .charector{/* 慢 */
    animation-name: person-slow;
    animation-duration: 950ms;
}
/* 暂停动画 */
.paused .charector{
    animation-play-state:paused;
}
</style>
