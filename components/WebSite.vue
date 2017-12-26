<template>
  <div class="pd-left_10 categorie-wrapper app" ref="scroll">
     <div class="content">
        <div class="categorie-list" v-for="categorie in categories" :key="categorie.Name">
          <div class="categorie-title  pd-y_10">
            <span class="ft_14">{{ categorie.Name }}</span>
          </div>
          <div class="">
            <div class="web-site_box">
              <ul class="none clearfix">
                <li class="fl" v-for="webSite in categorie.WebSites" :key="webSite.Id" v-if="webSite.CountryId === on || on === -1" >
                  <div class="img-box flex">
                    <img :src="webSite.Logo" alt="" srcset="">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: []
    },
    on: {
      type: Number,
      default: -1
    }
  },
  mounted () {
    const BScroll = require('better-scroll').default
    this.scroll = new BScroll(this.$refs.scroll)
  }
}
</script>

<style lang="scss" scoped>
.categorie{
  &-wrapper{
    position: fixed;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
  &-list{
    border-bottom: 1px solid #ddd;
    &:last-child{
      border-bottom: none;
    }
  }
  &-title{
    position: relative;
    padding-left: 20px;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 14px;
      height: 14px;
      border-radius: 100%;
      background-color: #444;
      transform: translateY(-50%);
      text-align-last: center;
      color: #FFF;
    }
    &::after{
      content: '';
      position: absolute;
      left: 5px;
      top: 50%;
      width: 6px;
      height: 6px;
      border-right: 1px solid #fff; 
      border-bottom: 1px solid #fff; 
      transform: rotate(-45deg) translateY(-50%);
      text-align-last: center;
      // color: #FFF;
    }
  }
  
}
.web-site_box{
  position: relative;
}

li{
  // display: inline-block;
  width: 110px;
  height: 55px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.img-box{
  width:110px;
  height:55px;
  align-items:center;
  justify-content: center;
  text-align:center;
  overflow:hidden;
  border:1px solid #ccc;
  background:url(https://api.6city.com/sp/img/balls.svg) no-repeat center center;
  background-size:20px 20px;
  img{
    max-width: 99%;
    max-height: 99%;
  }
}
</style>

