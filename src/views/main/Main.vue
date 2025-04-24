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
            <div class="item">
                <label>키워드 검색</label>
                <div class="input">
                    <div class="dv"><input type="text" class="form-control" placeholder="키워드를 검색 하세요" style="width:360px;"/></div>
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
    <template v-if="false">
        <div class="ui-editor">
            <div id="editor" class="editor_container">
                <CKEditor :model-value="state.ctsTxt" :editor="ClassicEditor" />
            </div>
        </div>
        <div style="background-color: #f7f7f7; text-align: center;">
            <ChartPie ref="chartpieRef" :data-sets="state.chartPie.datasets" :labels="state.chartPie.label" :options="state.chartPie.options"></ChartPie>
        </div>
        <div style="background-color: #f7f7f7; text-align: center; margin-top:20px">
            <ChartBar ref="chartbarRef" :data-sets="state.chartBar.datasets" :labels="state.chartBar.label" :options="state.chartBar.options"></ChartBar>
        </div>
        <div style="background-color: #f7f7f7; text-align: center;margin-top:20px">
            <ChartBubble ref="chartbubbleRef" :data-sets="state.chartBubble.datasets" :labels="state.chartBubble.label" :options="state.chartBubble.options"></ChartBubble>
        </div>
        <div style="background-color: #f7f7f7; text-align: center;margin-top:20px">
            <ChartLine ref="chartlineRef" :data-sets="state.chartLine.datasets" :labels="state.chartLine.label" :options="state.chartLine.options"></ChartLine>
        </div>
        <div style="background-color: #f7f7f7; text-align: center;margin-top:20px; min-height: 300px;position: relative;
        height: calc(100% - 31px);
        min-height: 300px;">
            <div class="ui-chart" style="position: absolute;
        top: 50px;
        left: 20px;
        right: 20px;
        bottom: 20px;">
                    <!-- <div style="height: 260px; line-height: 260px; background-color: #f7f7f7; text-align: center;">바차트영역</div> -->
                    <div class="ui-bar-chart">
                        <div class="ui-bar-y">
                            <strong class="unit">(천원)</strong>
                            <ul class="ui-bar-y-unit">
                                <li>{{ formatNumberZero(Math.floor(state.salesStatMax * .8 / 1000).toLocaleString()) }}</li>
                                <li>{{ formatNumberZero(Math.floor(state.salesStatMax * .6 / 1000).toLocaleString()) }}</li>
                                <li>{{ formatNumberZero(Math.floor(state.salesStatMax * .4 / 1000).toLocaleString()) }}</li>
                                <li>{{ formatNumberZero(Math.floor(state.salesStatMax * .2 / 1000).toLocaleString()) }}</li>
                                <!-- <li>4,000</li>
                                <li>3,000</li>
                                <li>2,000</li>
                                <li>1,000</li> -->
                                <li>0</li>
                            </ul>
                        </div>
                        <div class="ui-bar-x">
                            <strong class="unit">({{ state.salesStatStandard === 'day' ? '일' : '월' }})</strong>
                            <ul class="ui-bar-x-unit">
                                <li v-for="(item, index) in state.salesStat" :key="index">
                                    <span class="bar" :style="`height: ${getStatHeight(item.price)}%;`">
                                        <span class="bar-tooltip">
                                            <span class="t-date">{{ dayJS(item.date).format('M월D일') }}</span>
                                            <span class="t-count">{{ item.count }}건</span>
                                            <strong class="t-sales-num">{{ Number(item.price).toLocaleString() }}원</strong>
                                        </span>
                                    </span>
                                    <span class="x-value">{{ state.salesStatStandard === 'day' ? dayJS(item.date).format('D') : dayJS(item.date).format('M') }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="ui-bar-g"></div>
                    </div>
                </div>
        </div>
    </template>
    <default-modal :is-show="state.modalType" :modal-title="'알림'" :button-confirm="'확인'" :button-cancel="'취소'" :modal-name="'modalAlert'" @modalclose="modalClose">
        <template #modalcontent>
            <component :is="markRaw(sample)"  />
        </template>
    </default-modal>
</template>

<script setup>
import { reactive, computed, nextTick, ref, onMounted, markRaw, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import sample from '@/views/sample/sample/example1.vue'
import { useCommFunc } from '@/_setting/helper';
import { initializeEditor } from '@/_setting/ckeditor';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import * as _ from 'lodash-es'
const {  dayJS, goToPage, chartColorSet } = useCommFunc();
// import { useCommonStore } from '@/stores/common/common';    
// const commonStore = useCommonStore();
// const { value } = storeToRefs(commonStore);
// import { _getList } from '@/api/api.js';
const router = useRouter();
const route = useRoute();


const props = defineProps({
  propsName: {
    type: Object,
    default: () => {},
  },
});
const emits = defineEmits([''])
const chartpieRef = ref(null);
const chartbarRef = ref(null);
const state = reactive({
    ckeditor: ClassicEditor, 
    clusCts:'',
    pageList: [],
    pagesize: 10,
    modalType:false,
    value: [
        { headerCheckboxSelection: true, checkboxSelection: true, maxWidth: 30 },
        { headerName: '서비스 그룹명',  field: 'groupname',  maxWidth: 120,
           
        },
        { headerName: '프로젝트 명',  field: 'prname', flex: 1,
            cellRenderer: (params) => {
                const tagString = `<div id="prname-${params.node.rowIndex}"><a href="javascript:void(0)" class="link">${params.data.prname}</a></div>`;
                const tagTarget = document.createElement('div');
                tagTarget.innerHTML = tagString;
                const buttonEventTarget = tagTarget.querySelector(`#prname-${params.node.rowIndex}`);
                buttonEventTarget.addEventListener('click', (event) => {
                    goToPage('/main/mainview');
                
                });
                return tagTarget;
            }
        },
        { headerName: '프로젝트 영문명',  field: 'prenname', flex: 1, suppressSizeToFit: true },
        { headerName: '프로젝트 유형',  field: 'prtype',  flex:1},
        { headerName: '설명',  field: 'description', flex: 1 },
        { headerName: '등록자',  field: 'register', flex: 1 },
        { headerName: '등록일',  field: 'date', flex: 1 },
        { headerName: 'Git Url',  field: 'url', flex: 1 , 
            cellRenderer: (params) => {
                const tagString = `<div id="url-${params.node.rowIndex}"><button type="button" class="btn btn-ss">복사</button></div>`;
                const tagTarget = document.createElement('div');
                tagTarget.innerHTML = tagString;
                const buttonEventTarget = tagTarget.querySelector(`#url-${params.node.rowIndex}`);
                buttonEventTarget.addEventListener('click', (event) => {
                    console.log(params.data.url);
                    $Modal.simple({
                        message: `${params.data.url} 이 복사 되었습니다.`,
                        type: 'modalAlert',
                        closeButtonHide: true,
                        className:'confirm',
                        buttonText: {
                            ok: '확인',
                            cancel: '취소',
                        }
                    })
                
                });
                return tagTarget;
            }
        },
    ],
    rowData: [
        {
            groupname: 'AlHub',
            prname: '스프링부트 메이븐 2',
            prename: 'springboot-maven-2',
            prtype: 'springboot Basic',
            description: 'springboot-maven',
            register: '김용국',
            url: 'ds:///vmfs/volumes/644b6776-36b209...',
            date: '2023.04.12 13:22:14'
        },
        {
            groupname: 'AlHub',
            prname: '스프링부트 메이븐 2',
            prename: 'springboot-maven-2',
            prtype: 'springboot Basic',
            description: 'springboot-maven',
            register: '김용국',
            url: 'ds:///vmfs/volumes/644b6776-36b209...',
            date: '2023.04.12 13:22:14'
        },
        {
            groupname: 'AlHub',
            prname: '스프링부트 메이븐 2',
            prename: 'springboot-maven-2',
            prtype: 'springboot Basic',
            description: 'springboot-maven',
            register: '김용국',
            url: 'ds:///vmfs/volumes/644b6776-36b209...',
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
    chartPie: {
        label: [],
        datasets: [],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                datalabels: {
                    formatter: (value) => {
                        return value;
                    }
                }
            }
        }
    },
    chartBar: {
        label: [],
        datasets: [],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    display: false,
                    position: 'left',
                    title: {
                        display: true,
                        text: '회원수'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    position: 'bottom'
                },
                datalabels: {
                    formatter: (value) => {
                        return value;
                    }
                }
            },
            elements: {
                bar: {
                    backgroundColor: Object.values(chartColorSet)
                }
            }
        }
    },
    chartBubble: {
        label: [],
        datasets: [],
        options: {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                x: {
                    type: 'linear',
                    display: false,
                    min: 0,
                    max: 50
                },
                y: {
                    type: 'linear',
                    display: false,
                    min: 0,
                    max: 60
                }
            },
            plugins: {
                legend: {
                    display: false
                }
                // datalabels: {
                //     formatter: (value) => {
                //         return value;
                //     }
                // }
            }
        }
    },
    chartLine: {
        label: [],
        datasets: [],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 30
                }
            },
            
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    // position: 'left',
                    // title: {
                    //     display: false
                    // }
                    grid: {
                        drawOnChartArea: false
                    },
                    // scaleGrace: {
                    //     top: '30%',
                    //     bottom: 0
                    // },
                    grace: '50',
                    min: 0,
                    ticks: {
                        min: 0,
                        font: {
                            family: 'KBFGText',
                            size: 14,
                            style: 'normal'
                        },
                        beginAtZero: true,
                        callback: (value, index, ticks) => {
                            // console.log('test', ticks);
                            return (index === ticks.length - 1) ? '(명)' : value;
                        }
                    }
                },
                x: {
                    grid: {
                        drawOnChartArea: false
                    },
                    beginAtZero: true,
                    ticks: {
                        font: {
                            family: 'KBFGText',
                            size: 14,
                            style: 'normal'
                        }
                        // callback: (value, index, ticks) => {
                        //     console.log('test', value, index, ticks);
                        //     return (index === ticks.length - 1) ? '(일)' : value;
                        // }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // 범례 표시
                },
                datalabels: {
                    formatter: (value) => {
                        return '';
                    }
                }
            }
        }
    },
    salesStat: [],
    salesStatMax: '',
    salesStatStandard: 'day' // state 기준 ( day | month )
})
const getActivityMember = () => {
    try {
        const params = {};
        const response = { // temp
            labels: ['구매 회원수', '최근 30일 활동 회원수'],
            data: [300, 8000]
        };

        state.chartPie.label = response.labels;
        state.chartPie.datasets = [response];
        ChartPie.value.chartResize();
    } catch (error) {
        console.log(error);
    }
};
/**
 * @get line chart data ( 월 활동 회원수 )
 * @type day | month
 */
