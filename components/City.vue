<template>
  <div class="city-Wrap" v-cloak>
    <input type="text" id="reciver_province3" name="reciver_province" placeholder="请选择省市区" readonly class="select_site "
           @click='city($event)'
           v-model='cityInput'/>
    <div class="_citys" v-if='cityWrap' v-cloak>
      <span title="关闭" id="cColse" @click.stop='cColse()'>取消</span>
      <ul id="_citysheng" class="_citys0">
        <li :class="{citySel: provinceShow}" @click='proTit()'>省份</li>
      </ul>
      <div id="_citys0" class="_citys1">
        <div v-for="(item,ind) in districtText" v-if='provinceShow' :key="item" >
          <div class="zoneBox " v-if="item == '东北'">
            <em>{{item}}</em>
            <a v-for="(pro,index) in province_0" @click='proinceClick(index,ind)'
               :class='{ahover : areaIndex ==ind && proIndex == index}' :key="pro" >{{pro.text}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cityProp'],
  data () {
    return {
      cityInput: '',
      cityWrap: false,
      districtText: ['东北', '华北', '华东', '华中', '华南', '西北', '西南'],
      provinceCityList: null,
      provinceShow: false,
      province_0: [],
      province_1: [],
      province_2: [],
      province_3: [],
      province_4: [],
      province_5: [],
      province_6: [],
      province_7: [],
      cityList: [],
      districtList: [],
      pro: null,
      proId: null,
      cit: null,
      citId: null,
      dist: null,
      distId: null,
      areaIndex: null,
      proIndex: null,
      cityIndex: null,
      distIndex: null,
      cityData: {}
    }
  },

  methods: {
    proTit () {
      const _this = this
      _this.provinceShow = true
    },
    citTit () {
      const _this = this
      _this.provinceShow = false
    },
    cColse () {
      const _this = this
      _this.cityWrap = false
    },
    city (event) { // 点击获取数据加载数据
      const _this = this
      _this.provinceShow = true
      var timestamp = new Date().getTime()
      var aurl = '//libs.zto.cn/dynamicdata/allregion.js?v=' + timestamp
      _this.provinceShow = true
      if (!_this.provinceCityList) {
        _this.loadScript(aurl, function () {
          // _this.provinceCityList = ztoAllRegionList
          // _this.getDistrict(ztoAllRegionList)
        })
      }
      _this.cityWrap = true
    },
    proinceClick (index, ind) { // 点击省获取市的数据
      const _this = this
      _this.areaIndex = ind
      _this.proIndex = index
      _this.cityIndex = null
      _this.provinceShow = false
      switch (ind) {
        case 0: // 东北
          _this.pro = _this.province_0[index].text
          _this.proId = _this.province_0[index].value
          _this.cityList = _this.province_0[index].children
          break
        case 1: // 华北
          _this.pro = _this.province_1[index].text
          _this.proId = _this.province_1[index].value
          _this.cityList = _this.province_1[index].children
          break
        case 2: // 华东
          _this.pro = _this.province_2[index].text
          _this.proId = _this.province_2[index].value
          _this.cityList = _this.province_2[index].children
          break
        case 3: // 华中
          _this.pro = _this.province_3[index].text
          _this.proId = _this.province_3[index].value
          _this.cityList = _this.province_3[index].children
          break
        case 4: // 华南
          _this.pro = _this.province_4[index].text
          _this.proId = _this.province_4[index].value
          _this.cityList = _this.province_4[index].children
          break
        case 5: // 西北
          _this.pro = _this.province_5[index].text
          _this.proId = _this.province_5[index].value
          _this.cityList = _this.province_5[index].children
          break
        case 6: // 西南
          _this.pro = _this.province_6[index].text
          _this.proId = _this.province_6[index].value
          _this.cityList = _this.province_6[index].children
          break
        case 7: // 港澳台
          _this.pro = _this.province_7[index].text
          _this.proId = _this.province_7[index].value
          _this.cityList = _this.province_7[index].children
          break
      }
      _this.cityInput = _this.pro
      _this.districtList = []
      _this.cityData.pro = _this.pro
      _this.cityData.proId = _this.proId
      _this.$emit('cityData', _this.pro)
      _this.cityWrap = false
    },
    getDistrict (ztoAllRegionList) { // 获取大区
      const _this = this
      const district = ztoAllRegionList
      for (var i = 0; i < district.length; i++) {
        switch (district[i]['largeArea']) {
          case '东北':
            _this.province_0.push(district[i])
            break
          case '华北':
            _this.province_1.push(district[i])
            break
          case '华东':
            _this.province_2.push(district[i])
            break
          case '华中':
            _this.province_3.push(district[i])
            break
          case '华南':
            _this.province_4.push(district[i])
            break
          case '西北':
            _this.province_5.push(district[i])
            break
          case '西南':
            _this.province_6.push(district[i])
            break
          case '港澳台':
            _this.province_7.push(district[i])
            break
        }
      }
    },
    loadScript (url, callback) { // 封装方法动态添加js文件
      var script = document.createElement('script')
      script.type = 'text/javascript'
      if (typeof (callback) !== 'undefined') {
        if (script.readyState) {
          script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null
              callback()
            }
          }
        } else {
          script.onload = function () {
            callback()
          }
        }
      }
      script.src = url
      document.body.appendChild(script)
    }

  },
  components: {},
  created () {
    // const _this = this
    // setTimeout(() => {
    //   _this.cityInput = _this.cityProp
    // }, 100)
  },
  watch: {
    cityProp: function (val) {
      console.log('watch--' + val)
      this.cityInput = val
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.city-Wrap {
  //需要调整
  position: relative;
  z-index: 99;
  ._citys {

    .ahover {
      color: #fff;
      background-color: #0096ff;
    }
  }
  /*地址下拉*/
  ._citys {
    width: 455px;
    display: inline-block;
    padding: 20px;
    position: fixed;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 20px 3px #f4f7fc;
    line-height: 16px;
  }
  ._citys span,
  ._citys span:hover {
    height: 42px;
    width: 25px;
    font-size: 14px;
    padding-top: 5px;
    text-align: center;
    position: absolute;
    right: 19px;
    top: 0px;
    cursor: pointer;
    border-radius: 0 0 10px 10px;
    line-height: 16px;
  }
  ._citys span {
    background-color: #0096ff;
    color: #fff;
  }
  ._citys span:hover {
    background-color: #F47023;
    color: #fff;
  }
  ._citys0 {
    width: 100%;
    height: 38px;
    display: inline-block;
    border-bottom: 2px solid #f0f4f6;
    padding: 0;
    margin: 0;
  }
  ._citys0 li {
    display: inline-block;
    line-height: 38px;
    font-size: 16px;
    color: #545b60;
    width: 75px;
    text-align: center;
    cursor: pointer;
    float: left;
  }
  .citySel {
    color: #0096ff !important;
    border-bottom: 2px solid #0096ff;
  }
  .citySel2 {
    background-color: #56b4f8;
    color: #fff !important;
  }
  ._citys1 {
    width: 100%;
    font-size: 0;
    text-align: left;
  }
  ._citys1 a {
    height: 28px;
    display: inline-block;
    background-color: #f0f4f6;
    color: #666b6e;
    margin-left: 5px;
    margin-top: 5px;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    overflow: hidden;
    padding: 0 10px;
    border-radius: 4px;
  }
  ._citys1 a:hover {
    color: #fff;
    background-color: #0096ff;
  }
  .zoneBox {
    padding-left: 50px;
    position: relative;
  }
  .zoneBox em {
    display: block;
    text-align: center;
    line-height: 28px;
    position: absolute;
    left: 0;
    top: 5px;
    display: inline-block;
    font-size: 14px;
    width: 50px;
    font-style: normal; // color: #bcbcbc;
  }
  .AreaS {
    background-color: #0096ff !important;
    color: #fff !important;
  }
  input {
    width: 100%;
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 40px;
    height: 40px;
    padding-left: 10px;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  }

  input:-moz-placeholder {
    color: #bfcbd9;
  }
  ::-webkit-input-placeholder {
    color: #bfcbd9;
  }
}
</style>
