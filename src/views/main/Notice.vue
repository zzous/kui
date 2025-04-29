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
            <div class="ui-data-filter-more">
                <div class="item">
                    <label>키워드 검색</label>
                    <div class="input">
                        <div class="dv"><input type="text" class="form-control" placeholder="키워드를 검색 하세요" style="width:200px; background:#fff"/></div>
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
        :regbuttonName="'생성'"
        :deletebuttonName="'삭제'"
        @changedPage="onChangedPage" 
        @onRegister="onRegister"
        @onDelete="onDelete"
    />
    <default-modal :is-show="state.modalType" :modal-title="'알림'" :button-confirm="'확인'" :button-cancel="'취소'" :modal-name="'modalAlert'" @modalclose="modalClose">
        <template #modalcontent>
            <component :is="markRaw(sample)"  />
        </template>
    </default-modal>
</template>

<script setup>
import { reactive, computed, nextTick, ref, onMounted,markRaw } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import sample from '@/views/sample/sample/example1.vue'
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
const state = reactive({
    pageList: [],
    pagesize: 10,
    modalType:false,
    value: [
        {
            headerName: '번호',
            field: 'no',
            maxWidth: 70,
            valueGetter: 'node.rowIndex + 1',
            suppressSizetoFit: true
        },
        { headerName: '구분',  field: 'catagory',  maxWidth: 120,},
        { headerName: '제목', field: 'title', flex:1, cellStyle: { textAlign: 'left' },
            cellRenderer: (params) => {
                const tagString = `<span id="file-${params.node.rowIndex}"><span class="ico-fix mr-5"></span><a href="javascript:void(0)" class="link">${params.data.title}</a><span class="ico-new ml-5"></span></span>`;
                const tagTarget = document.createElement('div');
                tagTarget.innerHTML = tagString;
            
                return tagTarget;
            }
                
        },
        { headerName: '첨부파일', field: 'file',   maxWidth: 150,
            cellRenderer: (params) => {
                const tagString = `<div id="file-${params.node.rowIndex}"><span class="ui-tag bc3">FILE</span></div>`;
                const tagTarget = document.createElement('div');
                tagTarget.innerHTML = tagString;
                
                return tagTarget;
            }
            
        },
        { headerName: '조회수', field: 'view',   maxWidth: 150, },
        { headerName: '등록일',  field: 'date',   maxWidth: 200,},
    ],
    rowData: [
        {
            catagory: '일반공지',
            title: '스프링부트 메이븐 2 공지 입니다.',
            file: 'springboot-maven-2',
            view: '000',
            date: '2023.04.12 13:22:14'
        },
        {
            catagory: '시스템 안내',
            title: '스프링부트 메이븐 2 공지 입니다.',
            file: 'springboot-maven-2',
            view: '000',
            date: '2023.04.12 13:22:14'
        },
        {
            catagory: '일반공지',
            title: '스프링부트 메이븐 2 공지 입니다.',
            file: 'springboot-maven-2',
            view: '000',
            date: '2023.04.12 13:22:14'
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
    $Modal.simple({
        message: 'alert 입니다',
        type: 'modalAlert',
        closeButtonHide: true,
        className:'confirm',
        buttonText: {
            ok: '확인',
            cancel: '취소',
        }
    })
    .then(success => {
        console.log(success);
       alert('확인');
    })
    .catch(error => {
        console.log(error);
    });
}
const openSample = () => {
    router.push('/sample');
}
const modalClose = (type, name) => {
    console.log(type, name);
    if(type === 'modalconfirm'){
        $Modal.simple({
        message: 'alert 입니다',
        type: 'modalAlert',
        closeButtonHide: true,
        className:'confirm',
        buttonText: {
            ok: '확인',
            cancel: '취소',
        }
    });
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