const getActivitySeller = () => {
try {
    const params = {};
    let response = null; // temp
    response = [ // temp
        {xAxis: '상품 판매', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]},
        {xAxis: '프로그램 판매', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]},
        {xAxis: '상품&프로그램 판매', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]}
    ];
    state.chartBar.label = response.map(d => d.xAxis);
    state.chartBar.datasets = [
        { data: [40, 20, 30] }
    ];
    ChartBar.value.chartResize();
} catch (error) {
    console.log(error);
}
};
/*
* @get bubble chart data ( TOP SELLER )
* @type day | month
*/
const getTopSeller = () => {
try {
    const params = {};
    let response = null; // temp
    response = [ // temp
        {xAxis: '상품 판매', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]},
        {xAxis: '프로그램 판매', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]},
        {xAxis: '상품&프로그램 판매', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]}
    ];
    state.chartBubble.label = response.map(d => d.xAxis);
    state.chartBubble.datasets = [
        { data: [{x: 10, y: 25, r: 15}], backgroundColor: chartColorSet.blue },
        { data: [{x: 20, y: 30, r: 65}], backgroundColor: chartColorSet.red },
        { data: [{x: 30, y: 20, r: 45}], backgroundColor: chartColorSet.green },
        { data: [{x: 40, y: 15, r: 25}], backgroundColor: chartColorSet.orange }
    ];
    // ChartBar.value.chartResize();
} catch (error) {
    console.log(error);
}
};
/**
 * @get line chart data ( 월 활동 회원수 )
 * @type day | month
 */
