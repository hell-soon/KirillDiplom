<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

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
  <div class="swiper">
    <Swiper
      direction="vertical"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :space-between="20"
      class="swiper-slide"
    >
      <SwiperSlide>
        <div class="slide-content">
          <div class="slide-content__content">
            <h2 class="Title">
              Sport Bike
            </h2>
            <p class="Opis">
              Лучшие мотоциклы только у нас на сайте
            </p>
            <p class="Opis_2">
              Спортивный байк, отлично подойдет для тех, кто хочет добавить немного скорости, стиля и адреналина в свои поездки. Идеальный выбор для любителей драйва и экстрима!
            </p>
          </div>
          <button class="button_slider">
            Купить сейчас
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-content">
          <div class="slide-content__content">
            <h2 class="Title">
              Sport Bike
            </h2>
            <p class="Opis">
              Лучшие мотоциклы только у нас на сайте
            </p>
            <p class="Opis_2">
              Спортивный байк, отлично подойдет для тех, кто хочет добавить немного скорости, стиля и адреналина в свои поездки. Идеальный выбор для любителей драйва и экстрима!
            </p>
          </div>
          <button class="button_slider">
            Купить сейчас
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-content">
          <div class="slide-content__content">
            <h2 class="Title">
              Sport Bike
            </h2>
            <p class="Opis">
              Лучшие мотоциклы только у нас на сайте
            </p>
            <p class="Opis_2">
              Спортивный байк, отлично подойдет для тех, кто хочет добавить немного скорости, стиля и адреналина в свои поездки. Идеальный выбор для любителей драйва и экстрима!
            </p>
          </div>
          <button class="button_slider">
            Купить сейчас
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-content">
          <div class="slide-content__content">
            <h2 class="Title">
              Sport Bike
            </h2>
            <p class="Opis">
              Лучшие мотоциклы только у нас на сайте
            </p>
            <p class="Opis_2">
              Спортивный байк, отлично подойдет для тех, кто хочет добавить немного скорости, стиля и адреналина в свои поездки. Идеальный выбор для любителей драйва и экстрима!
            </p>
          </div>
          <button class="button_slider">
            Купить сейчас
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.swiper {
  width: 980px;
  height: 310px;
  border-radius: 12.5px;
}
.swiper-slide {
  font-size: 36px;
  display: flex;
}
.slide-content {
  background-image: url('image/Banner__1.png');
  padding: 30px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Title {
  color: #ffffff;
}
.Opis {
  max-width: 300px;
  font-size: 14px;
  color: var(--Text);
}
.button_slider {
  background-color: transparent;
  font-size: 16px;
  color: #fff;
  width: 200px;
  height: 45px;
  border: solid 3px #5c656c;
  border-radius: 25px;
  cursor: pointer;
}
.button_slider:hover {
  background-color: var(--Dash-Board);
  color: white;
  border: solid 3px var(--Dash-Board);
}
.slide-content__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 880px) {
  .swiper {
    width: 740px;
  }
  .swiper-slide {
    width: 740px;
    height: 310px;
  }
}
</style>
