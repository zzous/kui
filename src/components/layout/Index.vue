<template>
    <div class="layout">
        <MainHeader />
        <!-- <button type="button" class="nav-toggle" @click="toggleNav"><span class="offscreen">메뉴숨기기</span></button> -->
        <MainMenu :menuList="state.menuList" @gnbOpen="gnbOpen" />
        <div id="adminContainer">
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
        // {label:'공지사항', submenu:[
        //     {label:'공지사항', link:'/notice', submenu:[]   },
        //     {label:'FAQ', link:'/faq', submenu:[]},
        // ], link:''},
        {label:'로그인', submenu:[], link:'/login'},
        {label:'회원가입', submenu:[], link:'/member-join'},
        {label:'비밀번호 변경', submenu:[], link:'/change-pass'},
        
    ],
    currentPage:null
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
.helper{background:#e8e1d7; height:40px; }
</style>

