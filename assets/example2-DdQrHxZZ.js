import{r as y,g as s,e as o,f as t,i as C,x as c,t as r,F as v,j as h,n as g}from"./index-gMtSF8o1.js";const b={class:"guidecontent"},x={class:"guidetitle"},N=["onClick"],S=["onClick"],P={__name:"example2",props:{sampleProps:{type:Object,default:()=>{}}},setup(u){const n=y({className:"",codeSample:[{title:"HTML",sampleCodeJS:`<ListTable 
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
/>`},{title:"JS",sampleCodeJS:`const state = reactive({
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
};`}]}),m=a=>{const e=document.getElementsByClassName("codewrap");e[a].classList.contains("up")?e[a].classList.remove("up"):e[a].classList.add("up")},p=a=>{navigator.clipboard.writeText(a).then(()=>{alert("코드가 클립보드에 복사되었습니다.")}).catch(e=>{console.error("클립보드 복사 실패:",e),alert("클립보드 복사에 실패했습니다.")})};return(a,e)=>{var d;return o(),s("div",b,[t("div",x,[c(r((d=u.sampleProps)==null?void 0:d.title)+" ",1),t("button",{type:"button",class:"btn-sample",onClick:e[0]||(e[0]=l=>a.goToPage("/boxlayout"))},"샘플페이지 보기")]),e[2]||(e[2]=C('<div class="guidememo"><div class="memotitle">리스트 테이블(ag-grid)</div><ul class="memolist"><li><strong class="tagstyle">selected: </strong>페이징 처리를 위한 셀렉트 박스 사용 여부 default: false</li><li><strong class="tagstyle">download:</strong> 파일 다운로드 버튼 사용 여부 default: false</li><li><strong class="tagstyle">downParams:</strong> 파일 다운로드 파라미터 객체 default: {}</li><li><strong class="tagstyle">rowData:</strong> 테이블 데이터 객체 default: []</li><li><strong class="tagstyle">totalCnt:</strong> 총 데이터 개수 default: 0</li><li><strong class="tagstyle">columnDefs:</strong> 테이블 컬럼 정의 객체 default: []</li><li><strong class="tagstyle">defaultColDef:</strong> 테이블 컬럼 기본 정의 객체 default: {}</li><li><strong class="tagstyle">domLayout:</strong> 테이블 레이아웃 타입 default: &#39;autoHeight&#39;</li><li><strong class="tagstyle">cntPerPage:</strong> 페이지당 데이터 개수 default: 10</li><li><strong class="tagstyle">itemCount:</strong> 총 데이터 개수 default: 0</li><li><strong class="tagstyle">currentPage:</strong> 현재 페이지 번호 default: 1</li><li><strong class="tagstyle">onChangedPage:</strong> 페이지 변경 이벤트 함수 default: () =&gt; {}</li><li>테이블내에 커스텀이 필요한 경우 cellRenderer 함수를 사용하여 이벤트까지 처리 할 수 있음</li></ul></div>',1)),(o(!0),s(v,null,h(n.codeSample,(l,i)=>(o(),s("div",{class:"codewrap",key:i},[t("div",{class:g(["codetitle",n.className])},[t("span",{onClick:f=>m(i)},r(l.title),9,N),t("button",{type:"button",class:"btn btn-ss",onClick:f=>p(l.sampleCodeJS)},e[1]||(e[1]=[t("span",{class:"ico-menu"},null,-1),c(" 복사하기")]),8,S)],2),t("div",{class:g(["code",l.title])},[t("pre",null,[t("code",null,r(l.sampleCodeJS),1)])],2)]))),128))])}}};export{P as default};
