<template>
  <div class="pd_10">
    <ul class="none">
      <li class="fl" v-for="item in websites" :key="item.src">
        <div class="img-box">
          <img :src="imgSrc + item.src" alt="" srcset="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

const imgSrc = 'https://api.6city.com/sp/img/index/'

export default {
  data () {
    return {
      imgSrc,
      websites: [{src: '1.png'},
        {src: '2.png'},
        {src: '3.png'},
        {src: '4.png'},
        {src: '5.png'},
        {src: '6.png'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  overflow: hidden;
  width: calc(100% + 10px);
}
li{
  width: 33.33%;
  padding-right: 10px;
  margin-bottom: 10px;
}

.img-box{
  // padding-right: 10px;
  background-color: #FFF;
  text-align: center;
  border: 1px solid #ccc;
  img{
    display: block;
    margin: 0 auto;
    max-width: 96%;
  }
}
</style>



