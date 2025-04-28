import{r as f,h as a,f as r,g as e,x as i,t as n,F as v,j as C,n as p}from"./index-B3vYExlh.js";const S={class:"guidecontent"},b={class:"guidetitle"},y=["onClick"],L=["onClick"],k={__name:"example0",props:{sampleProps:{type:Object,default:()=>{}}},setup(u){const l=f({className:"",codeSample:[{title:"HTML",sampleCodeJS:`<template>
    <div>
        페이지 내용
    </div>
</template>`},{title:"JS",sampleCodeJS:`import { reactive, computed, nextTick, ref, onMounted } from 'vue';
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
)`}]}),d=s=>{const t=document.getElementsByClassName("codewrap");t[s].classList.contains("up")?t[s].classList.remove("up"):t[s].classList.add("up")},m=s=>{navigator.clipboard.writeText(s).then(()=>{alert("코드가 클립보드에 복사되었습니다.")}).catch(t=>{console.error("클립보드 복사 실패:",t),alert("클립보드 복사에 실패했습니다.")})};return(s,t)=>(r(),a("div",S,[e("div",b,[i(n(u.sampleProps.title)+" ",1),e("button",{type:"button",class:"btn-sample",onClick:t[0]||(t[0]=o=>s.goToPage("/boxlayout"))},"샘플페이지 보기")]),t[2]||(t[2]=e("div",{class:"guidememo"},[e("div",{class:"memotitle"},"기본 템플릿"),e("ul",{class:"memolist"},[e("li",null,"템플릿 기본 구조")])],-1)),(r(!0),a(v,null,C(l.codeSample,(o,c)=>(r(),a("div",{class:"codewrap",key:c},[e("div",{class:p(["codetitle",l.className])},[e("span",{onClick:g=>d(c)},n(o.title),9,y),e("button",{type:"button",class:"btn btn-ss",onClick:g=>m(o.sampleCodeJS)},t[1]||(t[1]=[e("span",{class:"ico-menu"},null,-1),i(" 복사하기")]),8,L)],2),e("div",{class:p(["code",o.title])},[e("pre",null,[e("code",null,n(o.sampleCodeJS),1)])],2)]))),128))]))}};export{k as default};
