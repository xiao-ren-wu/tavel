<template>
    <ul class="list">
      <li class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handlerLetterClick"
      >{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    handlerLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 字母A到屏幕最上面的距离
          // const startY = this.$refs['A'][0].offsetTop
          // 当前手指距离屏幕的距离，79为上面蓝色部分的高度
          const touchY = e.touches[0].clientY - 160
          // 计算出来的索引位置（字母的下标）22为字母的高度
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display : flex
    flex-direction : column
    justify-content : center
    position : absolute
    top: 1.58rem
    right: 0
    bottom : 0
    width: .4rem
    .item
      line-height : .44rem
      text-align : center
      color: #25a4bb
</style>
