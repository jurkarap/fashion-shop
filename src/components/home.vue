<template>
  <div class="home container-fluid g-0">
    <slider class="main-slider" v-bind="options">
      <div class="slider-item">
        <img src="../assets/img/main-slider-img-2.jpg" alt="" />
      </div>
      <div class="slider-item">
        <img src="../assets/img/main-slider-img.jpg" alt="" />
      </div>
    </slider>
    <div class="main-slider-text">
      <h3>ВЕСНА 2021</h3>
      <p>
        Ознайомтеся з нашою новітньою колекцією з великою
        <br />
        кількістю стилів і кольорів
      </p>
    </div>
    <div class="container categories-widgets text-center">
      <p>Категорії магазину</p>
      <slider class="categories-slider" v-bind="options2">
        <div class="slider-item">
          <div class="photo">
            <img src="../assets/img/categories-img-1.jpg" alt="" />
          </div>
          <h5>Бренди</h5>
        </div>
        <div class="slider-item">
          <div class="photo">
            <img src="../assets/img/categories-img-2.jpg" alt="" />
          </div>
          <h5>Одяг</h5>
        </div>
        <div class="slider-item">
          <div class="photo">
            <img src="../assets/img/categories-img-3.jpg" alt="" />
          </div>
          <h5>Розпродаж</h5>
        </div>
        <div class="slider-item">
          <div class="photo">
            <img src="../assets/img/categories-img-4.jpg" alt="" />
          </div>
          <h5>Новинки</h5>
        </div>
      </slider>
    </div>
    <div class="container-fluid sales-container">
      <div class="sales-logo">
        <img src="../assets/img/sales-img.jpg" alt="" />
      </div>
      <div class="sales-text">
        <p>ЗНИЖКИ 40%</p>
      </div>
    </div>
    <div class="container blog-container text-center">
      <p>БЛОГ</p>
      <div class="row">
        <div class="col">
          <img src="../assets/img/blog-img-2.jpg" alt="" />
          <div class="container">
            <h5>Мода 2020</h5>
            <span>
              Дізнайтеся що буде популярним у новому році, який одяг носити, та
              з чим його міксувати
            </span>
          </div>
        </div>
        <div class="col">
          <img src="../assets/img/blog-img-3.jpg" alt="" />
          <div class="container">
            <h5>Вечірні сукні, нові фасони</h5>
            <span> Як обрати сукню по фігурі, та віглядати чарівно </span>
          </div>
        </div>
        <div class="col">
          <img src="../assets/img/blog-img-1.jpg" alt="" />
          <div class="container">
            <h5>Нові тренди літа</h5>
            <span>
              Легкий одяг на кожен день у відпустку, у новій колекциї
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid text-center footer-container">
      <img src="../assets/img/logo-01.svg" alt="">
      <br>
      <span class="number">+38 (066) 000 00 00</span>
      <br>
      <span class="mail">example@mail.com</span>
      <br>
      <span>Fashion Store © 2021</span>
    </div>
  </div>
</template>

<script>
import slider from "./slider.vue";

export default {
  name: "home",
  components: {
    slider,
  },
  data() {
    return {
      options: {
        items: 1,
        margin: 20,
        nav: false,
        dots: true,
        prevNav: "<",
        nextNav: ">",
        loop: true,
        timing: "cubic-bezier(0, 0.72, 0.64, 1.06)",
        offset: 1,
        sibling: true,
      },
      options2: {
        items: 3,
        margin: 20,
        nav: true,
        dots: true,
        prevNav: "<",
        nextNav: ">",
        loop: true,
        timing: "cubic-bezier(0, 0.72, 0.64, 1.06)",
        offset: 1,
        sibling: false,
      },
    };
  },
};
</script>

<style lang="sass">
.main-slider
  margin-bottom: 2%
  position: relative
  .slider-item
    img
      width: 100%
      height: auto

.main-slider-text
  position: absolute
  top: 50%
  left: 10%
  p
    color: #ffffff
    font-size: 18px
  h3
    color: #ffffff

.categories-widgets
  margin-bottom: 5%
  p
    font-size: 28px
    color: #000000
    font-weight: 600
  h5
    font-size: 16px
    color: #000000
    font-weight: 600
    opacity: 0.5
  .slider-item
    padding-top: 10px
    .photo
      overflow: hidden
      margin-bottom: 10px
    img
      width: 80%
      height: 100%
      transition-duration: 1s
      &:hover
        transform: scale(1.1)

.sales-container
  position: relative
  margin-bottom: 5%
  img
    width: 100%
    height: 100%
    transition-duration: 5s
    &:hover
      transform: scale(1.1)
  .sales-logo
    max-height: 500px
    overflow: hidden
  .sales-text
    position: absolute
    top: 45%
    right: 40%
    p
      color: #ffffff
      font-size: 38px
      font-weight: 600
      cursor: pointer

.blog-container
  margin-bottom: 10%
  p
    font-size: 28px
    font-weight: 600
    opacity: 0.9
  .col
    margin-top: 10px
    transition-duration: 1s
    opacity: 0.8
    &:hover
      transform: scale(1.1)
      opacity: 1
  img
    width: 80%
    height: 80%
    margin-bottom: 5%
  span
    font-size: 14px

.footer-container
  .number
    font-size: 12px
    font-weight: 800
  .mail
    font-size: 15px
    font-weight: 400
  img
    width: 100px
    height: 100px

</style>