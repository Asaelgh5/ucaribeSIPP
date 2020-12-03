<template>
  <div class="students">
    <Layout align="center">
      <Column size="6" class="students__card">
        <Box class="custom-box">
          <div class="title">Tablero del estudiante</div>
          <Layout align="center" class="card-student">
            <Column size="4">
              <div class="header">
                <img src="@/assets/picture.jpg" />
                <h2>{{ studentModel.Name }}</h2>
              </div>
            </Column>
            <Column size="8" style="background-color: #d6d6d6; border-radius: 8px;">
              <Layout class="details">
                <Column size="5" class="details-field">Matrícula:</Column>
                <Column size="7">{{ studentModel.Number }}</Column>
                <Column size="5" class="details-field">Programa Educativo:</Column>
                <Column size="7">{{ studentModel.Career }}</Column>
                <Column size="5" class="details-field">Estatus:</Column>
                <Column size="7">{{ studentModel.Status }}</Column>
                <Column size="5" class="details-field">Correo Universidad:</Column>
                <Column size="7">{{ studentModel.Email }}</Column>
                <Column size="5" class="details-field">Teléfono Estudiante:</Column>
                <Column size="7">{{ studentModel.Phone }}</Column>
              </Layout>
            </Column>
          </Layout>
        </Box>
      </Column>
    </Layout>
    <Layout align="center" style="margin-top: 48px;">
      <Column size="10">
        <Box>
          <Layout align="center">
            <Column size="6">
              <div class="section-title">Opciones actuales</div>
              <Table
                :data="actualData"
                :columns="actualColumns"
                isHorizontal
              />
            </Column>
          </Layout>

          <hr style="margin-bottom: 16px; margin-top: 24px;" />

          <div class="section-title">Historial de Prácticas Profesionales</div>
          <Table :data="data" :columns="columns" />
        </Box>
      </Column>
    </Layout>
  </div>
</template>

<script>
import Box from '@/components/Box';
import Layout from '@/components/Layout';
import Column from '@/components/Column';
import Table from '@/components/Table';

export default {
  name: 'Students',
  components: {Table, Column, Layout, Box},
  props: {},
  data() {
    return {
      studentModel: {
        Number: '130300126',
        Name: 'Brian Asael Noh Cocom',
        Career: 'Telemática',
        Status: 'Activo',
        Email: '130300126@ucaribe.edu.mx',
        Phone: '9983085186',
      },
      columns: [
        {
          field: 'practiceNumber',
          title: 'No',
        },
        {
          field: 'schoolPeriod',
          title: 'Periodo Escolar',
        },
        {
          field: 'subject',
          title: 'Asignatura',
        },
        {
          field: 'performanceArea',
          title: 'Área de desempeño',
        },
        {
          field: 'company',
          title: 'Empresa',
        },
        {
          field: 'requestStatus',
          title: 'Solicitud',
        },
        {
          field: 'planStatus',
          title: 'Programa',
        },
        {
          field: 'hoursDone',
          title: 'Horas',
        },
        {
          field: 'reportsUploaded',
          title: 'Reportes',
        },
      ],
      actualColumns: [
        {
          field: 'period',
          title: 'Periodo',
        },
        {
          field: 'company',
          title: 'Empresa',
        },
        {
          field: 'performanceArea',
          title: 'Área de desempeño',
        },
      ],
      actualData: [
        {
          period: '202003',
          company: 'Peopleware Human Capital Platform',
          performanceArea: 'OPERATIVO',
          requestStatus: 'Aceptado',
          planStatus: 'Aceptado',
        },
      ],
      data: [
        {
          practiceNumber: 1,
          schoolPeriod: '202003',
          subject: 'PIT0302 - Prácticas profesionales II',
          performanceArea: 'OPERATIVO',
          company: 'Peopleware.Team S De RL De CV',
          requestStatus: 'Aceptado',
          planStatus: 'Aceptado',
          hoursDone: 0,
          reportsUploaded: 0,
        },
        {
          practiceNumber: 2,
          schoolPeriod: '201903',
          subject: 'PIT0302 - Prácticas profesionales I',
          performanceArea: 'OPERATIVO',
          company: 'Universidad del Caribe',
          requestStatus: 'Aceptado',
          planStatus: 'Aceptado',
          hoursDone: 0,
          reportsUploaded: 0,
        },
      ],
    };
  },
  mounted() {
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.students {

  &__card {
    padding-left: 16px;
    padding-right: 16px;
  }

  .section-title {
    color: #333;
    text-align: center;
    font-size: 21px;
    margin-bottom: 16px;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    border-right: 1px solid rgb(0, 0, 0);
    justify-content: center;
    padding: 16px;

    img:hover {
      box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.2);
    }

    img {
      max-height: 121px;
      border-radius: 50%;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.06);
      margin: 6px 30px;
      transition: .4s;
    }

    h2 {
      color: #0e153b;
      margin-bottom: 20px;
      text-align: center;
    }
  }
}

.details {
  margin-top: 32px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  text-align: left;

  &-field {
    text-align: right;
    font-weight: bold;
    padding-right: 16px;
  }
}
.custom-box {
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.card-student {
  border-top: 1px solid #0e153b;
  margin-top: 12px;
}
</style>
