<template>
  <div class="home">
    <Layout>
      <Column size="3" />
      <Box class="content" size="6">
        <div class="content__title">Sistema para el Seguimiento a las Prácticas Profesionales.</div>
        <br>
        <p>
          Para la Universidad del Caribe es fundamental que el estudiantado aplique en ámbitos laborales aquellos
          conocimientos y habilidades adquiridas en las aulas. El Programa de Prácticas Profesionales está orientado a
          promover este ejercicio y a vincular al estudiantado con empresas e instituciones que cumplan con perfiles
          acordes a nuestros programas educativos y que se interesen en recibir a estudiantes formados dentro de un
          modelo educativo integral y socialmente significativo.
        </p>
        <p>
          Las gestiones relacionadas con las prácticas profesionales se realizan a través de un sistema de información
          diseñado con el fin de simplificar los trámites.
        </p>
        <div class="content__image">
          <img src="@/assets/ucaribe.png" />
        </div>
      </Box>
      <Column size="3" />
      <Column size="6" />
      <Box class="contact" size="3">
        <Column size="8">
          <div>Correo de Contacto: info_pp@ucaribe.edu.mx</div>
        </Column>
      </Box>
    </Layout>
  </div>
</template>

<script>
import Box from '@/components/Box';
import Column from '@/components/Column';
import Layout from '@/components/Layout';

export default {
  name: 'Home',
  components: {
    Layout,
    Column,
    Box,
  },
};
</script>

<style lang="scss">
.home {
  //display: flex;
  //flex-wrap: wrap;
  //box-sizing: border-box;
  //justify-content: center;
  //padding-top: 30px;
}

.content {
  text-align: justify;
  text-justify: inter-word;

  &__title {
    text-align: center;
    font-weight: bold;
    color: rgb(14, 21, 59);
  }

  &__image {
    display: flex;
    margin-right: auto;
    justify-content: center;
    position: relative;

    img {
      width: 50%;
    }
  }
}

.contact {
  margin-top: 24px;
  text-align: left;
  font-size: 14px;
  padding-left: -10px;
}
</style>
