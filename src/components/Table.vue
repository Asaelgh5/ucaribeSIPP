<template>
  <div>
    <table class="table" v-if="!isHorizontal">
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
            <td v-for="(column, indexColumn) in columns" :key="indexColumn" :class="column.class">
              <slot :name="column.slotName" v-bind:item="item"></slot>
              <span v-html="getContent(column, item)" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <table class="horizontal-table" v-else>
      <tr
        v-for="(column, index) in columns"
        :key="`title${index}`"
      >
        <th>{{ column.title }}</th>
        <td
          v-for="(item, itemIndex) in data"
          :key="`item${itemIndex}`"
        >
          <slot :name="column.slotName" v-bind:item="item"></slot>
          <span v-html="getContent(column, item)" />
        </td>
      </tr>
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
    isHorizontal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getContent(column, item) {
      if (column.template) {
        return column.template.apply(null, [item]);
      }
      return item[column.field];
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  font-size: 12px;
  &__head {
    th {
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
        line-height: 22px;
        background-color: #fff;
        border: 1px solid rgb(35, 35, 35) !important;
      }
    }
  }
  text-align: left;
  border-spacing: 0;
}
.horizontal-table {
  width: 100%;
  font-size: 12px;
  th {
    color: rgb(14, 21, 59);
    line-height: 22px;
    font-weight: bold;
    background-color: #fff;
    border: 1px solid rgb(35, 35, 35);
    text-align: right;
    padding: 4px 12px;
  }
  td {
    color: #333333;
    padding: 4px 12px;
    line-height: 22px;
    background-color: #fff;
    border: 1px solid rgb(35, 35, 35) !important;
    text-align: left;
  }
  border-spacing: 0;
}
</style>
