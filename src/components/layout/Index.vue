<template>
    <div class="layout" :class="{'leftMenu': state.activeMenu}">
        <MainHeader />
        <div class="gnbHeader">
            <div class="gnbInner">
                <ul>
                    <li v-for="(item, index) in state.menuList" :key="index" :class="{'active': (state.activeNum == index)}"> 
                        <span  @click="menuClick(index)" >{{item.label}}</span>
                        <ul v-if="item.submenu.length > 0">
                            <li v-for="(depth, i) in item.submenu" :key="i" :class="{'active': (state.submenuNum == i)}" > <span @click="menuClick(index, i)">{{depth.label}}</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="pageTabs" v-if="state.pageTabs">
            <ul>
                <li v-for="(item, index) in state.pageTabs" :key="index">
                    <button type="button" class="tab-m"  :class="{'active': isTabActive(item)}" @click="tabClick(item)">{{item.label}}</button>
                    <button type="button" class="close" @click="tabClose(item)"><span class="offscreen">현재 콘텐츠 닫기</span></button>
                </li>
            </ul>
            <ul class="tab-list-control">
                <li><button type="button" class="prev"  @click="goToMove('prev')"><span class="offscreen">이전 탭으로 이동</span></button></li>
                <li><button type="button" class="next" @click="goToMove('next')"><span class="offscreen" >다음 탭으로 이동</span></button></li>
            </ul>
        </div>
        
        <div id="adminContainer">
            <MainMenu :menuList="state.menuList[state.activeNum]?.submenu[state.submenuNum]?.submenu" @gnbOpen="gnbOpen" v-if="state.activeMenu" />
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
import { watch, onMounted,reactive, computed,nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import ConfirmModal from '@/components/modal/ConfirmModal.vue';
import MainHeader from '@/components/layout/MainHeader.vue';
import MainMenu from '@/components/layout/MainMenu.vue';
import Location from '@/components/layout/Location.vue';
import { next } from 'lodash-es';

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
        {label:'로그 관리', submenu:[
            {label:'거래 로그 조회', submenu:[
                {label:'depth3메뉴1', submenu:[],link:'/main'},
                {label:'depth3메뉴2', submenu:[],link:''},
                {label:'depth3메뉴3', submenu:[],link:''},
            ],link:''},
            {label:'로그레벨조회', submenu:[],link:'/loglevel'},
        ], link:''},
        {label:'전문 관리', submenu:[
            {label:'전문이력조회', submenu:[
                {label:'depth3메뉴1', submenu:[],link:'/buildlist'},
                {label:'depth3메뉴2', submenu:[],link:''},    
                {label:'depth3메뉴3', submenu:[],link:''},    
                {label:'depth3메뉴4', submenu:[],link:''},    
                {label:'depth3메뉴5', submenu:[],link:''},    
            ],link:''},
        ], link:''},
        {label:'메뉴권한관리', submenu:[], link:'/authmanage'},
        {label:'사용자관리', submenu:[], link:'/orgmanage'},
        {label:'자료실', submenu:[
            {label:'공지자료', link:'/notice', submenu:[]   },
            {label:'FAQ', link:'/faq', submenu:[]},
        ], link:''},
        // {label:'로그인', submenu:[], link:'/login'},
        // {label:'회원가입', submenu:[], link:'/member-join'},
        // {label:'비밀번호 변경', submenu:[], link:'/change-pass'},
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
            } else {
                item.isActive = true;
                item.submenu.forEach((list, i) => {
                    if (i === depth2) {
                        list.isActive = true;
                        if (list.submenu.length === 0) {
                            router.push(list.link);
                            console.log(list);
                        } else {
                            //depth3
                            list.submenu.forEach((listlast, idx) => {
                                if (idx === depth3) {
                                    listlast.isActive = true;
                                    router.push(listlast.link);
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
    state.activeNum = index;
    state.activeMenu = false;
    state.submenuNum = i;
    if (typeof i === 'undefined' || i === null) {
        const menuItem = state.menuList[index];
        if (!menuItem) return;
        
        if (menuItem.submenu && menuItem.submenu.length > 0) {
            state.submenuNum = 0;
            const firstSub = menuItem.submenu[0];
            if (!state.pageTabs.some(tab => tab.label === firstSub.label)) {
                state.pageTabs.push(firstSub);
            }
            if(firstSub.submenu && firstSub.submenu.length > 0){
                state.activeMenu = true;
                const firstSubSub = firstSub.submenu[0];
                router.push(firstSubSub.link);
            } else {
                state.submenuActive = 0;
                router.push(firstSub.link);
            }
        } else {
            if (!state.pageTabs.some(tab => tab.label === menuItem.label)) {
                state.pageTabs.push(menuItem);
            }
            router.push(menuItem.link);
        }
        return;
    }
    const submenuItem = state.menuList[index]?.submenu[i];
    if (!submenuItem) return;

    if (submenuItem.submenu && submenuItem.submenu.length > 0) {
        state.activeMenu = true;
        const firstThirdDepth = submenuItem.submenu[0];
        if (!state.pageTabs.some(tab => tab.label === submenuItem.label)) {
            state.pageTabs.push(submenuItem);
        }
        router.push(firstThirdDepth.link);
    } else {
        if (!state.pageTabs.some(tab => tab.label === submenuItem.label)) {
            state.pageTabs.push(submenuItem);
        }
        router.push(submenuItem.link);
    }
}


// 페이지 탭 활성화 여부 (링크 또는 라벨 일치 여부)
const isTabActive = computed(() => {
    return (item) => {
        const currentPath = state.currentPage.url;
        const currentLabel = state.currentPage.label[1];
        if (!item.submenu || item.submenu.length === 0) {
            return currentPath === item.link || currentLabel === item.label;
        }
        if (item.submenu && item.submenu.length > 0) {
            return currentPath === item.submenu[0].link || currentLabel === item.submenu[0].label;
        }
        return false;
    }
});
// 현재 페이지 인덱스 찾기  
const findLinkIndex = (menuArray, targetLink) => {
    let foundIndex = -1;
    menuArray.forEach((item, index) => {
        if (item.link === targetLink) {
            foundIndex = index;
        }
        if (item.submenu && item.submenu.length > 0) {
            item.submenu.forEach((subItem) => {
                if (subItem.link === targetLink) {
                    foundIndex = index;
                }
                if (subItem.submenu && subItem.submenu.length > 0) {
                    subItem.submenu.forEach((thirdItem) => {
                        if (thirdItem.link === targetLink) {
                            foundIndex = index;
                        }
                    });
                }
            });
        }
    });

    return foundIndex;
};

const goToMove = (type) => {
   
    const currentIndex = state.pageTabs.findIndex(tab => 
        tab.link === state.currentPage.url || 
        (tab.submenu && tab.submenu.some(sub => sub.link === state.currentPage.url))
    );
    console.log('state.currentPage', state.currentPage,currentIndex);
    if (type === 'prev' && currentIndex > 0) {
        findMenuAndUpdate(state.pageTabs[currentIndex - 1].label);
    } else if (type === 'next' && currentIndex < state.pageTabs.length - 1) {
        findMenuAndUpdate(state.pageTabs[currentIndex + 1].label);
    }
};

// 메뉴 상태 업데이트 및 라우팅 함수
const updateMenuAndRoute = (menuItem, menuIndex, subIndex = 0) => {
    state.activeNum = menuIndex;
    state.submenuNum = subIndex;
    if (menuItem.submenu && menuItem.submenu.length > 0) {
        router.push(menuItem.submenu[0].link);
        state.activeMenu = true;
    } else {
        router.push(menuItem.link);
        state.activeMenu = false;
    }
};

// 메뉴 리스트에서 해당 탭의 위치 찾기 라우팅 변경
const findMenuAndUpdate = (targetLabel) => {
    console.log('targetLabel', targetLabel);
    for (let menuIndex = 0; menuIndex < state.menuList.length; menuIndex++) {
        const menu = state.menuList[menuIndex];
        if (menu.label === targetLabel) {
            updateMenuAndRoute(menu, menuIndex);
            return true;
        }
        
        for (let subIndex = 0; subIndex < menu.submenu.length; subIndex++) {
            const submenu = menu.submenu[subIndex];
            
            if (submenu.label === targetLabel) {    
                updateMenuAndRoute(submenu, menuIndex, subIndex);
                return true;
            }
        }
    }
    return false;
};

const findMenuAndUpdateA = (targetLabel) => {
    for (let menuIndex = 0; menuIndex < state.menuList.length; menuIndex++) {
        const menu = state.menuList[menuIndex];
        
        if (menu.label === targetLabel) {
            state.activeNum = menuIndex;
            return true;
        }
        
        for (let subIndex = 0; subIndex < menu.submenu.length; subIndex++) {
            const submenu = menu.submenu[subIndex];
            if (submenu.label === targetLabel) {
                state.activeNum = menuIndex;
                state.submenuNum = subIndex;
                return true;
            }
        }
    }
    return false;
};


const tabClick = (item) => {
    const currentTabIndex = state.pageTabs.findIndex(tab => tab.label === item.label);
    console.log('currentTabIndex', state.pageTabs[currentTabIndex]);
    if (currentTabIndex === -1) return;
    findMenuAndUpdate(item.label);
}

const tabClose = (item) => {
    const currentIndex = state.pageTabs.findIndex(tab => tab.label === item.label);
    
    // 현재 페이지를 닫는 경우
    if (state.currentPage.url === item.link || 
        (item.submenu && item.submenu.some(sub => sub.link === state.currentPage.url))) {
        // 이전 탭이 있는 경우
        if (currentIndex > 0) {
            const prevTab = state.pageTabs[currentIndex - 1];
            findMenuAndUpdate(prevTab.label);
        }
        // 다음 탭이 있는 경우
        else if (currentIndex < state.pageTabs.length - 1) {
            const nextTab = state.pageTabs[currentIndex + 1];
            findMenuAndUpdate(nextTab.label);
        }
    }
    
    // 탭 목록에서 제거
    state.pageTabs.splice(currentIndex, 1);
}

// 탭 링크 업데이트 함수
const updateTabLink = (currentPath) => {
    const currentTab = state.pageTabs.find(tab => tab.label === state.currentPage.label[1]);
    if (currentTab) {
        currentTab.link = currentPath;
    }
    console.log('state.pageTabs', state.pageTabs);
};

const setLocation = () => {
    state.currentPage = { 
        'url': route.fullPath, 
        'label': route.meta.sublocation_depth, 
    };

    updateTabLink(route.fullPath);
};

onMounted(() => {
    setLocation();
    nextTick(() => {
        const num = findLinkIndex(state.menuList, state.currentPage.url);
        state.activeNum = num;
        if(state.menuList[num]?.submenu && state.menuList[num].submenu.length > 0){  
            let subNum = 0;
            state.menuList[num].submenu.forEach((item, index) => {
                if(item.link === state.currentPage.url){
                    subNum = index;
                }
            });
            state.pageTabs.push(state.menuList[num].submenu[subNum]);
            state.submenuNum = subNum;
            if(state.menuList[num]?.submenu[subNum]?.submenu && state.menuList[num].submenu[subNum].submenu.length > 0){
                state.activeMenu = true;  
            }
        }else{
            state.pageTabs.push(state.menuList[num]);
        }
    })
});

// 라우트 변경 감지
watch(route, () => {
    setLocation();
    nextTick(() => {
        if (state.currentPage && state.currentPage.label && Array.isArray(state.currentPage.label)) {
            const currentLabel = state.currentPage.label[1];
            console.log('currentLabel', currentLabel);
            
            // state.pageTabs에서 currentLabel을 찾기
            const foundTab = state.pageTabs.find(tab => {
                // 탭의 라벨이 일치하는 경우
                if (tab.label === currentLabel) return true;
                
                // 탭의 서브메뉴 중 라벨이 일치하는 경우
                if (tab.submenu && tab.submenu.length > 0) {
                    return tab.submenu.some(sub => sub.label === currentLabel);
                }
                
                return false;
            });
            
            console.log('foundTab', foundTab);
            
            if (foundTab) {
                findMenuAndUpdateA(currentLabel);
                const isActive = isTabActive.value(foundTab);
                console.log('isActive', isActive);
            }
        }
    });
});
</script>
<style>
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
.ui-title-2 h2::before{width:18px; height:18px; top:4px; padding-left:10px;}
.breadcrumb .breadcrumb-item{font-size:11px}
.breadcrumb .breadcrumb-item:first-child::before{top:0; width:14px; height:14px}
.breadcrumb .breadcrumb-item + .breadcrumb-item::before{top:1px; width:10px; height:10px;}
.temp-section{margin-top:10px; min-width:auto;}
.ui-data-filter{padding:10px}
.ui-data-filter .form-item{display: block;}
.contents > div{padding-right:10px;}
.leftMenu #adminContainer{left:190px}
.leftMenu.nav-hide  #adminContainer{left:10px}
/* .nav-hide #adminContainer{left:0} */
</style>

