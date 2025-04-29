<template>
    <div class="tbl-wrap">
        <div class="table-util flex space-between" v-if="utils">
            <div class="btn-set-m flex" >
              <button type="button" class="btn btn-ss" @click="onRegister">{{regbuttonName}}</button>
              <button type="button" class="btn btn-ss" @click="onDelete">{{deletebuttonName}}</button>
            </div>
            <div class="btn-set-m flex align-end">
              <span class="table-total" >조회결과 총 <strong> {{totalCnt}} </strong>건</span>
              <button type="button" class="btn btn-opt" v-if="downLoad" @click="onDownload">
                <span class="ico-download"></span>파일다운로드
              </button>
              <select class="custom-select sm" v-if="selected">
                <option value="20개">20개</option>
                  <option value="10개">10개</option>
                  <option value="20개">20개</option>
                  <option value="30개">30개</option>
                  <option value="40개">40개</option>
              </select>
            </div>
        </div>
        <div class="ui-no-date" v-if="rowData.length === 0"><p>조회된 데이터가 없습니다.</p></div>
        <AgGridVue :columnDefs="columnDefs" :rowData="rowData" :defaultColDef="defaultColDef" class="ag-theme-alpine" :domLayout="domLayout" />
        <!-- 페이징 컴포넌트 -->
        <PageNavigation :cntPerPage='cntPerPage' :itemCount='itemCount' :currentPage="currentPage"  @changedPage="onChangedPage" />
    </div>
</template>
<script setup>
import { reactive, computed, nextTick, ref, onMounted,markRaw } from 'vue';
import { useCommFunc } from '@/_setting/helper';
const {  exelFileDown } = useCommFunc();   
const props = defineProps({
    selected:{
        type: Boolean,
    },
    downLoad:{
        type: Boolean,
    },
    downParams:{
        type: Object,
        default: () => {},
    },
   rowData: {
    type: Object,
    default: () => {},
  },
  defaultColDef: {
    type: Object,
    default: () => {},
  },
  defaultColDef: {
    type: Object,
    default: () => {},
  },
  domLayout:{
    type: String,
  },
  cntPerPage: {
    type: Number,
  },
  itemCount: {
    type: Number,
  },
  totalCnt:{
    type: Number,
  },
  currentPage:{
    type: Number,
  },
  columnDefs:{
    type: Array,
  },
  regbuttonName:{
    type: String,
  },
  deletebuttonName:{
    type: String,
  }, 
  utils:{
    type: Boolean,
    default: true,
  } 
  
});
const emits = defineEmits(['changedPage', 'onRegister', 'onDelete'])
const onChangedPage = (page) => {
    console.log(page);
    emits('changedPage', page);
}
const onDownload = () => {
    console.log('downParams');
    exelFileDown('downParams', 'downUrl');
}
const onRegister = () => {
    console.log('등록');
    emits('onRegister');
}
const onDelete = () => {
    console.log('삭제');
    emits('onDelete');
}
</script>
