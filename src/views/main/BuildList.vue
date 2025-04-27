<template>
    <!-- <div style="margin-bottom:20px;">
        <v-btn @click="openAlert">alert열기</v-btn>
        <v-btn @click="openSample">샘플페이지 이동</v-btn>
        <v-btn @click="openModal">모달열기</v-btn>
    </div> -->
  

    
    <SearchBox @onSearchResult="onSearchResult" @onReload="onReload">
        <template #formItem>
            <div class="item">
                <label>기간조회</label>
                <div class="input">
                    <div class="dv"><DatePicker ref="datepicker" :dayOpionType=state.dayOpionType  @selectDay ="selectDay" :optionsType="true"/></div>
                </div>
            </div>
            
            <div class="item mt-5 w-100" style="margin-left:0;background:#eee;padding:20px;">
                <div class="item">
                    <label>전문ID</label>
                    <div class="input">
                        <div class="dv"><input type="text" class="form-control" placeholder="전문 ID를 검색 하세요" style="width:200px;background:#fff"/></div>
                    </div>
                </div>
                <div class="item">
                    <label>결과코드</label>
                    <div class="input">
                        <div class="dv"><input type="text" class="form-control" placeholder="결과코드를 검색 하세요" style="width:200px;background:#fff"/></div>
                    </div>
                </div>
                <div class="item" >
                    <label>등록자</label>
                    <div class="input">
                        <div class="dv">
                            <select class="custom-select" style="width:360px;" placeholder="등록자를 선택 하세요" v-model="state.groupname">
                                <option value="" disabled>등록자를 선택 하세요</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </SearchBox>
    <ListTable 
        :selected="true"
        :downLoad="true"
        :rowData="state.rowData" 
        :totalCnt="pager.totalCnt"
        :columnDefs="state.value" 
        :defaultColDef="state.defaultColDef" 
        :domLayout="'autoHeight'"
        :cntPerPage="pager.size" 
        :itemCount="pager.totalCnt" 
        :currentPage="pager.current" 
        :downParams ="'downParams'"
        :regbuttonName="'전문 업로드'"
        :deletebuttonName="'삭제'"
        @changedPage="onChangedPage" 
        @onRegister="onRegister"
        @onDelete="onDelete"
    />
    <default-modal :is-show="state.modalType" :modal-title="'빌드 요청'" :button-confirm="'확인'" :button-cancel="'취소'" :modal-name="'modalAlert'" @modalclose="modalClose">
        <template #modalcontent>
            <component :is="markRaw(BuildForm)" ref="buildFormRef" @modalClose="modalClose" />
        </template>
    </default-modal>
</template>

