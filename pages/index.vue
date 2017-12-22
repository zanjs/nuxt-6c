<template>
  <section class="container">
    <div>
      <logo/>
      <h2 class="title ft_14 pd-bottom_14 pd-top_14">
       六城海淘小程序 SSR 服务，构建下一代 渐进式 Web 应用
      </h2>
      <div class="">
        <nuxt-link to="/nav/" class="button4 outline">开始导航<span class="lines"></span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Cat.vue'

export default {
  layout: 'version',
  components: {
    Logo
  }
}
</script>

<style lang="scss" >

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}


@keyframes halftone {
  100% {
    background-size: 2.375em 2.375em, 0.1em 0.1em;
  }
}


.button4 {
  display: inline-block;
  font-weight: 400;
  padding: 0px 15px;
  line-height: 35px;
  text-decoration: none;
  cursor:pointer;
  text-align: center;
  transition: background 300ms;
  &:hover{
    animation: halftone 1s forwards;
    background: radial-gradient(circle, #35495e 0.2em, rgba(0, 0, 0, 0) 0.25em) 0 0/1.25em 1.25em, radial-gradient(circle, #35495e 0.2em, rgba(0, 0, 0, 0) 0.25em) 6.25em 6.25em/1.25em 1.25em;
    color: #fff;
  }
}
.button4.outline {
  overflow: hidden;
  position: relative;
}
.button4.outline:before, 
.button4.outline:after, 
.button4.outline 
.lines:before, 
.button4.outline .lines:after {
  background-color: #336687;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  top: 0;
  transition: transform 300ms;
  width: 100%;
}
.button4.outline:before {
  bottom: 0;
  top: auto;
}
.button4.outline .lines {
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
}
.button4.outline .lines:before, .button4.outline .lines:after {
  height: 100%;
  width: 2px;
}
.button4.outline .lines:after {
  left: auto;
  right: 0;
}
.button4:hover:before {
  transform: translateX(-100%);
}
.button4:hover:after {
  transform: translateX(100%);
}
.button4:hover .lines:before {
  transform: translateY(-100%);
}
.button4:hover .lines:after {
  transform: translateY(100%);
}

</style>
