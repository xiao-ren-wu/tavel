<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
export default {
  name: 'City',
  components: {
    CityList,
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
