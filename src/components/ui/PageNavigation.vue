<template>
    <ul class="pagination">
        <li class="page-item first"><button type="button"  class="page-link" @click="onChangedPage(1, true)"><span class="offscreen">맨처음</span></button></li>
        <li class="page-item prev"><button type="button"  class="page-link" @click="onChangedPage((state.currentPageNo-1), true)" ><span class="offscreen">이전</span></button></li>
        <li class="page-item"
            :class="{active:num === state.currentPageNo}"
            v-for="(num, index) in state.countArrary" :key="index"
            @click="onChangedPage(num, true)"
        >
            <button type="button"  class="page-link" >{{num}}</button>
        </li>
        
        <li class="page-item next"><button type="button"  class="page-link" @click="onChangedPage((state.currentPageNo+1), true)"><span class="offscreen">다음</span></button></li>
        <li class="page-item last"><button type="button"  class="page-link"  @click="onChangedPage((state.pageCount), true)"><span class="offscreen">맨마직막</span></button></li>
    </ul>
</template>
<script setup>
import { getCurrentInstance, computed, reactive } from 'vue';
const props = defineProps(
    {
        itemCount: Number,
        cntPerPage: Number,
        pageSize: Number,
        currentPage: Number
    });

const emit = defineEmits(['changedPage']);
const state = reactive({
    countArrary: computed(() => getCounterView()), // paging view
    currentPageNo: computed(() => props.currentPage),
    itemCount: 0,
    pageCount: computed(() => {
        let cnt = parseInt('' + (props.itemCount - 1) / props.cntPerPage) + 1;
        return cnt;
    })
});
const getCounterView = () => {
    let first = 1;
    let last = props.currentPage;
    let gap = 0;
    let viewCouter = [];
    console.log('page cal > ', state.pageCount, props.currentPage);
    if (state.pageCount < 11) {
        first = 1;
        last = state.pageCount;
    } else {
        gap = (props.currentPage < 5) ? 5 - props.currentPage :
            (props.currentPage + 5 > state.pageCount) ? props.currentPage + 5 - state.pageCount : 0;
        first = (props.currentPage < 5) ? 1 : props.currentPage - 4 - gap;
        last =  (props.currentPage + 5 > state.pageCount) ? state.pageCount : props.currentPage + 5 + gap;
    }
    console.log(first, last);
    for (let i = first; i <= last; i++) {
        viewCouter.push(i);
    }
    return viewCouter;
};

const onChangedPage = (pageNo, eventFlag) => {
    if (pageNo <= 0) return;
    if (pageNo > state.pageCount) return;
    if (eventFlag) {
        emit('changedPage', pageNo);
    }
};
</script>