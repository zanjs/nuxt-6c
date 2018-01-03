<template>
    <transition name="load-fade">
        <div v-show="load" class="loading-item-inner">
            <div class="item-loader-container">
                <div class="la-square-jelly-box la-2x">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  props: {
    load: {
      type: Boolean,
      default: false
    }
  }
}
</script>
