<template>
  <div class="app ft_14 bg-co_f6 fixed bottom top" ref="scroll">
      <div class="content pd-x_10">
          <div class="red pd-top_9">身份证照片必须清晰、无水印、死角边框齐全，且身份证未过期。否则包裹将无法清关。</div>
          <div class="pd-y_10">
              <div class=" pd-bottom_19">
                  <div class=" pd-bottom_10">身份证正面</div>
                  <div>
                      <img class="idcard" src="https://api.6city.com/sp/img/card_front.jpg" alt="" srcset="">
                  </div>
              </div>
              <div>
                  <div class=" pd-bottom_10">身份证反面</div>
                  <div>
                      <img class="idcard" src="https://api.6city.com/sp/img/card_back.jpg" alt="" srcset="">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '身份证照片示例'
  }
}
</script>

<style lang="scss" scoped>
.red{
 color: #FF4D6B;
}
.idcard{
  max-width: 350px;      
}
</style>

