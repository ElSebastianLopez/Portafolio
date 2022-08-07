<template>
  <div class="home">
    <div class="Form">
      <form action="">
        <div>
          <label for="nombre">
            Nombre:
            <input id="nombre" type="text" placeholder="Nombre" />
          </label>
        </div>
        <div>
          <label for="apellidos">
            Apellidos:
            <input id="apellidos" type="text" placeholder="Apellidos" />
            </label>
        </div>
        <div>
          <label for="email">
            E-mail:
            <input id="email" type="email" placeholder="E-mail" />
            </label>
        </div>
        <div>
          <label for="asunto">
            Asunto:
            <textarea id="asunto" placeholder="Escribe aqui tu mensaje
            " cols="50" rows="5"></textarea>
          </label>
        </div>
        <div>
          <p><input type="submit" value="Enviar"></p>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SlFormulario.vue',
  props: {
  },
});
</script>
<style lang="scss" scoped>
@import '../assets/styles/main.scss';

</style>
