<template>
    <div class="layout">
        <MainHeader />
        <div class="gnbHeader">
            <div class="gnbInner" >
                <ul>
                    <li v-for="(item, index) in state.menuList" :key="index" :class="{'active': (state.activeNum == index)}"> 
                        <span  @click="menuClick(index)" >{{item.label}}</span>
                        <ul v-if="item.submenu.length > 0">
                            <li v-for="(depth, i) in item.submenu" :key="i" :class="{'active': (state.submenuActive == i)}" > <span @click="menuClick(index, i)">{{depth.label}}</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pageTabs" v-if="state.pageTabs">
            <ul>
                <li v-for="(item, index) in state.pageTabs" :key="index">
                    <button type="button" class="tab-m"  :class="{'active': isTabActive(item)}">{{item.label}}</button>
                    <button type="button" class="close"><span class="offscreen">현재 콘텐츠 닫기</span></button>
                </li>
            </ul>
            <ul class="tab-list-control">
                <li><button type="button" class="prev"  @click="goToMove('prev')"><span class="offscreen">이전 탭으로 이동</span></button></li>
                <li><button type="button" class="next" @click="goToMove('next')"><span class="offscreen" >다음 탭으로 이동</span></button></li>
            </ul>
        </div>
        <!-- <button type="button" class="nav-toggle" @click="toggleNav"><span class="offscreen">메뉴숨기기</span></button> -->
        
        <div id="adminContainer">
            <MainMenu :menuList="state.menuList[state.activeNum]?.submenu[state.submenuNum].submenu" @gnbOpen="gnbOpen" v-if="state.activeMenu" />
            <div class="contents">
                <div>
                    <Location :locations="state.currentPage?.label" />
                    <div class="temp-section">
                        <RouterView  />
                    </div>
                </div>
            </div>
        </div>
        <div id="adminFooter"> ⓒ2023 KB. All rights Reserved</div>
    </div>
    <ConfirmModal />
</template>

