<template>
    <div class="ui-section flex align-start">
        <div class="ui-section wp-30">
            <div class="ui-title-3"><h3>사용자</h3></div>
            <div class="ui-content">
                <ListTable 
                    :utils="false"
                    :selected="false"
                    :downLoad="false"
                    :rowData="state.rowData" 
                    :totalCnt="pager.totalCnt"
                    :columnDefs="state.value" 
                    :defaultColDef="state.defaultColDef" 
                    :domLayout="'autoHeight'"
                    :cntPerPage="pager.size" 
                    :itemCount="pager.totalCnt" 
                    :currentPage="pager.current" 
                    @changedPage="onChangedPage" 
                    @onRegister="onRegister"
                    @onDelete="onDelete"
                />
            </div>
        </div>
        <div class="ui-section wp-70">
            <div class="ui-title-3">
                <h3>메뉴목록</h3>
            </div>
            <div class="ui-content">
                <div class="tbl-wrap">
                    <div class="table-list">
                        <table class="table list">
                            <caption>메뉴목록</caption>
                            <colgroup>
                                <col style="width: 220px">
                                <col style="width: 360px">
                                <col style="width: auto">
                                <col style="width: 170px">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" class="t-left">
                                        <span class="checkbox">
                                            <input id="menuChk1" name="menuGroup" type="checkbox">
                                            <label for="menuChk1">메뉴명</label>
                                        </span>
                                    </th>
                                    <th scope="col">메뉴 권한</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="table-scroller">
                            <table class="table list">
                                <caption>메뉴목록</caption>
                                <colgroup>
                                    <col style="width: 220px">
                                    <col style="width: 360px">
                                    <col style="width: auto">
                                    <col style="width: 170px">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree">
                                                <span class="checkbox">
                                                    <input id="menuChk2" name="menuGroup" type="checkbox">
                                                    <label for="menuChk2">1뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="t-left">
                                            <!-- <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span> -->
                                            <span class="radio">
                                                <input id="authChk1-3" name="authorityGroup1" type="radio">
                                                <label for="authChk1-3">조회 가능</label>
                                            </span>
                                            <span class="radio">
                                                <input id="authChk1-4" name="authorityGroup1" type="radio">
                                                <label for="authChk1-4">조회 불가</label>
                                            </span>
                                            <!-- <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span> -->
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-2">
                                                <span class="checkbox">
                                                    <input id="menuChk3" name="menuGroup" type="checkbox">
                                                    <label for="menuChk3">2뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="t-left">
                                            <!-- <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span> -->
                                            <span class="radio">
                                                <input id="authChk1-5" name="authorityGroup2" type="radio">
                                                <label for="authChk1-5">조회 가능</label>
                                            </span>
                                            <span class="radio">
                                                <input id="authChk1-6" name="authorityGroup2" type="radio">
                                                <label for="authChk1-6">조회 불가</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup" type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="t-left">
                                            <!-- <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span> -->
                                            <span class="radio">
                                                <input id="authChk1-7" name="authorityGroup3" type="radio">
                                                <label for="authChk1-7">조회 가능</label>
                                            </span>
                                            <span class="radio">
                                                <input id="authChk1-8" name="authorityGroup3" type="radio">
                                                <label for="authChk1-8">조회 불가</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk5" name="menuGroup" type="checkbox">
                                                    <label for="menuChk5">3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="t-left">
                                            <!-- <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span> -->
                                            <span class="radio">
                                                <input id="authChk1-9" name="authorityGroup10" type="radio">
                                                <label for="authChk1-9">조회 가능</label>
                                            </span>
                                            <span class="radio">
                                                <input id="authChk1-10" name="authorityGroup10" type="radio">
                                                <label for="authChk1-10">조회 불가</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk6" name="menuGroup" type="checkbox">
                                                    <label for="menuChk6">3뎁스메뉴명3뎁스메뉴명3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="t-left">
                                            <!-- <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span> -->
                                            <span class="radio">
                                                <input id="authChk1-11" name="authorityGroup11" type="radio">
                                                <label for="authChk1-11">조회 가능</label>
                                            </span>
                                            <span class="radio">
                                                <input id="authChk1-12" name="authorityGroup11" type="radio">
                                                <label for="authChk1-12">조회 불가</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>

                                    <!-- <tr>
                                        <td class="t-left">
                                            <div class="menu-tree">
                                                <span class="checkbox">
                                                    <input id="menuChk7" name="menuGroup" type="checkbox">
                                                    <label for="menuChk7">1뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-2">
                                                <span class="checkbox">
                                                    <input id="menuChk3" name="menuGroup" type="checkbox">
                                                    <label for="menuChk3">2뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup" type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1" type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup" type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk2-1" name="authorityGroup2" type="checkbox">
                                                <label for="authChk2-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-2" name="authorityGroup2" type="checkbox">
                                                <label for="authChk2-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-3" name="authorityGroup2" type="checkbox">
                                                <label for="authChk2-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-4" name="authorityGroup2" type="checkbox">
                                                <label for="authChk2-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-5" name="authorityGroup2" type="checkbox">
                                                <label for="authChk2-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-6" name="authorityGroup2" type="checkbox">
                                                <label for="authChk2-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-7" name="authorityGroup2" type="checkbox">
                                                <label for="authChk2-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup" type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명3뎁스메뉴명3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk3-1" name="authorityGroup3" type="checkbox">
                                                <label for="authChk3-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-2" name="authorityGroup3" type="checkbox">
                                                <label for="authChk3-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-3" name="authorityGroup3" type="checkbox">
                                                <label for="authChk3-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-4" name="authorityGroup3" type="checkbox">
                                                <label for="authChk3-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-5" name="authorityGroup3" type="checkbox">
                                                <label for="authChk3-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-6" name="authorityGroup3" type="checkbox">
                                                <label for="authChk3-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-7" name="authorityGroup3" type="checkbox">
                                                <label for="authChk3-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="btn-bottom-set flex justify-center">
                    <button type="button" class="btn btn-sl posi">저장</button>
                </div>
            </div>
        </div>
    </div>
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
        { headerName: '레벨',  field: 'catagory',  maxWidth: 120,},
        { headerName: '아이디', field: 'title', flex:1, cellStyle: { textAlign: 'left' },},
        { headerName: '이름',  field: 'date',   maxWidth: 200,},
    ],
    rowData: [
        {
            catagory: 'Manager',
            title: 'Hong Gil Dong',
            date: '홍길동'
        },
        {
            catagory: 'Manager',
            title: 'Hong Gil Dong',
            date: '홍길동'
        },
        {
            catagory: 'Manager',
            title: 'Hong Gil Dong',
            date: '홍길동'
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
