<template>
  <div>
    <div class="title">
      <div>周末去哪</div>
    </div>
      <ul>
        <li class="item border-bottom"
            v-for="item of weekendList"
            :key="item.id"
        >
        <div class="item-img-wrapper">
          <img class="item-img" :src= "item.imgUrl">
        </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'static/images/weekend/1.jpg',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0002',
        imgUrl: 'static/images/weekend/2.jpg',
        title: '京城溜娃必去',
        desc: '德智体美劳全面发展的亲子日，这些地方该去看看'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top .2rem
    line-height : .8rem
    background  : #eee
    text-indent : .2rem
  .item-img-wrapper
    overflow : hidden
    padding-bottom : 33.9
    .item-img
      width : 100%
  .item-info
    padding .1rem
    .item-title
      line-height : .54rem
      font-size : .32rem
      ellipsis()
    .item-desc
      line-height : .4rem
      color : #ccc
      ellipsis()
</style>
