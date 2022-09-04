<template>
  <div class="home">
    <div class="containerFrist">
      <div class="containerCenter">
        <div class="img">
          <img src="../assets/media/sebas.jpg" alt="" />
        </div>
        <div>
          <h2>SEBASTIAN LOPEZ GIRALDO</h2>
          <p>Front end developer, y estudiante de Tecnología en Sistemas, tengo habilidades de
            autoaprendizaje, liderazgo, trabajo en equipo, y dominio del público, con alto nivel de
            responsabilidad y compromiso, soy una persona enfocada en culminar de la mejor
            manera los proyectos o actividades en las que tenga participación.</p>
        </div>
      </div>
      <div></div>
    </div>
    <div class="title-proyects">
      <h2>PROYECTOS</h2>
    </div>
    <div class="secondContainer">
      <div class="sectionOne">
        <div class="picture">
          <img src="../assets/media/pensilvania.png" alt="">
        </div>
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
        <h2 class="title-h2">HABILIDADES</h2>
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
    <div class="containerEducation">
      <div class="titleEducation">
        <h2>EDUCACION</h2>
      </div>
      <div class="containerEstudies">
        <div class="estudioFecha1">
           <p>En curso</p>
           <p>Pensilvania-Caldas</p>
        </div>
        <div class="estudio1">
          <p>Colegio integrado nacional del oriente de caldas(CINOC).</p>
          <p>Tecnología en sistemas informáticos</p>
        </div>
        <div class="estudioFecha2">
          <p>2022-2022</p>
          <p>Pensilvania-Caldas</p>
        </div>
        <div class="estudio2">
          <p>ProsperCity</p>
          <p>Desarrollador Front-end</p>
        </div>
        <div class="estudioFecha3">
          <p>2020-2021</p>
          <p>Pensilvania-Caldas</p>
        </div>
        <div class="estudio3">
          <p>CISCO NETACAD</p>
          <p>Diplomado en CiberSeguridad</p>
        </div>
         <div class="estudioFecha4">
           <p>2019-2021</p>
           <p>Pensilvania-Caldas</p>
         </div>
        <div class="estudio4">
           <p>Colegio integrado nacional del oriente de caldas(CINOC).</p>
           <p>
               Técnico profesional en Sop y Ope de sistemas informáticos.
           </p>
        </div>
        <div class="estudioFecha5">
          <p>2017-2018</p>
          <p>Arboleda-Cladas</p>
        </div>
        <div class="estudio5">
          <p>Servicio nacional de aprendizaje(SENA)</p>
          <p>Técnico en programación de software</p>
        </div>
        <div class="estudioFecha6">
           <p>2013-2018</p>
           <p>Arboleda-Cladas</p>
        </div>
        <div class="estudio6">
          <p>I.E Pablo VI</p>
          <p>Bachiller Academico</p>
        </div>
      </div>
    </div>
    <div class="experience">
      <h2 class="tituloexperiencia">EXPERIENCIA</h2>
      <div class="experienciaLaboral">
        <div class="experiencia1">
          <h2>DESARROLLADOR JUNIOR </h2>
          <h3>Tambora SAS</h3>
          <h4>17/08/2022--ACTUAL</h4>
          <h5>LABORES:</h5>
          <p>Diseño y ajustes a las vistas de los proyectos desarrollados en el empresa</p>
          <p>Desarrollo de controladores para poryectos </p>
          <p>Implementacion de Bases de datos con ASP.NET Entity framework </p>
          <h3>TECNOLOGIAS:</h3>
          <P>HTML - CSS - JS - JQUERY - ASP.NET - SQL SERVER </P>
        </div>
        <div class="experiencia2">
          <h2>TUTOR PROSPERCITY</h2>
          <h3>Botcamp ProsperCity</h3>
          <h4>23/05/2022--17/08/2022</h4>
          <h5>LABORES:</h5>
          <p>Clases de logica de programacion</p>
          <p>Clases de HTML CSS VUE,JS</p>
          <p>Manejo de git Y GitHub</p>
          <h3>TECNOLOGIAS:</h3>
          <P>HTML - CSS - JS - Vue.js- git  </P>
        </div>
      </div>
    </div>
    <footer>
      <div>
        <h2 class="contacto">CONTACTAME</h2>
        <sl-formulario/>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import SlFormulario from '@/components/SlFormulario.vue';

export default {
  components: {
    SlFormulario,
  },
  props: {
    message: String,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";

.img img {
  width: 80px;
  height: 80px;
  padding-top: 10px;
  margin: auto;
}

@media (min-width: 820px) {
  .img img {
    width: 150px;
    height: 200px;
    padding-right: 40px;
    padding-left: 48px;
  }
}
</style>
