<template>
  <Loader :loading="loading">
    <Layout align="center" class="projects">
      <Column size="8">
        <div style="margin-bottom: 12px;">OFERTA DE ÁREAS DE DESEMPEÑO</div>
        <Table :columns="columns" :data="data">
          <template v-slot:consult="{ item }">
            <Button light @click="consultOffer(item)">
              Consultar
            </Button>
          </template>
        </Table>
      </Column>
    </Layout>
    <Modal :active.sync="showModal">
      <ProjectsConsult />
    </Modal>
  </Loader>
</template>

<script>
import Loader from '@/components/Loader';
import Layout from '@/components/Layout';
import Column from '@/components/Column';
import Table from '@/components/Table';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import ProjectsConsult from '@/views/ProjectsConsult';

export default {
  name: 'Projects',
  components: {
    ProjectsConsult,
    Modal,
    Button,
    Table,
    Column,
    Layout,
    Loader,
  },
  props: {},
  data() {
    return {
      loading: false,
      showModal: false,
      selectedItem: null,
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
          class: 'centered',
        },
        {
          field: '',
          title: 'Espacios',
          class: 'centered',
          slotName: 'consult',
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
  async beforeMount() {
    await new Promise(resolve => setTimeout(resolve, 400));
  },
  mounted() {},
  methods: {
    consultOffer(item) {
      this.selectedItem = item;
      this.showModal = true;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.projects {
  .centered {
    text-align: center;
  }
}
</style>