<script setup>
import { watch, onMounted,reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';

import { storeToRefs } from 'pinia'
import ConfirmModal from '@/components/modal/ConfirmModal.vue';
import MainHeader from '@/components/layout/MainHeader.vue';
import MainMenu from '@/components/layout/MainMenu.vue';
import Location from '@/components/layout/Location.vue';
const router = useRouter();
const route = useRoute();
const emits = defineEmits([''])
const props = defineProps({
  id: {
    type: String,
    default: null,
  },
})
const state = reactive({
    activeNum:0,
    activeMenu:false,
    submenuActive:0,
    submenuNum:0,
    menuList:[
        // {label:'로그 관리', submenu:[], link:''},
        {label:'로그 관리', submenu:[
            {label:'거래 로그 조회', submenu:[
                {label:'거래 로그 조회1', submenu:[],link:'/main'},
                {label:'거래 로그 조회2', submenu:[],link:''},
            ],link:''},
            {label:'로그레벨조회', submenu:[],link:'/loglevel'},
            // {label:'배포 목록',submenu:[],link:''},
            // {label:'Pass Potal', submenu:[],link:''},
        ], link:''},
        {label:'전문 관리', submenu:[
            {label:'전문이력조회', submenu:[],link:'/buildlist'},
            // {label:'배포 목록',submenu:[],link:''},
            // {label:'Pass Potal', submenu:[],link:''},
        ], link:''},
        {label:'메뉴권한관리', submenu:[], link:'/authmanage'},
        // {label:'사용자권한관리', submenu:[], link:'authmanage'},
        {label:'사용자관리', submenu:[], link:'/orgmanage'},
        {label:'공지사항', submenu:[
            {label:'공지사항', link:'/notice', submenu:[]   },
            {label:'FAQ', link:'/faq', submenu:[]},
        ], link:''},
        {label:'로그인', submenu:[], link:'/login'},
        {label:'회원가입', submenu:[], link:'/member-join'},
        {label:'비밀번호 변경', submenu:[], link:'/change-pass'},
        
    ],
    currentPage:null,
    pageTabs:[],
})
const gnbOpen = (depth1, depth2, depth3) => {
    state.menuList.forEach((item, index) => {
         //depth1
        if (index === depth1) {
            if (item.submenu.length === 0) {
                router.push(item.link);
                // getMenuInfo(item);
            } else {
                item.isActive = true;
                item.submenu.forEach((list, i) => {
                    if (i === depth2) {
                        list.isActive = true;
                        if (list.submenu.length === 0) {
                            router.push(list.link);
                            // getMenuInfo(list);
                            console.log(list);

                        } else {
                            //depth3
                            list.submenu.forEach((listlast, idx) => {
                                if (idx === depth3) {
                                    listlast.isActive = true;
                                    //ums사이트 외부링크이동
                                    router.push(listlast.link);
                                        // getMenuInfo(listlast);
                                } else {
                                    listlast.isActive = false;
                                }
                            });
                        }
                    }else{
                        list.isActive = false;
                    }

                });
            }
        } else {
            item.isActive = false;
        }
    });
}
const menuClick = (index, i) => {
    state.activeNum = index; // 클릭 한  1depth 
    state.activeMenu = false // 3depth가 있는 경우 왼쪽 메뉴 추가
   // 1depth 메뉴 클릭
   if (typeof i === 'undefined' || i === null) {
        const menuItem = state.menuList[index];
        if (!menuItem) return;

        // submenu가 있으면 첫 번째 submenu만 추가
        if (menuItem.submenu && menuItem.submenu.length > 0) {
            const firstSub = menuItem.submenu[0];
            if (!state.pageTabs.some(tab => tab.label === firstSub.label)) {
                state.pageTabs.push(firstSub);
            }
            state.submenuActive = 0
            router.push(firstSub.link);
            
        } else {
            // submenu가 없으면 1depth 메뉴 추가
            if (!state.pageTabs.some(tab => tab.label === menuItem.label)) {
                state.pageTabs.push(menuItem);  
            }
            router.push(menuItem.link);
        }
        return;
    }
    
    // 2depth 메뉴 클릭
    const submenuItem = state.menuList[index]?.submenu[i];
    if (!submenuItem) return;
    // 3depth submenu가 있는지 확인
    if (submenuItem.submenu && submenuItem.submenu.length > 0) {
        state.activeMenu = true //3 depth가 있는 경우 왼쪽 메뉴 추가
        // 3depth의 첫 번째 메뉴 추가
        const firstThirdDepth = submenuItem.submenu[0];
        if (!state.pageTabs.some(tab => tab.label === submenuItem.label)) {
            state.pageTabs.push(submenuItem);
            
        }
        // 3depth의 첫 번째 메뉴 링크로 라우터 이동
        router.push(firstThirdDepth.link);
    } else {
        
        // 3depth가 없으면 2depth 메뉴 추가
        if (!state.pageTabs.some(tab => tab.label === submenuItem.label)) {
            state.pageTabs.push(submenuItem);
        }
        // 2depth 메뉴 링크로 라우터 이동
        router.push(submenuItem.link);
    }
    
    //active 처리 
 
    state.submenuActive = i
    state.submenuNum =i
}   

const isTabActive = computed(() => {
    return (item) => {
        console.log(item, state.currentPage.url, item.link)
        // 현재 라우트 경로
        const currentPath = state.currentPage.url;
        
        // 2depth가 없는 경우 (직접 link를 가진 경우)
        if (!item.submenu || item.submenu.length === 0) {
            return currentPath === item.link;
        }
        
        // 2depth가 있는 경우, submenu의 첫번째 항목의 link와 비교
        if (item.submenu && item.submenu.length > 0) {
            return currentPath === item.submenu[0].link;
        }
        
        return false;
    }
});
//상단 탭 prev, next
const goToMove = (type) => {
    let num;
    if (state.currentPage === '/main') {
        num = 0;
    } else {
        state.pageTabs.map((item, index) => {
            if (item.link === state.currentPage.url)
                num = index;
        });
        console.log(num)
    }

    if (type === 'prev') {
        if (num === 0) {
            router.push('/main');
        } else { router.push(state.pageTabs[(num - 1)].link); }

    } else if (type === 'next') {
        if (state.currentPage.url === '/main') {
            router.push(state.pageTabs[(num)].link);
        } else {
            if (!((num + 1) === state.pageTabs.length))
                router.push(state.pageTabs[(num + 1)].link);
        }
    }


};

const setLocation = () => {
    state.currentPage = { 'url': route.path, 'label': route.meta.sublocation_depth, };
    
}
onMounted(() => {
    setLocation();
})  
watch(route, () => {
    setLocation();
    console.log(state.currentPage.url);
})
</script>
<style>
.helper{height:40px; }
.gnbHeader{width:100%;  background:#e8e1d7;  padding:3px 30px;position: relative; z-index: 9999;} 
.gnbInner > ul {display: flex;}
.gnbInner > ul > li{display: flex; align-items: center; padding:3px 10px;cursor: pointer;}

.gnbInner > ul > li > ul{ margin:0px 0 0 5px; padding: 3px 0 3px 15px;display: none;}
.gnbInner > ul > li.active{display: flex; align-items: center; padding:3px 10px 3px 10px;background: #4e473f;border-radius: 20px; box-shadow: inset 2px 2px 2px rgba(255,255,255,0.15); color:#fff}
.gnbInner > ul > li.active ul{display: flex;}
.gnbInner > ul > li > span{display: flex; color:#4e473f; font-weight:600}
.gnbInner > ul > li.active >span{color:#fff}
.gnbInner > ul > li + li{margin-left:10px}

.gnbInner > ul > li > ul > li{font-size:11px; opacity: .5;}
.gnbInner > ul > li > ul > li.active{opacity: 1;}
.gnbInner > ul > li > ul > li +li{margin-left:10px}
.pageTabs {border-bottom:1px solid var(--base-bd-color); padding-right:120px; position: relative; width:100%}
.pageTabs > ul {display: flex;overflow: hidden; overflow-x: auto; padding-left:30px}
.pageTabs > ul >li {position: relative; width:auto}
.pageTabs > ul >li > .tab-m {display: block; height: 30px; line-height: 30px; padding: 0 34px 0 10px; border-width: 1px 1px 0px; border-style: solid; border-color: var(--base-bd-color); background-color: var(--base-bg-color); font-size: 12px; color: #444; border-radius: 3px 3px 0px 0px; white-space: nowrap;}
.pageTabs > ul >li > .close { display: block; position: absolute; top: 50%; right: 8px; width: 26px; height: 26px; margin-top: -13px; background-color: rgba(0, 0, 0, 0); background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.1999 3.80634C11.9399 3.54634 11.5199 3.54634 11.2599 3.80634L7.99986 7.05968L4.73986 3.79968C4.47986 3.53968 4.05986 3.53968 3.79986 3.79968C3.53986 4.05968 3.53986 4.47968 3.79986 4.73968L7.05986 7.99968L3.79986 11.2597C3.53986 11.5197 3.53986 11.9397 3.79986 12.1997C4.05986 12.4597 4.47986 12.4597 4.73986 12.1997L7.99986 8.93967L11.2599 12.1997C11.5199 12.4597 11.9399 12.4597 12.1999 12.1997C12.4599 11.9397 12.4599 11.5197 12.1999 11.2597L8.93986 7.99968L12.1999 4.73968C12.4532 4.48634 12.4532 4.05968 12.1999 3.80634Z' fill='%23444444'/%3E%3C/svg%3E"); background-size: 16px 16px; background-position: 50% 50%; background-repeat: no-repeat }
.tab-list-control { display: flex; position: absolute; top: 4px; right: 30px }
.pageTabs > ul >li > .tab-m.active{color:#fff; background:var(--primary-bg-color);}
.pageTabs > ul >li > .tab-m.active + .close{background-color: rgba(255, 255, 255, 0);
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.1999 3.80634C11.9399 3.54634 11.5199 3.54634 11.2599 3.80634L7.99986 7.05968L4.73986 3.79968C4.47986 3.53968 4.05986 3.53968 3.79986 3.79968C3.53986 4.05968 3.53986 4.47968 3.79986 4.73968L7.05986 7.99968L3.79986 11.2597C3.53986 11.5197 3.53986 11.9397 3.79986 12.1997C4.05986 12.4597 4.47986 12.4597 4.73986 12.1997L7.99986 8.93967L11.2599 12.1997C11.5199 12.4597 11.9399 12.4597 12.1999 12.1997C12.4599 11.9397 12.4599 11.5197 12.1999 11.2597L8.93986 7.99968L12.1999 4.73968C12.4532 4.48634 12.4532 4.05968 12.1999 3.80634Z' fill='%23ffffff'/%3E%3C/svg%3E"); 
}
.tab-list-control>li+li { margin-left: 6px }
.tab-list-control>li button { display: block; width: 23px; height: 23px; border: 1px solid #ebebeb; background-color: #ebebeb; border-radius: 3px; background-position: 50% 50%; background-repeat: no-repeat }

.tab-list-control>li button.prev { background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.8722 11.928L6.14419 7.20001L10.8722 2.47201L9.60019 1.20001L3.60019 7.20001L9.60019 13.2L10.8722 11.928Z' fill='%23767676'/%3E%3C/svg%3E") }
.tab-list-control>li button.next { background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.52771 2.47201L8.25571 7.20001L3.52771 11.928L4.79971 13.2L10.7997 7.20001L4.79971 1.20001L3.52771 2.47201Z' fill='%23767676'/%3E%3C/svg%3E") }

#adminNav{top:105px;}
#adminContainer .contents{
    position: absolute;
    top: 10px;
    left: 30px;
    right: 10px;
    bottom: 20px;
    padding-right: 10px;
    overflow-y: auto;
    overflow-x: auto;
}
#adminHeader{height:40px}
#adminHeader h1{line-height: 40px;}
#adminHeader .util a{height:40px; line-height: 40px;}
#adminContainer{top:105px; padding:0; left:0; bottom:40px;}
#adminHeader h1::after{top:13px}
.ui-title-2 h2{font-size:13px;}
.breadcrumb{top:9px}
.ui-title-2 h2::before{width:18px; height:18px; top:8px; padding-left:21px;}
.breadcrumb .breadcrumb-item{font-size:11px}
.breadcrumb .breadcrumb-item:first-child::before{top:0; width:14px; height:14px}
.breadcrumb .breadcrumb-item + .breadcrumb-item::before{top:1px; width:10px; height:10px;}
.temp-section{margin-top:10px; min-width:auto;}
.ui-data-filter{padding:10px}
.ui-data-filter .form-item{display: block;}
/* .nav-hide #adminContainer{left:0} */
</style>

