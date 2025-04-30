import{r as C,h as a,f as n,g as e,y as o,t as c,F as b,j as f,n as i}from"./index-Xzv2iPBS.js";const v={class:"guidecontent"},k={class:"guidetitle"},S=["onClick"],_=["onClick"],T={__name:"example1",props:{sampleProps:{type:Object,default:()=>{}}},setup(p){const m=C({className:"",codeSample:[{title:"HTML",sampleCodeJS:`<default-modal :is-show="true" :modal-title="'알림'" :button-confirm="'확인'" :button-cancel="'취소'" :modal-name="'modalAlert'" @modalclose="modalClose">
    <template #modalcontent>
        <component :is="markRaw(sample)"  /> || 직접 태그 작성
    </template>
</default-modal>`},{title:"JS",sampleCodeJS:`
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
}`}]}),u=s=>{const t=document.getElementsByClassName("codewrap");t[s].classList.contains("up")?t[s].classList.remove("up"):t[s].classList.add("up")},g=s=>{navigator.clipboard.writeText(s).then(()=>{alert("코드가 클립보드에 복사되었습니다.")}).catch(t=>{console.error("클립보드 복사 실패:",t),alert("클립보드 복사에 실패했습니다.")})};return(s,t)=>{var r;return n(),a("div",v,[e("div",k,[o(c((r=p.sampleProps)==null?void 0:r.title)+" ",1),e("button",{type:"button",class:"btn-sample",onClick:t[0]||(t[0]=l=>s.goToPage("/boxlayout"))},"샘플페이지 보기")]),t[2]||(t[2]=e("div",{class:"guidememo"},[e("div",{class:"memotitle"},"모달"),e("ul",{class:"memolist"},[e("li",null,"alert의 경우 함수만 사용"),e("li",null,[o("일반 모달의 경우"),e("strong",{class:"tagstyle"}," DefaultModa"),o("l 컴포넌트 사용")])])],-1)),(n(!0),a(b,null,f(m.codeSample,(l,d)=>(n(),a("div",{class:"codewrap",key:d},[e("div",{class:i(["codetitle",m.className])},[e("span",{onClick:y=>u(d)},c(l.title),9,S),e("button",{type:"button",class:"btn btn-ss",onClick:y=>g(l.sampleCodeJS)},t[1]||(t[1]=[e("span",{class:"ico-menu"},null,-1),o(" 복사하기")]),8,_)],2),e("div",{class:i(["code",l.title])},[e("pre",null,[e("code",null,c(l.sampleCodeJS),1)])],2)]))),128))])}}};export{T as default};