const getMonthActivityMember = () => {
    try {
        const params = {};
        let response = null; // temp
        if (state.activityMemberStandard === 'month') {
            response = [ // temp
                {xAxis: '2023-10', yAxis: [{pnt_tot: '0', pnt_mbr: '0', rem_cnt: '0', pnt_rat: '0.00'}]},
                {xAxis: '2023-11', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]},
                {xAxis: '2023-12', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]},
                {xAxis: '2024-01', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]}
            ];
        } else {
            response = [ // temp
                {xAxis: '2023-12-03', yAxis: [{pnt_tot: '0', pnt_mbr: '0', rem_cnt: '0', pnt_rat: '0.00'}]},
                {xAxis: '2023-12-04', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]},
                {xAxis: '2023-12-05', yAxis: [{pnt_tot: '150', pnt_mbr: '1', rem_cnt: '13', pnt_rat: '7.69'}]}
            ];
        }
        state.chartLine.label = response.map(d => d.xAxis);
        state.chartLine.datasets = [{
            data: response.map(item => item.yAxis[0].pnt_tot),
            type: 'line'
        }];
    } catch (error) {
        console.log(error);
    }
};
 /**
 * @get salesStat
 */
const getSalesStat = () => {
    try {
        const params = {
            // stat standard
            standard: state.salesStatStandard
        };
        const response = state.salesStatStandard === 'day' ?
            [ // day
                { date: '2024-01-01', count: '87', price: '3536150' },
                { date: '2024-01-02', count: '187', price: '1736150' },
                { date: '2024-01-03', count: '47', price: '2536150' },
                { date: '2024-01-04', count: '72', price: '836150' },
                { date: '2024-01-05', count: '46', price: '2536150' },
                { date: '2024-01-06', count: '12', price: '2236150' },
                { date: '2024-01-07', count: '3', price: '3236150' },
                { date: '2024-01-08', count: '17', price: '1536150' },
                { date: '2024-01-09', count: '92', price: '536150' },
                { date: '2024-01-10', count: '136', price: '1536150' },
                { date: '2024-01-11', count: '87', price: '3536150' },
                { date: '2024-01-12', count: '187', price: '1736150' },
                { date: '2024-01-13', count: '47', price: '2536150' }
            ] : [ // month
                { date: '2024-01', count: '187', price: '135361520' },
                { date: '2024-02', count: '387', price: '27361520' },
                { date: '2024-03', count: '347', price: '65361520' },
                { date: '2024-04', count: '272', price: '8361520' },
                { date: '2024-05', count: '546', price: '53601520' },
                { date: '2024-06', count: '312', price: '22361520' },
                { date: '2024-07', count: '153', price: '32361520' },
                { date: '2024-08', count: '217', price: '15361520' },
                { date: '2024-09', count: '392', price: '15361520' },
                { date: '2024-10', count: '336', price: '25361520' },
                { date: '2024-11', count: '287', price: '115361520' },
                { date: '2024-12', count: '487', price: '107361520' }
            ];
        state.salesStat = response;
        state.salesStatMax = Math.max(...state.salesStat.map(d => d.price));
        console.log(state.salesStatMax);
    } catch (error) {
        console.log(error);
    }
};
/**
 * salesStat max 값 비율 height (%) 구하기
 * @max state.salesStatMax
 */
    const getStatHeight = (value) => {
    const percentage = (value / state.salesStatMax) * 100;
    return percentage;
};

