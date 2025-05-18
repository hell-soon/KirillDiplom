<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    }
  },
}
</script>

<template>
  <div class="swiper_gun_container">
    <Swiper
      :space-between="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide class="swiper_gun">
        <img src="../../image/SportBikeWeapon.png" alt="">
      </SwiperSlide>
      <SwiperSlide class="swiper_gun">
        <img src="../../image/SportBikeWeapon.png" alt="">
      </SwiperSlide>
      <SwiperSlide class="swiper_gun">
        <img src="../../image/SportBikeWeapon.png" alt="">
      </SwiperSlide>
      <SwiperSlide class="swiper_gun">
        <img src="../../image/SportBikeWeapon.png" alt="">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-slide img {
  width: 700px;
  display: block;
  object-fit: cover;
}
.swiper_gun {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper_gun_container {
  padding-left: 50px;
}
.mySwiper {
  position: relative;
  width: 1100px;
  height: 550px;
}
@media (max-width: 880px) {
  .swiper_gun img {
    width: 290px;
  }
  .mySwiper {
    position: relative;
    width: 330px;
    height: 370px;
  }
}
</style>
