<template>
  <div class="home">
    <div class="containerFrist">
      <div class="containerCenter">
        <div class="img">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque totam impedit,</p>
        </div>
      </div>
      <div></div>
    </div>
    <div>
      <h2>PROYECTOS</h2>
    </div>
    <div class="secondContainer">
      <div class="sectionOne">
        <div class="picture">img</div>
        <div class="text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sed adipisci, dolore
            amet aspernatur labore enim ab tempore, quis ducimus itaque! Veniam, veritatis. Eius
            autem consequuntur vel ratione reprehenderit atque?
          </p>
        </div>
      </div>
      <div class="sectionTwo">
        <div class="picture">im</div>
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sed adipisci, dolore
            amet aspernatur labore enim ab tempore, quis ducimus itaque! Veniam, veritatis. Eius
            autem consequuntur vel ratione reprehenderit atque?
          </p>
        </div>
      </div>
    </div>
    <div></div>
    <div class="containerSkills">
      <div class="title">
        <h2 class="title-h2">SKILLS</h2>
      </div>
      <div class="skills">
        <font-awesome-icon icon="fa-brands fa-vuejs" />

        <font-awesome-icon icon="fa-brands fa-square-js" />

        <font-awesome-icon icon="fa-brands fa-html5" />

        <font-awesome-icon icon="fa-brands fa-css3-alt" />

        <font-awesome-icon icon="fa-brands fa-java" />

        <font-awesome-icon icon="fa-solid fa-database" />

        <h1 class="c">C#</h1>
      </div>
    </div>
    <div>
      <h2>EDUCACION</h2>
    </div>
    <div>
      <h2>EXPERIENCIA</h2>
    </div>
    <footer>
      <div>
        <h2>CONTACTAME</h2>
      </div>
    </footer>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
@import "../assets/styles/main.scss";

.img img {
  width: 50px;
  height: 50px;
  padding-left: 48px;
  padding-top: 10px;
}

@media (min-width: 820px) {
  .img img {
    width: 70px;
    height: 80px;
    padding-right: 40px;
  }
}
</style>
