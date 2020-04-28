<template>
  <b-container>
    <b-row class="pb-3">
      <!-- Text slides with image -->
      <b-col>
        <b-img fluid src="~static/img/entremet-choco-noisette.webp"></b-img>
      </b-col>

      <b-col> 
        <b-img fluid src="~static/img/entremet-citron.webp"></b-img>
      </b-col>
      
      <b-col> 
        <b-img fluid src="~static/img/number-cake-jm.webp"></b-img>
      </b-col>
    </b-row>
    <b-row  class="pb-3">
      <b-col> 
        <b-img fluid src="~static/img/tarte-fruit-saison.webp"></b-img>
      </b-col>
      
      <b-col> 
        <b-img fluid src="~static/img/tarte-citron-meringue.webp"></b-img>
      </b-col>
      
      <b-col> 
        <b-img fluid src="~static/img/number-cake.webp"></b-img>
      </b-col>
    </b-row>
    <b-row>

      <b-col> 
        <b-img fluid src="~static/img/entremet-pistache-framboise.webp"></b-img>
      </b-col>
      <b-col> 
        <b-img fluid src="~static/img/number-cake-40.webp"></b-img>
      </b-col>
      
      <b-col> 
        <b-img fluid src="~static/img/tarte-pomme.webp"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>