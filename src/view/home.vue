<script setup>
import MainTop from '@/components/main-top.vue'
import Slider from '@/components/slider.vue'
import SliderTwo from '@/components/slider-two.vue'
import DashBoard from '@/components/dash-board.vue'
import EnduroCard from '@/components/enduro-card.vue'
import MotorcycleCard from '@/components/motorcycle-card.vue'
import BlockMotorcycle from '@/components/block-motorcycle.vue'
</script>

<template>
  <div class="DashBoard">
    <DashBoard />
  </div>
  <div class="home">
    <MainTop />
    <Slider />
    <BlockMotorcycle />
    <MotorcycleCard />
    <SliderTwo />
    <EnduroCard />
  </div>
</template>

<style scoped>
.home {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  margin-left: 80px;
}
@media (max-width: 880px) {
  .home {
    margin-left: 20px;
  }
}
@media (max-width: 380px) {
  .home {
    margin-left: 20px;
  }
}
</style>
