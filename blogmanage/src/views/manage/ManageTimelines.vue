<template>
  <div class="layout">
    <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="showModal()">添加新的事件</a-button>
    <a-table bordered :data-source="dataSource" :columns="columns">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <div class="editable-cell">
            <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
              <a-input v-model:value="editableData[record.key].name" @pressEnter="save(record.key)" />
              <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
            </div>
            <div v-else class="editable-cell-text-wrapper">
              {{ text || ' ' }}
              <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
            </div>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <a-popconfirm v-if="dataSource.length" title="Sure to delete?" @confirm="onDelete(record.key)">
            <a>Delete</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
    <a-modal v-model:visible="visible" title="提交信息" @ok="handleOk">
      <a-input v-model:value="value1" addonBefore="title" style="margin-bottom: 30px" />
      <a-input v-model:value="value2" addonBefore="time" style="margin-bottom: 30px" />
    </a-modal>
  </div>
</template>
<script>
import { computed, reactive, ref } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es';
export default {
  name: "ManageTimelines",
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup() {
    const columns = [{
      title: 'title',
      dataIndex: 'title',
    }, {
      title: 'time',
      dataIndex: 'time',
    }, {
      title: 'operation',
      dataIndex: 'operation',
    }];
    const dataSource = ref([{
      key: '0',
      title: 'Edward King 0',
      time: '2022-09-22',
    }, {
      key: '1',
      title: 'Edward King 0',
      time: '2022-09-22',
    }, {
      key: '2',
      title: 'Edward King 0',
      time: '2022-09-22',
    }, {
      key: '3',
      title: 'Edward King 0',
      time: '2022-09-22',
    }, {
      key: '4',
      title: 'Edward King 0',
      time: '2022-09-22',
    }, {
      key: '5',
      title: 'Edward King 0',
      time: '2022-09-22',
    }, {
      key: '6',
      title: 'Edward King 0',
      time: '2022-09-22',
    }, {
      key: '7',
      title: 'Edward King 0',
      time: '2022-09-22',
    }]);
    const count = computed(() => dataSource.value.length + 1);
    const editableData = reactive({});
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    const edit = key => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };

    const save = key => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
    };

    const onDelete = key => {
      dataSource.value = dataSource.value.filter(item => item.key !== key);
    };

    const handleAddTimeline = () => {
      console.log("handleAddTimeline");
    };

    return {
      columns,
      onDelete,
      handleAddTimeline,
      dataSource,
      editableData,
      count,
      edit,
      save,
      visible,
      showModal,
    };
  },
}
</script>
<style lang="less">
.editable-cell {
  position: relative;

  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>