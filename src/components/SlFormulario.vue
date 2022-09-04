<template>
  <div class="home">
    <div class="Form">
      <form ref="form" @submit.prevent="sendEmail">
        <div>
          <label for="nombre">
            Nombre:
            <input name="nombre" id="nombre" type="text" placeholder="Nombre" required/>
          </label>
        </div>
        <div>
          <label for="apellidos">
            Apellidos:
            <input name="apellidos" id="apellidos" type="text" placeholder="Apellidos" required/>
            </label>
        </div>
        <div>
          <label for="email">
            E-mail:
            <input name="email" id="email" type="email" placeholder="E-mail" required/>
            </label>
        </div>
        <div>
          <label for="asunto">
            Mensaje:
            <textarea name="asunto" id="asunto" placeholder="Escribe aqui tu mensaje
            " cols="50" rows="5" required></textarea>
          </label>
        </div>
        <div>
          <p><input type="submit" value="Enviar"></p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import emailjs from '@emailjs/browser';

export default {
  name: 'SlFormulario.vue',
  data() {
    return {
      borrar: '',
    };
  },
  methods: {
    sendEmail(event) {
      emailjs
        .sendForm('service_gwl393s', 'template_u82bm0q', this.$refs.form, 'brfBHyc5K938Xxg9u')
        .then(
          (result) => {
            alert('su mensaje fue enviado con exito');
            event.target.reset();
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/main.scss';

</style>
