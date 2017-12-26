<template>
      <section class="container">
        <ul class="text-left init-l">
            <li v-for="item in list" :key="item.name" class="pd-bottom_10">
               <nuxt-link :to="item.link" class="ft_16" > {{item.name}} </nuxt-link>
            </li>
        </ul>
      </section>
</template>
<style lang="scss" scoped>

</style>


<script>
export default {
  data () {
    return {
      list: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '一键海淘',
          link: '/home'
        },
        {
          name: '查看示例-复制商品链接',
          link: '/faq/copy'
        },
        {
          name: '查看示例-身份证照片',
          link: '/faq/idcard'
        },
        {
          name: '国际运费说明',
          link: '/'
        },
        {
          name: '免责申明',
          link: '/faq/exemption-clause'
        },
        {
          name: '转运公司详情',
          link: '/faq/copy'
        },
        {
          name: '支持的海外网站',
          link: '/overseas'
        }
      ]
    }
  }
}
</script>

