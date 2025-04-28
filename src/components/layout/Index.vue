<template>
    <div class="layout">
        <MainHeader />
        <div class="gnbHeader">
            <div class="gnbInner" >
                <ul>
                    <li v-for="(item, index) in state.menuList" :key="index"> 
                        <span  @click="menuClick(index)">{{item.label}}</span>
                        <ul>
                            <li v-for="(depth, i) in item.submenu" :key="i" > <span @click="menuClick(index, i)">{{depth.label}}</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
       
        <div class="pageTaps">
            <ul>
                <li v-for="(item, index) in state.pageTabs" :key="index">
                    <span>{{item.label}}</span>
                </li>
            </ul>
        </div>
        <!-- <button type="button" class="nav-toggle" @click="toggleNav"><span class="offscreen">메뉴숨기기</span></button> -->
        
        <div id="adminContainer">
            <MainMenu :menuList="state.menuList[state.activeNum]?.submenu" @gnbOpen="gnbOpen" v-if="state.activeMenu" />
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
import { watch, onMounted,reactive } from 'vue'
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
    menuList:[
        // {label:'로그 관리', submenu:[], link:''},
        {label:'로그 관리', submenu:[
            {label:'거래 로그 조회', submenu:[],link:'/main'},
            {label:'로그레벨조회', submenu:[],link:'/loglevel'},
            // {label:'배포 목록',submenu:[],link:''},
            // {label:'Pass Potal', submenu:[],link:''},
        ], link:''},
        {label:'전문 관리', submenu:[
            {label:'전문이력조회', submenu:[],link:'/buildlist'},
            // {label:'배포 목록',submenu:[],link:''},
            // {label:'Pass Potal', submenu:[],link:''},
        ], link:''},
        {label:'메뉴권한관리', submenu:[], link:'authmanage'},
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
    state.activeNum = index;
   // 1depth 메뉴 클릭
   if (typeof i === 'undefined' || i === null) {
        const menuItem = state.menuList[index];
        if (!menuItem) return;

        // submenu가 있으면 첫 번째 submenu만 추가
        if (menuItem.submenu && menuItem.submenu.length > 0) {
            const firstSub = menuItem.submenu[0];
            if (!state.pageTabs.some(tab => tab.label === firstSub.label)) {
                state.pageTabs.push(firstSub);
                router.push(firstSub.link);
            }
        } else {
            // submenu가 없으면 1depth 메뉴 추가
            if (!state.pageTabs.some(tab => tab.label === menuItem.label)) {
                state.pageTabs.push(menuItem);  
                router.push(menuItem.link);
            }
        }
        return;
    }

    // 2depth 메뉴 클릭
    const submenuItem = state.menuList[index]?.submenu[i];
    if (!submenuItem) return;

    if (!state.pageTabs.some(tab => tab.label === submenuItem.label)) {
        state.pageTabs.push(submenuItem);
        router.push(submenuItem.link);
    }
    
}
const setLocation = () => {
    state.currentPage = { 'url': route.path, 'label': route.meta.sublocation_depth, };
    console.log(state.currentPage.label);
}
onMounted(() => {
    setLocation();
})  
watch(route, () => {
    setLocation();
})
</script>
<style>
.helper{height:40px; }
.gnbHeader{width:100%; height:40px; background:#e8e1d7;  padding:10px 30px;position: relative; z-index: 9999;} 
.gnbInner > ul {display: flex;}
.gnbInner > ul > li{display: flex;}
.gnbInner > ul > li + li{margin-left:10px}
.gnbInner > ul > li > ul{display: flex;}
.gnbInner > ul > li > ul > li{font-size:11px}
.gnbInner > ul > li > ul > li +li{margin-left:10px}
.pageTaps {border-bottom:1px solid var(--base-bd-color)}
.pageTaps > ul {display: flex;}
.pageTaps > ul >li {position: relative; width:auto}
.pageTaps > ul >li > span {    display: block;
    height: 30px;
    line-height: 30px;
    padding: 0 34px 0 10px;
    border-width: 1px 1px 0px;
    border-style: solid;
    border-color: var(--base-bd-color);
    background-color: var(--base-bg-color);
    font-size: 12px;
    color: #444;
    border-radius: 3px 3px 0px 0px;
    white-space: nowrap;}
    #adminContainer{position: relative;display: flex; left:0; top:0; right:0; bottom:0}
    #adminNav{position: relative; left:0; top:0;}
    #adminContainer .contents{position: relative; flex:1; overflow-y: auto; top:0; left:0; right:0; bottom:0; padding:40px;}
</style>

