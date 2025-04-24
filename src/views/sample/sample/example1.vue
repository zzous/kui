<template>
    <div class="guidecontent">
        <div class="guidetitle">{{ sampleProps?.title }}
            <button type="button" class="btn-sample" @click="goToPage('/boxlayout')">샘플페이지 보기</button>
        </div>
        <div class="guidememo">
            <div class="memotitle">모달</div>
            <ul class="memolist">
                <li>alert의 경우 함수만 사용</li>
                <li>일반 모달의 경우<strong class="tagstyle"> DefaultModa</strong>l 컴포넌트 사용</li>
                
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
            sampleCodeJS: `<default-modal :is-show="true" :modal-title="'알림'" :button-confirm="'확인'" :button-cancel="'취소'" :modal-name="'modalAlert'" @modalclose="modalClose">
    <template #modalcontent>
        <component :is="markRaw(sample)"  /> || 직접 태그 작성
    </template>
</default-modal>`
        }, 
        {
            title: 'JS',
            sampleCodeJS: `
/** alert  */
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
/** 버튼 이벤트 처리 */
.then(success => {
    console.log(success);
    alert('확인');
})
.catch(error => {
    console.log(error);
});
/** 모달 닫기 이벤트 처리 type, name 파라미터 사용
@params type: 버튼 타입, name: 모달 이름
*/
const modalClose = (type, name) => {
    console.log(type, name);
    if(type === 'modalconfirm'){
        //확인 버튼 후 이벤트 처리
    });
    }else{
        state.modalType = false;
    }
}`  
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

