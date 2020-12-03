<template>
  <Loader :loading="loading">
    <Layout align="center" class="projects">
      <Column size="8">
        <div>OFERTA DE ÁREAS DE DESEMPEÑO</div>
        <Table :columns="columns" :data="data" />
      </Column>
    </Layout>
  </Loader>
</template>

<script>
import Loader from '@/components/Loader';
import Layout from '@/components/Layout';
import Column from '@/components/Column';
import Table from '@/components/Table';

export default {
  name: 'Projects',
  components: {
    Table,
    Column,
    Layout,
    Loader,
  },
  props: {},
  data() {
    return {
      loading: false,
      columns: [
        {
          field: 'offerNumber',
          title: 'No.',
        },
        {
          field: 'performanceArea',
          title: 'Área de Desempeño',
        },
        {
          field: 'company',
          title: 'Empresa',
        },
        {
          field: 'subject',
          title: 'Asignatura',
        },
        {
          field: 'availableSpaces',
          title: 'Espacios',
        },
        {
          field: '',
          title: 'Espacios',
        },
      ],
      data: [
        {
          offerNumber: 1,
          performanceArea: 'Operativo',
          company: 'ATOMICK SMART TECHNOLOGIES',
          subject: 'PID0201 - Prácticas Profesionales I',
          availableSpaces: 2,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.projects {

}
</style>
