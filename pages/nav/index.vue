<template>
      <section class="container">
        <ul class="text-left">
            <li v-for="item in list" :key="item.name" class="pd-bottom_10">
               <nuxt-link :to="item.link" > {{item.name}} </nuxt-link>
            </li>
        </ul>
      </section>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '一键海淘',
          link: '/'
        },
        {
          name: '查看示例-复制商品链接',
          link: '/help/copy'
        },
        {
          name: '查看示例-身份证照片',
          link: '/help/copy'
        },
        {
          name: '国际运费说明',
          link: '/help/copy'
        },
        {
          name: '免责申明',
          link: '/help/copy'
        },
        {
          name: '转运公司详情',
          link: '/help/copy'
        },
        {
          name: '支持的海外网站',
          link: '/help/copy'
        }
      ]
    }
  }
}
</script>
