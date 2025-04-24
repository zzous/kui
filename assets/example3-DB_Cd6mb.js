import{r as v,g as l,e as o,f as t,i as S,x as p,t as r,F as b,j as h,n as d}from"./index-B-C8b1y1.js";const k={class:"guidecontent"},C={class:"guidetitle"},T=["onClick"],x=["onClick"],f={__name:"example3",props:{sampleProps:{type:Object,default:()=>{}}},setup(m){const c=v({className:"",codeSample:[{title:"HTML",sampleCodeJS:`<SearchBox 
    :subTitle="'사용자 검색'"
    :placeholderText="'텍스트를 입력하세요'"
    :errorMessage="'error message'"
    @enterSearch="onEnterSearch"
>
    <template #picker>
        <DatePicker ref="datepicker" :dayOpionType=state.dayOpionType  @selectDay ="selectDay"/>
    </template>
</SearchBox>`},{title:"JS",sampleCodeJS:`/** 검색 박스 이벤트 처리 
    @param {string} searchKeyWord 검색어
*/
const onEnterSearch = (searchKeyWord) => {
    console.log('onEnterSearch', searchKeyWord);
}`}]}),g=s=>{const e=document.getElementsByClassName("codewrap");e[s].classList.contains("up")?e[s].classList.remove("up"):e[s].classList.add("up")},u=s=>{navigator.clipboard.writeText(s).then(()=>{alert("코드가 클립보드에 복사되었습니다.")}).catch(e=>{console.error("클립보드 복사 실패:",e),alert("클립보드 복사에 실패했습니다.")})};return(s,e)=>{var n;return o(),l("div",k,[t("div",C,[p(r((n=m.sampleProps)==null?void 0:n.title)+" ",1),t("button",{type:"button",class:"btn-sample",onClick:e[0]||(e[0]=a=>s.goToPage("/boxlayout"))},"샘플페이지 보기")]),e[2]||(e[2]=S('<div class="guidememo"><div class="memotitle">검색 박스</div><ul class="memolist"><li><strong class="tagstyle">subTitle: </strong>검색 박스</li><li><strong class="tagstyle">placeholderText:</strong> 검색어 가이드</li><li><strong class="tagstyle">errorMessage:</strong>에러 메세지 처리</li><li><strong class="tagstyle">&lt;template #picker&gt;</strong>데이터 피커와 함께 사용 시 슬롯으로 사용</li></ul></div>',1)),(o(!0),l(b,null,h(c.codeSample,(a,i)=>(o(),l("div",{class:"codewrap",key:i},[t("div",{class:d(["codetitle",c.className])},[t("span",{onClick:y=>g(i)},r(a.title),9,T),t("button",{type:"button",class:"btn btn-ss",onClick:y=>u(a.sampleCodeJS)},e[1]||(e[1]=[t("span",{class:"ico-menu"},null,-1),p(" 복사하기")]),8,x)],2),t("div",{class:d(["code",a.title])},[t("pre",null,[t("code",null,r(a.sampleCodeJS),1)])],2)]))),128))])}}};export{f as default};
