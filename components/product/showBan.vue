<template>
  <div class="flex pd-y_10 border_top justify-between show-bans text-center">
    <div class="flex_1" v-for="showBan in showBans" :key="showBan.img">
        <div class="thumb-box"><img :src="showBan.img" alt="" srcset=""></div>
        <div>{{showBan.name}}</div>
    </div>
  </div>
</template>

<script>
const imgPaht = 'https://api.6city.com/sp/img/'

export default {
  data () {
    return {
      showBans: [
        {name: '海外正品', img: imgPaht + 'icon_regular.png'},
        {name: '官网直购', img: imgPaht + 'icon_direct.png'},
        {name: '物流无忧', img: imgPaht + 'icon_wory.png'},
        {name: '人工客服', img: imgPaht + 'icon_people.png'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.show-bans{
  padding-left: 10px;
  padding-right: 10px;
}
.thumb-box{
  img{
    width: 46px;
    height: 46px;
    max-width: 100%;
  }
}
</style>

