<template>
    <div class="fixed center">
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
    </div>
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
