<template>
  <div class="home">
    <div class="containerFrist">
      <div class="containerCenter">
        <div class="img">
          <img src="../assets/logo.png" alt="">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque totam impedit, </p>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div class="secondContainer">
      <div class="sectionOne">
        <div class="picture">im</div>
        <div class="text">tex</div>
      </div>
      <div class="sectionTwo">
        <div class="text">tex</div>
        <div class="picture">im</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.img img{
  width: 50px;
  height: 50px;
  padding-left: 48px;
  padding-top:10px ;
}
 @media (min-width: 820px) {
  .img img{
  width: 70px;
  height: 80px;
  padding-right: 40px;
}
 }
</style>