<script setup>
import { reactive, computed, nextTick, ref, onMounted,markRaw } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import sample from '@/views/sample/sample/example1.vue'
import BuildForm from '@/views/main/BuildForm.vue'
import { useCommFunc } from '@/_setting/helper';
const {  dayJS, goToPage } = useCommFunc();
// import { _getList } from '@/api/api.js';
// import { userInfoStore } from '@/stores/user/userInfoStore'
// const { userInfo } = storeToRefs(userInfoStore)
const router = useRouter();
const route = useRoute();
const props = defineProps({
  propsName: {
    type: Object,
    default: () => {},
  },
});
const emits = defineEmits([''])
const buildFormRef = ref()
const state = reactive({
    groupname:'',
    prname:'',
    pageList: [],
    pagesize: 10,
    modalType:false,
    value: [
        { headerName: '번호', valueGetter: 'node.rowIndex + 1',  maxWidth: 80 },
        { headerCheckboxSelection: true, checkboxSelection: true, maxWidth: 30 },
        // { headerName: '전문ID',  field: 'groupname',  maxWidth: 120 },
        { headerName: '전문ID',  field: 'prname', flex: 1,
            cellRenderer: (params) => {
                const tagString = `<div id="prname-${params.node.rowIndex}"><a href="javascript:void(0)" class="link">${params.data.prname}</a></div>`;
                const tagTarget = document.createElement('div');
                tagTarget.innerHTML = tagString;
                const buttonEventTarget = tagTarget.querySelector(`#prname-${params.node.rowIndex}`);
                buttonEventTarget.addEventListener('click', (event) => {
                    goToPage('/builddetail?viewId=' + params.node.rowIndex);
                
                });
                return tagTarget;
            }
        },
        { headerName: '전달일시',  field: 'prenname', flex: 1, suppressSizeToFit: true },
        { headerName: '결과코드',  field: 'prtype',  flex:1},
        { headerName: '업무코드',  field: 'code',  flex:1},
        { headerName: '등록자',  field: 'register',  flex:1},
        { headerName: '등록일',  field: 'date',  flex:1},
        
        // { headerName: '전달 일시',  field: 'register', flex: 1 },
        // { headerName: '등록일',  field: 'date', flex: 1 },
        // { headerName: '빌드',  field: 'url', maxWidth: 100, 
        //     cellRenderer: (params) => {
        //         const tagString = `<div id="url-${params.node.rowIndex}"><button type="button" class="btn btn-ss">요청</button></div>`;
        //         const tagTarget = document.createElement('div');
        //         tagTarget.innerHTML = tagString;
        //         const buttonEventTarget = tagTarget.querySelector(`#url-${params.node.rowIndex}`);
        //         buttonEventTarget.addEventListener('click', (event) => {
        //             console.log(params.data.url);
        //             openModal();
                
        //         });
        //         return tagTarget;
        //     }
        // },
        // { headerName: '이력',  field: 'view', maxWidth: 100, 
        //     cellRenderer: (params) => {
        //         const tagString = `<div id="url-${params.node.rowIndex}"><button type="button" class="btn btn-ss">보기</button></div>`;
        //         const tagTarget = document.createElement('div');
        //         tagTarget.innerHTML = tagString;
        //         return tagTarget;
        //     }
        // },
    ],
    rowData: [
        {
            
            prname: 'WCZ75A11751_I',
            prenname: '2025-04-27 13:22:14',
            register: '김국민',
            date: '2025-04-27 13:22:14',
            prtype: '200',
            code: 'KB1010',
        },
        {
            
            prname: 'WCZ75A11751_I',
            prenname: '2025-04-27 13:22:14',
            register: '김국민',
            date: '2025-04-27 13:22:14',
            prtype: '200',
            code: 'KB1010',
        },
        {
            
            prname: 'WCZ75A11751_I',
            prenname: '2025-04-27 13:22:14',
            register: '김국민',
            date: '2025-04-27 13:22:14',
            prtype: '200',
            code: 'KB1010',
        },
        
    ],
    defaultColDef: {
        sortable: false,
        filter: false,
        resizable: false,
        headerClass: 'centered',
        cellClass: 'centered',
        flex: 1
    },
    dayOpionType: 'month',
    dataChange:false,
})
const datepicker = ref(null);
const  selectDay = (fromDay, toDay) => {
    console.log(dayJS(fromDay).format('YYYY-MM-DD'), dayJS(toDay).format('YYYY-MM-DD'));
};
const pager = reactive({
    current: 1,
    currentPageSize: 0,
    size: state.pagesize,
    offset: computed(() => (pager.current - 1) * pager.size),
    totalCnt: 0
});


// const loadList = async () => {
//     try {
//         const params ={
//             user_id: userInfo.value.user_id,
//             page: pager.current,
//             size: pager.size,
//         }
//         const response = await _getList(params);
//         if(response.status === 200) {
//             state.pageList = response.data.data.list;
//             pager.totalCnt = response.data.data.totalCnt;
//             console.log(response.data)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// onMounted(() => {
//     loadList();
// })
// watch(
//   () => props,
//   () => {
//     console.log('>> watch props')
    
//   },
// )
const openModal = () => {
    state.modalType = true;
}
const openAlert = () => {
   
}
const openSample = () => {
    router.push('/sample');
}
const modalClose =  async (type, name) => {
    console.log(type, name);
    if(type === 'modalconfirm'){
        buildFormRef.value?.editChange();

   
    }else{
        state.modalType = false;
    }
}
const onChangedPage = (num) => {
    pager.current = num;
    //테이블 인덱스 번호 처리
    state.value[1].valueGetter = 'node.rowIndex + ' + Number(pager.size * (pager.current - 1) + 1);
    //api호출
    getNoticeList();
};
const onRegister = () => {
    console.log('등록');
}
const onDelete = () => {
    console.log('삭제');
}

</script>
