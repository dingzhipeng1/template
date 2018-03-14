<template>
  <table class="table">
    <tr>
      <th v-for="(item,index) in tableHead" :title="item.title" :style="item.thStyle">
        {{item.title}}
      </th>
    </tr>
    <tr v-for="(item,index) in this.tabledata">
      <td v-for="(items,indexs) in item" :title="typeof items==='object'?'':items">
        <template v-if="typeof items==='object'">
          <component :is="items" :propsdata="tableData.td[index]"></component>
        </template>
        <template v-else>
          <span v-html="items"></span>
        </template>
      </td>
    </tr>
  </table>
</template>
<style scoped>

  .table {
    width: 100%;
  }

  .table th {
    text-align: left;
  }
</style>
<script>
  export default {

    props: ["tableData"],
    data() {
      return {
        tableHead: this.tableData.th,
        tabledata: []
      }
    },
    created: function () {
      for (var i = 0; i < this.tableData.td.length; i++) {
        var temp = this.tableData.td[i];
        var obj = {};
        for (var key in temp) {
          if (!this.tableData.th)
            continue;
          for (var j = 0; j < this.tableData.th.length; j++) {
            if (key == this.tableData.th[j]["tdKey"]) {
              obj[key] = this.tableData.td[i][key];
              if (!this.tableData.tdOption)
                continue;
              for (var x = 0; x < this.tableData.tdOption.length; x++) {
                if (this.tableData.tdOption[x].tdKey == key) {
                  obj[key] = this.tableData.tdOption[x].component
                }
              }
            }
          }
        }
        this.tabledata.push(obj);
      }

    }
  }
</script>


