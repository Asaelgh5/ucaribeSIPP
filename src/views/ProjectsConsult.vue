<template>
  <div>
    <Layout align="center">
      <Column size="11">
        <div>Consulta el Área de Desempeño</div>
        <br>
        <Table
          :columns="columns"
          :data="data"
          isHorizontal />
      </Column>
    </Layout>
    <br>
    <Layout align="right">
      <Button light @click="$parent.close()">Cerrar</Button>
    </Layout>
  </div>
</template>

<script>
import Table from '@/components/Table';
import Layout from '@/components/Layout';
import Column from '@/components/Column';
import Button from '@/components/Button';

export default {
  name: 'ProjectsConsult',
  components: {Button, Column, Layout, Table},
  props: {
    model: Object,
  },
  data() {
    return {
      columns: [
        {
          title: 'Estatus',
          field: 'Active',
        },
        {
          title: 'RFC de la Empresa',
          field: 'RFC',
        },
        {
          title: 'Nombre de la Empresa',
          field: 'Company',
        },
        {
          title: 'Programa Educativo',
          field: 'Career',
        },
        {
          title: 'Asignatura de la Práctica',
          field: 'Subject',
        },
        {
          title: 'Número de Practicantes requeridos',
          field: 'StudentsRequired',
        },
        {
          title: 'Espacios Disponibles',
          field: 'AvailableSpaces',
        },
        {
          title: 'Nivel de Desempeño',
          field: 'PerformanceArea',
        },
        {
          title: 'Área o áreas donde ubicar al aspirante',
          field: 'LocationAreas',
        },
        {
          title: 'Actividades a Desempeñar',
          field: 'Activities',
        },
        {
          title: 'Periodo Escolar',
          field: 'SchoolPeriod',
        },
        {
          title: 'Sexo',
          field: 'Gender',
        },
        {
          title: 'Idioma',
          field: 'Language',
        },
        {
          title: 'Porcentaje del idioma',
          field: 'LanguagePercentage',
        },
        {
          title: 'Horario',
          field: 'Schedule',
        },
        {
          title: 'Asesor Empresa',
          field: 'CompanyAdvisor',
        },
        {
          title: 'Asesor Interno',
          field: 'InternalAdvisor',
        },
        {
          title: 'Otros Requisitos',
          field: 'OtherRequirements',
        },
      ],
      data: [
        {
          Active: 'Activo',
          RFC: 'GHS140513T11',
          Company: 'MIA REEF ISLA MUJERES (GRUPO HOTELERO SAMAR SA DE CV)\n',
          Career: '',
          Subject: 'PIT0302 / Prácticas profesionales II',
          StudentsRequired: 1,
          AvailableSpaces: 1,
          PerformanceArea: 'OPERATIVO',
          LocationAreas: 'Sistemas',
          Activities: 'Auxiliar de departamento',
          SchoolPeriod: '202004 Invierno',
          Gender: 'Indistinto',
          Language: 'Español',
          LanguagePercentage: 0,
          Schedule: 'Interesados comunicarse al correo capacitacionreef@hotelesmia.com con Verónica Díaz\n',
          CompanyAdvisor: 'DÍAZ SÁNCHEZ VERÓNICA',
          InternalAdvisor: 'MAE. García Fernández / Alejandro',
          OtherRequirements: '',
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
.some-class {
}
</style>
