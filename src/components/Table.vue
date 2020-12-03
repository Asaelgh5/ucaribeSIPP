<template>
  <div>
    <table class="table">
      <thead class="table__head">
        <tr>
          <template v-for="(column, index) in columns">
            <th :key="`title${index}`">{{ column.title }}</th>
          </template>
        </tr>
      </thead>
      <tbody class="table__body">
        <template v-for="(item, index) in data">
          <tr :key="`item${index}`" class="table__row">
            <td v-for="(column, indexColumn) in columns" :key="indexColumn">
              <span>{{ item[column.field] }}</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.table {
  width: 100%;
  &__head {
    th {
      font-size: 14px;
      color: rgb(14, 21, 59);
      line-height: 22px;
      font-weight: bold;
      background-color: rgb(50, 210, 206);
      border: 1px solid rgb(35, 35, 35);
      text-align: center;
      padding: 4px;
    }
  }
  &__body {
    .table__row {
      td {
        color: #333333;
        padding: 4px 8px;
        font-size: 14px;
        line-height: 22px;
        background-color: #fff;
        border: 1px solid rgb(35, 35, 35) !important;
      }
    }
  }
  text-align: left;
  border-spacing: 0;
}
</style>