/**
 * format number width zero
 * @toLocaleString 이후 첫번째 , 이후 자리 0 으로 변환
 */
    const formatNumberZero = (price) => {
    let formatNumber = price;
    const parts = price.split(',');
    if (parts.length > 1) {
        const firstPart = parts[1] > 100 ? Math.floor(parts[1] / 100) * 100 : '000'; // parts[1].padEnd(3, '0'); // Math.round(parts[1] / 100) * 100;
        formatNumber = `${parts[0]},${firstPart}`;
        // console.log(price, parts[1], parts[1].padEnd(1, '0'));
    }
    return formatNumber;
};
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
//     console.log('loadList');
    // try {
    //     const params ={
    //         user_id: userInfo.value.user_id,
    //         page: pager.current,
    //         size: pager.size,
    //     }
    //     const response = await _getList(params);
    //     if(response.status === 200) {
    //         state.pageList = response.data.data.list;
    //         pager.totalCnt = response.data.data.totalCnt;
    //         console.log(response.data)
    //     }
    // } catch (error) {
    //     console.log(error)
    // }
// }
// onMounted(() => {
//     loadList();
// })
watch(
  () => props,
  () => {
    console.log('>> watch props')
    
  },
)
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
let editor;
const getList = async () => {
    const response = await commonStore.getList();
    console.log(response);
}
onMounted(async () => {
    editor = await initializeEditor();
    console.log(editor);
    getActivityMember()
    getActivitySeller()
    getTopSeller()
    getMonthActivityMember()
    getSalesStat()
    getList()
})
</script>
