<template>
    <div class="ui-section flex align-start">
        <div class="ui-section wp-30">
            <div class="ui-title-3"><h3>조직목록</h3></div>
            <div class="ui-content">
                <div class="ui-code-tree-wrap">
                    <div class="ui-code-tree-head">
                        <div class="ui-code-tree-search">
                            <span class="checkbox">
                                <input id="chk" name="chkGroup" type="checkbox">
                                <label for="chk">사용중인 조직만 보기</label>
                            </span>
                        </div>
                        <div class="ui-code-tree-btn-set">
                            <button type="button" class="btn btn-ss"><span class="ico-plus"></span>추가</button>
                            <button type="button" class="btn btn-ss"><span class="ico-minus"></span>삭제</button>
                            <button type="button" class="btn btn-ss">전체펼침<span class="ico-all-open right"></span></button>
                        </div>
                    </div>
                    <div class="ui-code-tree-list">
                        <div class="home">
                            <a href="#" class="target-home"><strong>ㅇㅇ기업</strong></a>
                        </div>
                        <ul class="ui-tree-list">
                            <!-- class: unfold, fold  -->
                            <li class="dep-item unfold" v-for="(item, index) in 10" :key="index">
                                <a href="#" class="target-item" @click="openTree($event)" ><span class="folder">{{ `${index}depth조직명` }}</span></a>
                                <ul class="dep">
                                    <li :class="`dep-item ${i === 0 ? 'unfold' : ''}`" v-for="(item, i) in 3" :key="i">
                                        <a href="#" class="target-item"><span>{{ `${index}depth -${i}depth조직명` }}</span></a>
                                        <ul class="dep" v-if="i === 0">
                                            <li class="dep-item unfold">
                                                <a href="#" class="target-item"><span class="folder">2depth 조직명</span></a>
                                                <ul class="dep">
                                                    <li class="dep-item">
                                                        <a href="#" class="target-item"><span>3depth 조직명</span></a>
                                                    </li>
                                                    <li class="dep-item">
                                                        <a href="#" class="target-item"><span>3depth 조직명</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                           
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui-section wp-70">
            <div class="ui-title-3">
                <h3>조직상세정보</h3>
                <span class="ml-20">좌측 트리영역에서 추가할 위치 선택 후, '추가'버튼 클릭 시 신규 메뉴 등록이 가능합니다.</span>
                <div class="abs">
                    <span class="ess"></span> 표시는 필수항목입니다.
                </div>
            </div>
            <div class="ui-content">
                <div class="tbl-wrap mt-10">
                    <table class="table reg">
                        <colgroup>
                            <col style="width: 120px;">
                            <col style="width: auto;">
                            <col style="width: 120px;">
                            <col style="width: auto;">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">상위조직ID</th>
                                <td>
                                    <div class="reg-group inline">
                                        <div class="reg-item">
                                            <input type="text" class="form-control" readonly="">
                                        </div>
                                    </div>
                                </td>
                                <th scope="row">조직ID</th>
                                <td>
                                    <div class="reg-group inline">
                                        <div class="reg-item">
                                            <input type="text" class="form-control" readonly="">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">조직명<span class="ess"><span class="offscreen">필수입력</span></span></th>
                                <td colspan="3">
                                    <div class="reg-group">
                                        <div class="reg-item">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">조직설명</th>
                                <td colspan="3">
                                    <div class="reg-group">
                                        <div class="reg-item">
                                            <textarea id="textarea" class="form-control" style="height: 100px"></textarea>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">사용여부<span class="ess"><span class="offscreen">필수입력</span></span></th>
                                <td colspan="3">
                                    <div class="reg-group">
                                        <div class="reg-item sg">
                                            <select class="custom-select">
                                                <option value="미사용" selected="">미사용</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="btn-bottom-set flex justify-center">
                <button type="button" class="btn btn-sl posi">저장</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, computed, nextTick, ref, onMounted,markRaw } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useCommFunc } from '@/_setting/helper';
const {  dayJS, goToPage } = useCommFunc();
const router = useRouter();
const route = useRoute();

const emits = defineEmits([''])
const state = reactive({
   
})
  // 트리 각각 active처리
const openTree = (event) => {
    let btntarget = event.target.parentElement.parentElement;
    if (btntarget.classList.contains('unfold')) {
        btntarget.classList.remove('unfold');
    } else {
        btntarget.classList.add('unfold');
    }
};

</script>
