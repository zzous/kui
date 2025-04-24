<template>
    <div class="guidecontent">
        <div class="guidetitle">{{ sampleProps.title }}
            <button type="button" class="btn-sample" @click="goToPage('/boxlayout')">샘플페이지 보기</button>
        </div>
        <div class="guidememo">
            <div class="memotitle">기본 템플릿</div>
            <ul class="memolist">
                <li>템플릿 기본 구조</li>
                
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
            sampleCodeJS: `<template>
    <div>
        페이지 내용
    </div>
</template>`
        },
        
        {
            title: 'JS',
            sampleCodeJS: `import { reactive, computed, nextTick, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import { _getList } from '@/api/api.js';
import { userInfoStore } from '@/stores/user/userInfoStore'
const { userInfo } = storeToRefs(userInfoStore)
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
})
const pager = reactive({
    current: 1,
    currentPageSize: 0,
    size: state.pagesize,
    offset: computed(() => (pager.current - 1) * pager.size),
    totalCnt: 0
});
const loadList = async () => {
    try {
        const params ={
            user_id: userInfo.value.user_id,
            page: pager.current,
            size: pager.size,
        }
        const response = await _getList(params);
        if(response.status === 200) {
            state.pageList = response.data.data.list;
            pager.totalCnt = response.data.data.totalCnt;
            console.log(response.data)
        }
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => {
    loadList();
})
watch(
  () => props,
  () => {
    console.log('>> watch props')
    
  },
)`  
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

