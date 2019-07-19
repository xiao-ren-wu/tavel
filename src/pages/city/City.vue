<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities"
                 :hotCities="hotCities"
                 :letter="letter"
      ></city-list>
      <city-alphabet
        :cities="cities"
        @change="handleLeterChange"
      ></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityAlphabet,
    CityList,
    CityHeader,
    CitySearch
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handlerSuccess)
    },
    handlerSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLeterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
