<template>
    <div class="guidecontent">
        <div class="guidetitle">{{ sampleProps?.title }}
            <button type="button" class="btn-sample" @click="goToPage('/boxlayout')">샘플페이지 보기</button>
        </div>
        <div class="guidememo">
            <div class="memotitle">리스트 테이블(ag-grid)</div>
            <ul class="memolist">
                <li><strong class="tagstyle">selected: </strong>페이징 처리를 위한 셀렉트 박스 사용 여부 default: false</li>
                <li><strong class="tagstyle">download:</strong> 파일 다운로드 버튼 사용 여부 default: false</li>
                <li><strong class="tagstyle">downParams:</strong> 파일 다운로드 파라미터 객체 default: {}</li>
                <li><strong class="tagstyle">rowData:</strong> 테이블 데이터 객체 default: []</li>
                <li><strong class="tagstyle">totalCnt:</strong> 총 데이터 개수 default: 0</li>
                <li><strong class="tagstyle">columnDefs:</strong> 테이블 컬럼 정의 객체 default: []</li>
                <li><strong class="tagstyle">defaultColDef:</strong> 테이블 컬럼 기본 정의 객체 default: {}</li>
                <li><strong class="tagstyle">domLayout:</strong> 테이블 레이아웃 타입 default: 'autoHeight'</li>
                <li><strong class="tagstyle">cntPerPage:</strong> 페이지당 데이터 개수 default: 10</li>
                <li><strong class="tagstyle">itemCount:</strong> 총 데이터 개수 default: 0</li>
                <li><strong class="tagstyle">currentPage:</strong> 현재 페이지 번호 default: 1</li>
                <li><strong class="tagstyle">onChangedPage:</strong> 페이지 변경 이벤트 함수 default: () => {}</li>
                <li>테이블내에 커스텀이 필요한 경우 cellRenderer 함수를 사용하여 이벤트까지 처리 할 수 있음</li>
            </ul>
        </div>
        <div class="codewrap" v-for="(item, index) in state.codeSample" :key="index">
            <div :class="['codetitle', state.className]" >
                <span @click="toggleAcc(index)">{{item.title}}</span>
                <button type="button" class="btn btn-ss" @click="copyCode(item.sampleCodeJS)"> <span class="ico-menu"></span> 복사하기</button>
            </div>
            <div :class="['code', item.title]" >
<pre><code>{{ item.sampleCodeJS }}</code></pre>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineComponent, onMounted, reactive, computed, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
// import { useCommFunc } from '@/core/helper/common.js';
const props = defineProps({ 
    sampleProps: {
    type: Object,
    default: () => {},
} });
// const { goToPage } = useCommFunc();
const state = reactive({
    className: '',
    codeSample: [
        {
            title: 'HTML',
            sampleCodeJS: `<ListTable 
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
    @changedPage="onChangedPage" 
/>`
        }, 
        {
            title: 'JS',
            sampleCodeJS: `const state = reactive({
    pageList: [],
    pagesize: 10,
    modalType:false,
    value: [
        { headerCheckboxSelection: true, checkboxSelection: true, maxWidth: 30 },
        { headerName: '이름',  field: 'name', valueGetter: 'node.rowIndex + 1', maxWidth: 70 },
        { headerName: '클라우드타입',  field: 'cloudtype', flex: 1},
        { headerName: '접근가능여부',  field: 'abled', flex: 1, suppressSizeToFit: true },
        { headerName: '블록타입',  field: 'block',  maxWidth: 70},
        { headerName: '데이터센터',  field: 'data', flex: 1 },
        { headerName: '존',  field: 'zone', flex: 1 },
        { headerName: '위치',  field: 'positon', flex: 1 },
        { headerName: '스토리지용량',  field: 'storage', maxWidth: 100},
        { headerName: '가용스토리지',
            field: 'ablestorage',
            maxWidth: 220,
            cellRenderer: (params) => {커스텀 렌더러 사용 시 함수 작성 ex) return '<div>커스텀 렌더러</div>'},
        { headerName: '사용여부',
            field: 'usetype',
            flex: 1,
            maxWidth: 220,
            cellRenderer: (params) => { 커스텀 렌더러 사용 시 함수 작성 ex) return '<div>커스텀 렌더러</div>' }
        },
        { headerName: '동기화 일시',  field: 'synch', flex: 1 }
    ],
    rowData: [
        {
            name: 'DATASTORE1',
            cloudtype: '가동중',
            abled: '가능',
            block: 'SSD',
            data: 'DATACENTER NAME A',
            zone: 'Strato Internal Develo...Copy',
            positon: 'ds:///vmfs/volumes/644b6776-36b209...',
            storage: '2,408',
            ablestorage: '',
            usetype: '',
            synch: '2023.04.12 13:22:14'
        },
        {
            name: 'DATASTORE1',
            cloudtype: '가동중',
            abled: '가능',
            block: 'SSD',
            data: 'DATACENTER NAME A',
            zone: 'Strato Internal Develo...Copy',
            positon: 'ds:///vmfs/volumes/644b6776-36b209...',
            storage: '2,408',
            ablestorage: '',
            usetype: '',
            synch: '2023.04.12 13:22:14'
        }
    ],
    defaultColDef: {
        sortable: false,
        filter: false,
        resizable: false,
        headerClass: 'centered',
        cellClass: 'centered',
        flex: 1
    },
})
const pager = reactive({
    current: 1,
    currentPageSize: 0,
    size: state.pagesize,
    offset: computed(() => (pager.current - 1) * pager.size),
    totalCnt: 0
});
const onChangedPage = (num) => {
    pager.current = num;
    //테이블 인덱스 번호 처리
    state.value[1].valueGetter = 'node.rowIndex + ' + Number(pager.size * (pager.current - 1) + 1);
    //api호출
    getNoticeList();
};`  
  }
    ]
});

const toggleAcc = (idx) => {
    const tags = document.getElementsByClassName('codewrap');
    tags[idx].classList.contains('up') ? tags[idx].classList.remove('up') : tags[idx].classList.add('up');
};
const copyCode = (code) => {
    navigator.clipboard.writeText(code)
    .then(() => {
        alert('코드가 클립보드에 복사되었습니다.');
    })
    .catch((err) => {
        console.error('클립보드 복사 실패:', err);
        alert('클립보드 복사에 실패했습니다.');
    });
};

</script>

