<template>
  <div>
    <separator :list="list"></separator>

    <div class="content">


      <table-view :tableData.sync="tableData"></table-view>
      这个组件是重复造轮子 没什么意义
    </div>
  </div>
</template>
<script>
  import separator from '../common/separator.vue'
  import tableView from '../common/table.vue'
  import button from '../common/button.vue'

  export default {
    data() {
      return {
        list: [{title: '导航一', to: '/tab2'}, {title: '分组一', to: '/tab2'}, {title: '选项二', to: '/tab2'}],
        tableData: {}
      }
    },
    components: {
      separator: separator,
      tableView: tableView
    },
    created() {
      this.tableData = {
        th: [{title: '姓名', tdKey: 'name'}, {title: '性别', tdKey: 'sex'}, {title: '年龄', tdKey: 'age'}, {
          title: '操作',
          tdKey: 'todo'
        }],
        td: [{sex: 'girl', name: 'Amy', age: '17', todo: '1'}, {sex: 'girl', name: 'Amy', age: '18', todo: '1'}, {
          sex: 'girl',
          name: 'Amy',
          age: '19', todo: '1'
        }],
        tdOption: [{tdKey: 'todo', component: button}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
