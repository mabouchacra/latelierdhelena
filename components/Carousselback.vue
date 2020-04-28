<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#FFF"
      img-width="102"
      img-height="48"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
      img-src="~static/img/entremet-choco-noisette.webp"
      ></b-carousel-slide>

      <b-carousel-slide 
      img-src="~static/img/entremet-citron.webp"
      ></b-carousel-slide>
      
      <b-carousel-slide img-src="~static/img/number-cake.webp"
      ></b-carousel-slide>
      
      <b-carousel-slide img-src="~static/img/tarte-pomme.webp"
      ></b-carousel-slide>
      
      <b-carousel-slide img-src="~static/img/tarte-fruit-saison.webp"
      ></b-carousel-slide>
      
      <b-carousel-slide img-src="~static/img/tarte-citron-meringue.webp"
      ></b-carousel-slide>
    </b-carousel>
  </div>
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