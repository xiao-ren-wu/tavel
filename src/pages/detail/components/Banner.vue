<template>
    <div class="banner">
      <img class="banner-img" src="static/images/weekend/1.jpg"/>
      <div class="banner-info">
        <div class="banner-title">
          大连海洋水世界（AAAA景区）
        </div>
        <div class="banner-number"><span class="iconfont">&#xe632;</span>39</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style lang="stylus" scoped>
  .banner
    overflow : hidden
    height : 0
    padding-bottom : 55%
    .banner-img
      width : 100%
    .banner-info
      display: flex
      position : absolute
      left: 0
      right : 0
      bottom : 0
      line-height : .6rem
</style>
