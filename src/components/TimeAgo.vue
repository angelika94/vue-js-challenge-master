<template>
    <span class='timeago'> - {{timeAgo}}</span>
</template>

<script>
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

export default {
  name: 'TimeAgo',
  props: {
    createdAt: {
      type: Date,
      required: true
    }
  },
  data () {
    return {
      timeAgo: null
    }
  },
  methods: {
    getTimeAgo () {
      this.timeAgo = distanceInWordsToNow(this.createdAt, {includeSeconds: true, locale: 'en'})
    }
  },
  created () {
    this.getTimeAgo()
    setInterval(this.getTimeAgo, 1000)
  },
  destroyed () {
    clearInterval(this.getTimeAgo)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .timeago {
    flex 1
    opacity .5
    font-size .8em
    font-weight 200
    white-space nowrap
  }
</style>
